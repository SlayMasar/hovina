import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Hovina Comms",
    description: "Enterprise WhatsApp bot framework with advanced NLP and dynamic routing capabilities.",
    status: "Active",
    tags: ["WhatsApp", "NLP", "Node.js"],
  },
  {
    name: "Aura Analytics",
    description: "Predictive machine learning platform for African retail markets.",
    status: "Beta",
    tags: ["Python", "TensorFlow", "React"],
  },
  {
    name: "Nexus Core",
    description: "Microservices architecture boilerplate for rapid deployment of financial tech.",
    status: "Active",
    tags: ["Go", "Kubernetes", "PostgreSQL"],
  }
];

export function ProductsSection() {
  return (
    <section id="products" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Internal Products</h2>
            <p className="text-muted-foreground text-lg">We don't just build for others. We build our own intelligent systems to solve systemic problems.</p>
          </div>
          <Button variant="outline" className="shrink-0 border-white/10 bg-white/5 hover:bg-white/10 rounded-full">
            View All Projects <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl flex flex-col h-full border border-white/5 hover:border-primary/30 transition-colors group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-sm bg-secondary/80 group-hover:scale-125 transition-transform" />
                </div>
                <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-muted-foreground border border-white/10">
                  {product.status}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 font-display">{product.name}</h3>
              <p className="text-muted-foreground flex-grow mb-8">
                {product.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {product.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
