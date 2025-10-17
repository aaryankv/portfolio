import { motion, type Variants } from "framer-motion";
import React from "react";

type SectionProps = {
  id: string;
  className?: string;
  children: React.ReactNode;
  heading?: string;
  subheading?: string;
};

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function Section({
  id,
  className = "",
  children,
  heading,
  subheading
}: SectionProps) {
  return (
    <section id={id} className={["section", "pt-24", className].join(" ")}>
      {(heading || subheading) && (
        <div className="mb-10">
          {subheading && (
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary-600 dark:text-primary-300">
              {subheading}
            </p>
          )}
          {heading && (
            <div className="mt-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">{heading}</h2>
              <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-primary-500 to-cyan-400" />
            </div>
          )}
        </div>
      )}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {children}
      </motion.div>
    </section>
  );
}
