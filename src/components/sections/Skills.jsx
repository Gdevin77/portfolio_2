import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { skills } from "../../data/portfolioData";

const Skills = () => {
  return (
    <section id="skills" className="container-width py-20">
      <SectionTitle eyebrow="Skills" title="Technologies and expertise" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <motion.article
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`glass-card group min-w-0 p-6 ${skill.details ? "sm:col-span-2 lg:col-span-2" : ""}`}
            >
              <Icon className="text-3xl text-brand-600 transition group-hover:scale-110 dark:text-brand-300" />
              <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">{skill.name}</h3>
              {skill.details && (
                <ol className="mt-5 grid gap-4 sm:grid-cols-2">
                  {skill.details.map((detail, detailIdx) => (
                    <li key={detail.title} className="flex items-start gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700 dark:bg-brand-950 dark:text-brand-300">
                        {detailIdx + 1}
                      </span>
                      <div className="min-w-0">
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{detail.title}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                          {detail.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              )}
              {skill.description && (
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {skill.description}
                </p>
              )}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
