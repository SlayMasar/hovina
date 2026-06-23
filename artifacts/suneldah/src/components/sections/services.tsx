import React from "react";
import { motion } from "framer-motion";
import { Bot, Code2, Cpu, Globe, MessageSquare, Zap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Platforms",
    description: "High-performance, scalable web applications built for conversion and resilience."
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Bots",
    description: "Automated conversational interfaces that engage users where they already are."
  },
  {
    icon: Bot,
    title: "AI Agents",
    description: "Intelligent autonomous systems capable of complex reasoning and task execution."
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    description: "Predictive models and data analysis pipelines tailored to your specific domain."
  },
  {
    icon: Code2,
    title: "Custom Software",
    description: "Bespoke digital tools engineered to solve your most complex operational challenges."
  },
  {
    icon: Zap,
    title: "System Integration",
    description: "Seamless connection of disparate systems into a unified, high-efficiency architecture."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Capabilities</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">We architect solutions across the entire technological spectrum.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl group hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-primary/20">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
