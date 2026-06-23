import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Systems Automated" },
  { value: "< 50ms", label: "Avg Latency" },
  { value: "99.9%", label: "Uptime" },
  { value: "10x", label: "Efficiency Gain" },
];

export function StatsSection() {
  return (
    <section id="stats" className="py-20 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-bold font-display gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
