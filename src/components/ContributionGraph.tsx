import { useEffect, useMemo, useState } from "react";
import { GithubIcon } from "./Icons";

const GITHUB_USER = "jeansonvillanueva";
const CONTRIBUTIONS_API = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}`;
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const WEEKDAYS = ["", "Mon", "", "Wed", "", "Fri", ""];

type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

type ContributionPayload = {
  total: Record<string, number>;
  contributions: ContributionDay[];
};

function parseLocalDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function toIsoDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function startOfWeek(date: Date) {
  const next = new Date(date);
  next.setHours(0, 0, 0, 0);
  next.setDate(next.getDate() - next.getDay());
  return next;
}

function endOfWeek(date: Date) {
  const next = startOfWeek(date);
  next.setDate(next.getDate() + 6);
  return next;
}

function buildWeeks(days: Map<string, ContributionDay>, from: Date, to: Date) {
  const weeks: (ContributionDay | null)[][] = [];
  const cursor = startOfWeek(from);
  const last = endOfWeek(to);

  while (cursor <= last) {
    const week: (ContributionDay | null)[] = [];
    for (let i = 0; i < 7; i += 1) {
      const iso = toIsoDate(cursor);
      const inRange = cursor >= from && cursor <= to;
      week.push(inRange ? (days.get(iso) ?? { date: iso, count: 0, level: 0 }) : null);
      cursor.setDate(cursor.getDate() + 1);
    }
    weeks.push(week);
  }

  return weeks;
}

function formatDayLabel(day: ContributionDay) {
  const date = parseLocalDate(day.date);
  const when = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  if (day.count === 0) return `No contributions on ${when}`;
  if (day.count === 1) return `1 contribution on ${when}`;
  return `${day.count} contributions on ${when}`;
}

function ContributionGraph() {
  const currentYear = new Date().getFullYear();
  const [payload, setPayload] = useState<ContributionPayload | null>(null);
  const [year, setYear] = useState(currentYear);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    const controller = new AbortController();

    fetch(CONTRIBUTIONS_API, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Could not load contributions");
        return response.json() as Promise<ContributionPayload>;
      })
      .then((data) => {
        setPayload(data);
        setStatus("ready");
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setStatus("error");
      });

    return () => controller.abort();
  }, []);

  const years = useMemo(() => {
    const fromApi = Object.keys(payload?.total ?? {})
      .map(Number)
      .filter((value) => Number.isFinite(value))
      .sort((a, b) => b - a);
    return fromApi.length ? fromApi : [currentYear, currentYear - 1, currentYear - 2, currentYear - 3];
  }, [payload, currentYear]);

  const dayMap = useMemo(() => {
    const map = new Map<string, ContributionDay>();
    payload?.contributions.forEach((day) => map.set(day.date, day));
    return map;
  }, [payload]);

  const isCurrentYear = year === currentYear;
  const range = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (isCurrentYear) {
      const from = new Date(today);
      from.setFullYear(from.getFullYear() - 1);
      return { from, to: today };
    }

    return {
      from: new Date(year, 0, 1),
      to: new Date(year, 11, 31),
    };
  }, [isCurrentYear, year]);

  const weeks = useMemo(
    () => buildWeeks(dayMap, range.from, range.to),
    [dayMap, range],
  );

  const total = useMemo(() => {
    if (isCurrentYear) {
      return weeks.reduce(
        (sum, week) => sum + week.reduce((weekSum, day) => weekSum + (day?.count ?? 0), 0),
        0,
      );
    }
    return payload?.total[String(year)] ?? 0;
  }, [isCurrentYear, payload, weeks, year]);

  const monthLabels = useMemo(
    () =>
      weeks.map((week) => {
        const firstOfMonth = week.find((day) => day && parseLocalDate(day.date).getDate() === 1);
        return firstOfMonth ? MONTHS[parseLocalDate(firstOfMonth.date).getMonth()] : "";
      }),
    [weeks],
  );

  return (
    <div className="contrib-layout">
      <article className="contrib-card">
        <div className="contrib-head">
          <h3>
            <span>{status === "loading" ? "—" : total.toLocaleString()}</span>{" "}
            {isCurrentYear ? "contributions in the last year" : `contributions in ${year}`}
          </h3>
          <a
            className="more-link contrib-link"
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon size={15} />
            GitHub
          </a>
        </div>

        <div className="contrib-scroll">
          <div className="contrib-board" role="img" aria-label="GitHub contribution graph">
            <div className="contrib-weekdays" aria-hidden="true">
              <span />
              {WEEKDAYS.map((label, index) => (
                <span key={`${label}-${index}`}>{label}</span>
              ))}
            </div>

            <div className="contrib-grid">
              <div className="contrib-months" aria-hidden="true">
                {monthLabels.map((label, index) => (
                  <span key={`month-${index}`}>{label}</span>
                ))}
              </div>
              <div className="contrib-weeks">
                {weeks.map((week, weekIndex) => (
                  <div className="contrib-week" key={`week-${weekIndex}`}>
                    {week.map((day, dayIndex) =>
                      day ? (
                        <span
                          key={day.date}
                          className={`contrib-cell level-${Math.min(day.level, 4)}`}
                          title={formatDayLabel(day)}
                        />
                      ) : (
                        <span className="contrib-cell is-empty" key={`pad-${weekIndex}-${dayIndex}`} />
                      ),
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="contrib-foot">
          <p className="contrib-note">
            {status === "error"
              ? "Live GitHub data is unavailable right now."
              : "Activity from public GitHub contributions."}
          </p>
          <div className="contrib-legend" aria-hidden="true">
            <span>Less</span>
            <i className="contrib-cell level-0" />
            <i className="contrib-cell level-1" />
            <i className="contrib-cell level-2" />
            <i className="contrib-cell level-3" />
            <i className="contrib-cell level-4" />
            <span>More</span>
          </div>
        </div>
      </article>

      <div className="contrib-years" role="tablist" aria-label="Contribution year">
        {years.map((value) => (
          <button
            key={value}
            type="button"
            role="tab"
            aria-selected={year === value}
            className={`contrib-year ${year === value ? "is-active" : ""}`}
            onClick={() => setYear(value)}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ContributionGraph;
