import { useState } from "react";
import Section from "../components/Section";
import { profile } from "../data/profile";
import ImageModal from "../components/ImageModal";

// Education logos from your assets folder
import logoBNMIT from "../assets/images/bnmit.jpg";
import logoNarayana from "../assets/images/narayana.jpg";
import logoSVEC from "../assets/images/svec.jpg";

function logoForInstitution(name: string) {
  const n = name.toLowerCase();
  if (n.includes("bnm") || n.includes("b n m")) return logoBNMIT;
  if (n.includes("narayana")) return logoNarayana;
  if (n.includes("sri vani")) return logoSVEC;
  return undefined;
}

export default function Education() {
  const [modalSrc, setModalSrc] = useState<string | undefined>(undefined);
  const [modalAlt, setModalAlt] = useState<string>("Preview");

  return (
    <Section id="education" heading="Education" subheading="Academics">
      <div className="grid gap-6 md:grid-cols-2">
        {profile.education.map((e) => {
          const logo = logoForInstitution(e.institution);
          return (
            <article key={e.degree} className="card">
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-xl p-2 ring-1 overflow-hidden bg-slate-50 ring-slate-200 dark:bg-white/5 dark:ring-white/10">
                  {logo ? (
                    <button
                      type="button"
                      onClick={() => {
                        setModalSrc(logo);
                        setModalAlt(`${e.institution} logo`);
                      }}
                      className="cursor-zoom-in"
                    >
                      <img
                        src={logo}
                        alt={`${e.institution} logo`}
                        className="h-10 w-10 object-contain"
                      />
                    </button>
                  ) : (
                    <div className="h-10 w-10 rounded bg-white/10" />
                  )}
                </div>
                <div className="min-w-0">
                  <h3 className="text-slate-900 dark:text-white text-base font-semibold">{e.degree}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {e.institution}, {e.location}
                  </p>
                  {e.details && <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{e.details}</p>}
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
