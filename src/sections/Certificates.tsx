import { useState } from "react";
import Section from "../components/Section";
import ImageModal from "../components/ImageModal";

// Certificate images from your assets folder
import imgAzureNLP from "../assets/images/Natural lan.jpg";
import imgAzureVision from "../assets/images/azure ai.jpg";
import imgIITM from "../assets/images/IITM.jpg";
import imgPwCLaunchpad from "../assets/images/pwc launchpad.jpg";
import imgPwCIntern from "../assets/images/PwC Internship.jpg";
import imgEmpulseIntern from "../assets/images/Empulse internship.jpg";

type Cert = {
  title: string;
  issuer: string;
  img: string;
};

const certificates: Cert[] = [
  {
    title: "PwC Launchpad – Cloud & Digital",
    issuer: "PwC",
    img: imgPwCLaunchpad
  },
  {
    title: "Strategy Formulation and Data Visualization",
    issuer: "IIT Madras",
    img: imgIITM
  },
  {
    title: "Build a Natural Language Processing Solution with Azure AI",
    issuer: "Microsoft",
    img: imgAzureNLP
  },
  {
    title: "Build an Azure AI Vision Solution",
    issuer: "Microsoft",
    img: imgAzureVision
  },
  // Internship certificates
  {
    title: "Internship Certificate",
    issuer: "PwC (PricewaterhouseCoopers)",
    img: imgPwCIntern
  },
  {
    title: "Internship Certificate",
    issuer: "eMpulse Global",
    img: imgEmpulseIntern
  }
];

export default function Certificates() {
  const [modalSrc, setModalSrc] = useState<string | undefined>(undefined);
  const [modalAlt, setModalAlt] = useState<string>("Preview");
  return (
    <Section id="certificates" heading="Certificates" subheading="Validated skills">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c) => (
          <article key={c.title + c.issuer} className="card">
            <div className="flex items-start gap-3">
              <div className="mt-1 rounded-xl p-2 ring-1 overflow-hidden bg-slate-50 ring-slate-200 dark:bg-white/5 dark:ring-white/10">
                <button
                  type="button"
                  onClick={() => {
                    setModalSrc(c.img);
                    setModalAlt(`${c.title} - ${c.issuer}`);
                  }}
                  className="cursor-zoom-in"
                >
                  <img
                    src={c.img}
                    alt={`${c.title} - ${c.issuer}`}
                    className="h-12 w-12 object-contain"
                  />
                </button>
              </div>
              <div className="min-w-0">
                <h3 className="text-slate-900 dark:text-white text-base font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{c.issuer}</p>
              </div>
            </div>
          </article>
        ))}
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
