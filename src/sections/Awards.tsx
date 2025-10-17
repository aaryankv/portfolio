import Section from "../components/Section";

const awards = [
  "PwC Launchpad Program Graduate",
  "Microsoft Azure AI Certified",
  "IIT Madras Certification – Data Visualization",
  "Academic Merit at BNMIT",
  "Developed multiple ML-based solutions during internships"
];

export default function Awards() {
  return (
    <Section id="awards" heading="Awards & Achievements" subheading="Milestones">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {awards.map((a) => (
          <article key={a} className="card">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">{a}</h3>
          </article>
        ))}
      </div>
    </Section>
  );
}
