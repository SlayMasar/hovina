import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Users } from "lucide-react";

export function ProductsSection() {
  return (
    <section id="products" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-10"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-primary block">
            Our Products
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-[#0d1a14] border border-white/10 p-8 md:p-10 flex flex-col"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-xl font-bold text-white">Mejesi</span>
              <span className="text-xs font-mono px-2.5 py-1 rounded border bg-green-500/10 text-green-400 border-green-500/20">
                Live
              </span>
            </div>

            <p className="text-2xl md:text-3xl font-bold text-white leading-snug mb-4">
              Create surveys &amp;{" "}
              <span className="text-green-400">collect responses.</span>
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 flex-1">
              Run polls, gather feedback, and host Q&amp;As — all through WhatsApp. No app download needed.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["Surveys", "Q&A", "WhatsApp"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1.5 rounded-full border border-green-500/20 text-green-400 bg-green-500/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="https://wa.me/263776757578"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-green-500 hover:bg-green-400 text-black font-semibold text-sm py-3.5 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl bg-[#0d1620] border border-white/10 p-8 md:p-10 flex flex-col"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-xl font-bold text-white">Hovina Collab</span>
              <span className="text-xs font-mono px-2.5 py-1 rounded border bg-sky-500/10 text-sky-400 border-sky-500/20">
                Live
              </span>
            </div>

            <p className="text-2xl md:text-3xl font-bold text-white leading-snug mb-4">
              One link, <span className="text-sky-400">everyone editing.</span>
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 flex-1">
              Spin up a shared sheet for a wedding budget, event plan, roora ledger, or group trip — send the link, and anyone can view and edit it together. No sign-up, no app, just open and go.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["Shared Sheets", "No Login", "AI-Assisted"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1.5 rounded-full border border-sky-500/20 text-sky-400 bg-sky-500/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="https://collab.hovina.co.zw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-sky-500 hover:bg-sky-400 text-black font-semibold text-sm py-3.5 transition-colors"
            >
              <Users className="w-4 h-4" />
              Open Hovina Collab
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
