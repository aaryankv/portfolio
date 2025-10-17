import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Section from "../components/Section";
import { profile } from "../data/profile";
import { socialLinks } from "../data/socialLinks";

export default function Contact() {
  return (
    <Section id="contact" heading="Contact" subheading="Let's talk">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="card">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Send a message</h3>
          <form
            className="mt-4 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const data = new FormData(form);
              const name = data.get("name");
              const email = data.get("email");
              const message = data.get("message");
              const mailto = `mailto:${profile.email}?subject=Portfolio%20Contact%20from%20${encodeURIComponent(
                String(name || "")
              )}&body=${encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)}`;
              window.location.href = mailto;
            }}
          >
            <div>
              <label htmlFor="name" className="block text-sm text-slate-700 dark:text-slate-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder="Your name"
                className="mt-1 w-full rounded-lg bg-white text-slate-900 ring-1 ring-slate-200 px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-white/5 dark:text-slate-100 dark:ring-white/10"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-slate-700 dark:text-slate-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="mt-1 w-full rounded-lg bg-white text-slate-900 ring-1 ring-slate-200 px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-white/5 dark:text-slate-100 dark:ring-white/10"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-slate-700 dark:text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="How can I help?"
                className="mt-1 w-full resize-y rounded-lg bg-white text-slate-900 ring-1 ring-slate-200 px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-white/5 dark:text-slate-100 dark:ring-white/10"
              />
            </div>

            <div className="flex items-center gap-3">
              <button type="submit" className="btn-primary">
                <FaEnvelope className="opacity-80" />
                Send
              </button>
              <a
                href={`mailto:${profile.email}`}
                className="btn-secondary"
                aria-label="Email direct"
              >
                <FaEnvelope className="opacity-80" />
                Email direct
              </a>
            </div>
          </form>
        </div>

        <div className="space-y-6">
          <div className="card">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Connect</h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              I'm open to opportunities, collaborations, and interesting problems.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="btn-secondary"
              >
                <FaGithub className="opacity-80" />
                GitHub
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="btn-secondary"
              >
                <FaLinkedin className="opacity-80" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Prefer WhatsApp?</h3>
            <a
              href={`https://wa.me/${socialLinks.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block btn-primary"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
