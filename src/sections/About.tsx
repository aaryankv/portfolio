import Section from "../components/Section";
import { profile } from "../data/profile";

// Photos from your assets folder
import imgA from "../assets/images/thumbnail_IMG_6673.jpg";
import imgB from "../assets/images/thumbnail_IMG_6721.jpg";
import imgC from "../assets/images/thumbnail_IMG_20240514_000715_293_Original.jpg";
import imgD from "../assets/images/thumbnail_IMG_3635.jpg";

export default function About() {
  return (
    <Section id="about" heading="About Me" subheading="Who I am">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        {/* Photo grid (aligned squares) */}
        <div className="grid grid-cols-2 gap-4">
          {[imgA, imgB, imgC, imgD].map((src, i) => (
            <div
              key={String(i)}
              className="relative aspect-square overflow-hidden rounded-xl ring-1 bg-slate-100 ring-slate-200 dark:bg-slate-900/40 dark:ring-white/10"
            >
            <img
              src={src}
              alt={`Aaryan photo ${i + 1}`}
              className={`w-full object-cover rounded-2xl transition-all duration-300 ${
                i === 1
                  ? 'h-64 object-[7%_center]' // 2nd photo → slight right shift
                  : i === 3
                  ? 'h-64 object-top' // 4th photo → crop upward, show full hair
                  : 'h-full object-center'
              }`}
            />



            </div>
          ))}
        </div>

        {/* Summary + quick facts */}
        <div className="space-y-6">
          <p className="text-slate-700 dark:text-slate-300">{profile.summary}</p>

          <div className="card">
            <h3 className="text-slate-900 dark:text-white text-base font-semibold">Quick Facts</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>
                <span className="text-slate-900 dark:text-slate-200 font-medium">Based in:</span>{" "}
                Bengaluru, India
              </li>
              <li>
                <span className="text-slate-900 dark:text-slate-200 font-medium">Degree:</span>{" "}
                B.Tech in AI & Machine Learning — BNMIT
              </li>
              <li>
                <span className="text-slate-900 dark:text-slate-200 font-medium">Interests:</span>{" "}
                AI-driven innovation, AR/VR, system design, intelligent automation
              </li>
              <li>
                <span className="text-slate-900 dark:text-slate-200 font-medium">Email:</span>{" "}
                <a href={`mailto:${profile.email}`} className="underline decoration-slate-400/30 dark:decoration-white/20">
                  {profile.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="text-sm text-slate-600 dark:text-slate-400">
            Skills, Experience, Education, Certificates, Testimonials, Blog, and Awards have their own sections below for easier navigation and focus.
          </div>
        </div>
      </div>
    </Section>
  );
}
