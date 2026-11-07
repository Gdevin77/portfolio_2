import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { services } from "../../data/portfolioData";

const Services = () => {
  return (
    <section id="services" className="container-width py-20">
      <SectionTitle eyebrow="Services" title="How I can help" />
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="glass-card min-w-0 p-6"
            >
              <Icon className="text-2xl text-brand-600 dark:text-brand-300" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{service.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{service.description}</p>
              {service.details && (
                <ol className="mt-5 space-y-4">
                  {service.details.map((detail, detailIdx) => (
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
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
