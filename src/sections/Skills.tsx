import Section from "../components/Section";
import { skills, languages } from "../data/skills";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiTensorflow,
  SiKeras,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiMysql,
  SiMongodb,
  SiAmazon,
  SiGooglecloud,
  SiDocker,
  SiGit,
  SiDialogflow,
  SiStreamlit,
  SiJavascript,
  SiHtml5,
  SiCss3
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";

function IconRow({ icons }: { icons: React.ReactNode[] }) {
  return (
    <div className="mt-2 flex flex-wrap items-center gap-3 text-slate-600 dark:text-slate-300">
      {icons.map((Icon, i) => (
        <span key={i} className="inline-flex items-center">{Icon}</span>
      ))}
    </div>
  );
}

function ChipList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {items.map((s) => (
        <li
          key={s}
          className="text-xs rounded-md bg-white/70 text-slate-700 ring-1 ring-slate-200 px-2 py-1 dark:bg-white/5 dark:text-slate-300 dark:ring-white/10"
        >
          {s}
        </li>
      ))}
    </ul>
  );
}

export default function Skills() {
  return (
    <Section id="skills" heading="Skills" subheading="Tech stack">
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="card">
          <h3 className="text-slate-900 dark:text-white text-base font-semibold">Programming & Development</h3>
          <IconRow
            icons={[
              <SiReact key="react" size={18} />,
              <SiTypescript key="ts" size={18} />,
              <SiJavascript key="js" size={18} />,
              <SiNodedotjs key="node" size={18} />,
              <SiHtml5 key="html" size={18} />,
              <SiCss3 key="css" size={18} />
            ]}
          />
          <ChipList items={[...skills.programming, "React", "Node.js", "Express", "Spring Boot"]} />
        </article>

        <article className="card">
          <h3 className="text-slate-900 dark:text-white text-base font-semibold">Data & AI/ML</h3>
          <IconRow
            icons={[
              <SiTensorflow key="tf" size={18} />,
              <SiKeras key="keras" size={18} />,
              <SiOpencv key="opencv" size={18} />,
              <SiNumpy key="numpy" size={18} />,
              <SiPandas key="pandas" size={18} />
            ]}
          />
          <ChipList items={[...skills.ai_ml, ...skills.data, "Scikit-learn", "Data Visualization"]} />
        </article>

        <article className="card">
          <h3 className="text-slate-900 dark:text-white text-base font-semibold">Databases</h3>
          <IconRow
            icons={[<SiMysql key="mysql" size={18} />, <SiMongodb key="mongo" size={18} />]}
          />
          <ChipList items={[...skills.databases, "Firestore"]} />
        </article>

        <article className="card">
          <h3 className="text-slate-900 dark:text-white text-base font-semibold">Cloud & Tools</h3>
          <IconRow
            icons={[
              <SiAmazon key="aws" size={18} />,
              <SiGooglecloud key="gcp" size={18} />,
              <FaMicrosoft key="microsoft" size={18} />,
              <SiDocker key="docker" size={18} />,
              <SiGit key="git" size={18} />,
              <SiDialogflow key="dialogflow" size={18} />,
              <SiStreamlit key="streamlit" size={18} />
            ]}
          />
          <ChipList items={[...skills.cloud, ...skills.tools, ...skills.domains, "Postman", "REST APIs", "CI/CD"]} />
        </article>

        <article className="card lg:col-span-2">
          <h3 className="text-slate-900 dark:text-white text-base font-semibold">Languages</h3>
          <ChipList items={[...languages]} />
        </article>
      </div>
    </Section>
  );
}
