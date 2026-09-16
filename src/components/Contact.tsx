import { type FormEvent } from "react";
import Reveal from "./Reveal";
import { MailIcon, PhoneIcon, PinIcon } from "./Icons";

function Contact() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:jeanson.villanueva@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section">
      <Reveal>
        <div className="section-head">
          <div>
            <p className="kicker">Let's talk</p>
            <h2>Contact Me</h2>
          </div>
        </div>
      </Reveal>
      <div className="contact-layout">
        <Reveal>
          <form className="contact-box contact-form" onSubmit={onSubmit}>
            <label>
              Name
              <input name="name" type="text" required placeholder="Your name" />
            </label>
            <label>
              Email
              <input name="email" type="email" required placeholder="you@email.com" />
            </label>
            <label>
              Message
              <textarea name="message" required rows={5} placeholder="Tell me about the project or opportunity." />
            </label>
            <button className="primary-btn" type="submit">
              Send Message
            </button>
          </form>
        </Reveal>
        <div className="contact-side">
          <Reveal delay={60}>
            <article className="contact-box">
              <h3>Let's Connect</h3>
              <p className="muted">
                I'm open to new opportunities, collaborations, and conversations.
              </p>
            </article>
          </Reveal>
          <Reveal delay={120}>
            <article className="contact-box">
              <div className="info-row">
                <MailIcon />
                <div>
                  <p>Email</p>
                  <strong>jeanson.villanueva@gmail.com</strong>
                </div>
              </div>
              <div className="info-row">
                <PhoneIcon />
                <div>
                  <p>Phone</p>
                  <strong>+63 961 715 ####</strong>
                </div>
              </div>
              <div className="info-row">
                <PinIcon />
                <div>
                  <p>Location</p>
                  <strong>Philippines</strong>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
