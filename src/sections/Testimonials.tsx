import Section from "../components/Section";

const testimonials = [
  {
    name: "Mr. Naveen MS",
    role: "Manager, eMpulse Global",
    quote:
      "Aaryan consistently demonstrated analytical depth and creative thinking. His contributions to ML-based projects brought innovation and precision to our workflow."
  },
  {
    name: "Hemanth",
    role: "Colleague, eMpulse Global",
    quote:
      "Aaryan is a dedicated team player with an eye for detail. Working alongside him made complex ML tasks smoother and more fun."
  },
  {
    name: "Prasanna Vadhana B",
    role: "Senior Colleague, PwC",
    quote:
      "Aaryan’s technical maturity and quick learning abilities made him a valuable part of our integration team. His clarity in problem-solving stands out."
  },
  {
    name: "Dr. Mahanthesha U",
    role: "Professor, BNMIT",
    quote:
      "Aaryan’s commitment to excellence and curiosity towards AI applications have always impressed me. He blends innovation with practicality."
  }
];

export default function Testimonials() {
  return (
    <Section id="testimonials" heading="Testimonials" subheading="What others say">
      <div className="grid gap-6 sm:grid-cols-2">
        {testimonials.map((t) => (
          <figure key={t.name} className="card">
            <blockquote className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-4">
              <div className="text-slate-900 dark:text-white text-sm font-semibold">{t.name}</div>
              <div className="text-slate-600 dark:text-slate-400 text-xs">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
