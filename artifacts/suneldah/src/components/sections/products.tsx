import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export function ProductsSection() {
  return (
    <section id="products" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-primary mb-4 block">
            Our Product
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Mejesi</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Create surveys &amp; collect responses — all through WhatsApp. Run polls, gather feedback, and host Q&amp;As. No app download needed.
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {["Surveys", "Q&A", "WhatsApp"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1.5 rounded-full border border-primary/20 text-primary bg-primary/5"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href="https://wa.me/263776757578"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-green-400 hover:text-green-300 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
