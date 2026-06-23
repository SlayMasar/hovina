import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Blueprint",
    description: "We analyze your operational needs and architect a precise technical blueprint.",
  },
  {
    number: "02",
    title: "Engineering",
    description: "Our team builds the solution with a focus on performance, scale, and resilience.",
  },
  {
    number: "03",
    title: "Deployment",
    description: "Rigorous testing precedes a seamless integration into your existing systems.",
  },
  {
    number: "04",
    title: "Evolution",
    description: "Continuous monitoring, optimization, and scaling as your operations grow.",
  }
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-muted/20">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">The Engineering Protocol</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A systematic approach to transforming complex problems into elegant software solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-7xl font-bold font-display text-foreground/5 mb-4 select-none">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">{step.title}</h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[80%] w-[40%] h-[1px] bg-gradient-to-r from-primary/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
