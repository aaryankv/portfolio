import { useState } from "react";
import Section from "../components/Section";
import { profile } from "../data/profile";
import { FaBriefcase } from "react-icons/fa";
import ImageModal from "../components/ImageModal";

// Company logos
import logoOracle from "../assets/images/oracle.jpg";
import logoPwC from "../assets/images/pwc.jpg";
import logoEmpulse from "../assets/images/empulseglobal_logo.jpg";

function logoForCompany(name: string) {
  const n = name.toLowerCase();
  if (n.includes("oracle")) return logoOracle;
  if (n.includes("pwc")) return logoPwC;
  if (n.includes("empulse")) return logoEmpulse;
  return undefined;
}

export default function Experience() {
  const [modalSrc, setModalSrc] = useState<string | undefined>(undefined);
  const [modalAlt, setModalAlt] = useState<string>("Preview");

  return (
    <Section id="experience" heading="Professional Experience" subheading="Career">
      <div className="space-y-6">
        {profile.experience.map((x) => {
          const logo = logoForCompany(x.company);
          return (
            <article key={x.role + x.company} className="card">
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-xl bg-white/5 p-2 ring-1 ring-white/10 overflow-hidden">
                  {logo ? (
                    <button
                      type="button"
                      onClick={() => {
                        setModalSrc(logo);
                        setModalAlt(`${x.company} logo`);
                      }}
                      className="cursor-zoom-in"
                    >
                      <img
                        src={logo}
                        alt={`${x.company} logo`}
                        className="h-10 w-10 object-contain"
                      />
                    </button>
                  ) : (
                    <div className="rounded-full bg-primary-500/20 p-2 ring-1 ring-primary-500/30">
                      <FaBriefcase className="text-primary-400" />
                    </div>
                  )}
                </div>
                <div className="min-w-0">
                  <h3 className="text-slate-900 dark:text-white text-base font-semibold">
                    {x.role} — {x.company}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {x.location} • {x.period}
                  </p>
                  <ul className="mt-3 list-disc ml-5 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                    {x.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <ImageModal
        open={Boolean(modalSrc)}
        src={modalSrc}
        alt={modalAlt}
        onClose={() => setModalSrc(undefined)}
      />
    </Section>
  );
}
