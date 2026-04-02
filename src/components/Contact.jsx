import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import {
  FiCheck,
  FiCopy,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

export default function Contact() {
  const email = "ramacharya333@gmail.com";
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = form.name.trim()
      ? `Portfolio inquiry from ${form.name.trim()}`
      : "Portfolio inquiry";

    const body = [
      `Name: ${form.name.trim() || "-"}`,
      `Email: ${form.email.trim() || "-"}`,
      "",
      form.message.trim() || "-",
    ].join("\n");

    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [email, form.email, form.message, form.name]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setError("Copy failed in this browser. Please copy manually.");
    }
  }

  function submit(e) {
    e.preventDefault();
    setError("");

    if (!form.message.trim()) {
      setError("Please add a short message.");
      return;
    }

    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    window.location.href = mailtoHref;
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-10 mb-12">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-sm font-semibold tracking-widest text-indigo-400 uppercase">
                Contact
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold mt-3 text-white">
                Let’s build something premium
              </h2>
              <p className="mt-4 text-lg text-[color:var(--muted)] leading-relaxed">
                If you’d like to get in touch regarding opportunities, collaborations, or questions, feel free to reach out. I typically respond within{" "}
                <span className="text-white/90 font-semibold">24 to 48 hours</span>.
              </p>
            </Reveal>
          </div>

          <Reveal delayMs={120} className="hidden lg:block">
            <div className="rounded-3xl border border-white/10 bg-glass backdrop-blur-xl p-6 shadow-xl">
              <p className="text-sm font-semibold text-white/80">
                Best way to reach me
              </p>
              <p className="mt-3 text-sm text-[color:var(--muted)] leading-relaxed">
                Email is fastest. If you prefer, use LinkedIn or GitHub—I reply via email.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <Reveal className="lg:col-span-7">
            <form
              onSubmit={submit}
              className="rounded-3xl border border-white/10 bg-glass backdrop-blur-xl p-7 shadow-2xl"
            >
              <div>
                <p className="text-sm font-semibold text-white/80">
                  Send a message
                </p>
                <p className="mt-2 text-sm text-[color:var(--muted)] leading-relaxed">
                  This uses your email client (mailto), so it’s lightweight and privacy-friendly.
                </p>
              </div>

              {error ? (
                <div className="mt-5 rounded-2xl border border-fuchsia-300/30 bg-fuchsia-400/10 p-4 text-sm text-fuchsia-100">
                  {error}
                </div>
              ) : null}

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold text-white/80">Name</span>
                  <input
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-white/80">
                    Email
                  </span>
                  <input
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="you@example.com"
                    autoComplete="email"
                    inputMode="email"
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="text-sm font-semibold text-white/80">
                    Message
                  </span>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="mt-2 w-full min-h-[140px] resize-y rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="Tell me what you’re looking for..."
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-2xl bg-white text-black px-6 py-3 font-semibold shadow-xl hover:shadow-[0_0_32px_rgba(255,255,255,0.18)] hover:scale-[1.02] transition-transform"
                >
                  Send Message
                </button>

                <a
                  href={mailtoHref}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white/90 hover:bg-white/10 hover:border-white/25 transition-colors"
                >
                  Use email directly
                </a>
              </div>
            </form>
          </Reveal>

          <div className="lg:col-span-5 space-y-4">
            <Reveal>
              <div className="rounded-3xl border border-white/10 bg-glass backdrop-blur-xl p-7 shadow-2xl">
                <p className="text-sm font-semibold text-white/80">
                  Direct contacts
                </p>
                <div className="mt-5 grid gap-3">
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="group w-full text-left rounded-2xl border border-white/10 bg-white/5 px-4 py-4 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <FiMail size={18} className="text-indigo-300" />
                        <div>
                          <p className="text-sm font-semibold text-white/90">
                            Email
                          </p>
                          <p className="text-xs text-white/60 break-all">
                            {email}
                          </p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-glass px-3 py-1 text-xs font-semibold text-white/70">
                        {copied ? (
                          <>
                            <FiCheck size={14} />
                            Copied
                          </>
                        ) : (
                          <>
                            <FiCopy size={14} />
                            Copy
                          </>
                        )}
                      </span>
                    </div>
                  </button>

                  <a
                    href="https://linkedin.com/in/ram-acharya-b9b62326b"
                    target="_blank"
                    rel="noreferrer"
                    className="group w-full text-left rounded-2xl border border-white/10 bg-white/5 px-4 py-4 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <FiLinkedin size={18} className="text-indigo-300" />
                        <div>
                          <p className="text-sm font-semibold text-white/90">
                            LinkedIn
                          </p>
                          <p className="text-xs text-white/60">
                            Connect & discuss
                          </p>
                        </div>
                      </div>
                      <span className="text-xs text-white/60 group-hover:text-white/80 font-semibold">
                        Open
                      </span>
                    </div>
                  </a>

                  <a
                    href="https://github.com/AcharyaRam"
                    target="_blank"
                    rel="noreferrer"
                    className="group w-full text-left rounded-2xl border border-white/10 bg-white/5 px-4 py-4 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <FiGithub size={18} className="text-indigo-300" />
                        <div>
                          <p className="text-sm font-semibold text-white/90">
                            GitHub
                          </p>
                          <p className="text-xs text-white/60">
                            Repos & code
                          </p>
                        </div>
                      </div>
                      <span className="text-xs text-white/60 group-hover:text-white/80 font-semibold">
                        Open
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={120}>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-tr from-indigo-500/15 via-white/5 to-fuchsia-500/10 backdrop-blur-xl p-7 shadow-2xl">
                <p className="text-sm font-semibold text-white/80">
                  What to include
                </p>
                <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-300" />
                    Your role or opportunity
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-300" />
                    Scope + timeline
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-200" />
                    What success looks like
                  </li>
                </ul>

                <div className="mt-6">
                  <a
                    href="/Ram_Acharya_Resume.pdf"
                    download
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-white text-black px-6 py-3 font-semibold shadow-lg hover:shadow-[0_0_32px_rgba(255,255,255,0.18)] transition-transform"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
