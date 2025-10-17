import Section from "../components/Section";

type Post = {
  title: string;
  excerpt: string;
};

const posts: Post[] = [
  {
    title: "Bringing AI to Everyday Life",
    excerpt:
      "Artificial Intelligence isn’t just about futuristic robots — it’s in the little things that simplify our day. From smart recommendations to medical image analysis, AI is weaving into our daily routines. During my internship at eMpulse Global, I realized that AI is most impactful when it solves human problems. My goal is to keep exploring how simple models can create meaningful change in the real world."
  },
  {
    title: "Why Cloud and AI Are the Perfect Pair",
    excerpt:
      "Cloud computing and AI are two sides of the same innovation coin. At PwC, I worked on cloud integration workflows that made data instantly accessible for analytics pipelines. The synergy of data scalability (Cloud) and intelligence (AI) enables limitless innovation — from automation to real-time insights."
  },
  {
    title: "Learning from Failure in Machine Learning",
    excerpt:
      "Machine learning isn’t magic — it’s iteration. Early on, I faced multiple failed model runs. But each failure refined my understanding of data imbalance, overfitting, and model interpretability. Every failure was a lesson in resilience. Now, I approach every project as an opportunity to learn before I optimize."
  },
  {
    title: "Building the Bridge Between AI and People",
    excerpt:
      "As much as I love tech, I believe the best developers are storytellers. My passion lies in making AI understandable and usable by everyone. Whether through intuitive dashboards or conversational chatbots, my mission is to bridge the gap between AI’s complexity and human simplicity."
  }
];

export default function Blog() {
  return (
    <Section id="blog" heading="Blog" subheading="Insights">
      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((p) => (
          <article key={p.title} className="card">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {p.excerpt}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
