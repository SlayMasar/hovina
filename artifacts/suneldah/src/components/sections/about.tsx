import React from "react";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Built in Africa.<br/>
              <span className="text-muted-foreground">Operating Globally.</span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hovina isn't just another agency. We are an innovation lab bridging the gap between cutting-edge technology and real-world application.
              </p>
              <p>
                We believe that technology should be accessible and transformative. Whether we're developing our own proprietary products or engineering custom solutions for enterprise clients, our mission remains constant: ship products that actually work.
              </p>
              <p>
                No fluff. No empty metrics. Just pure, unadulterated engineering excellence.
              </p>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">100%</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">In-house</span>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">24/7</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Uptime Focus</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-square lg:aspect-[4/5] glass-card border border-primary/20 p-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay z-10" />
              <img
                src="/hero-image.png"
                alt="Hovina Team and Tech"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 glass-card p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-mono text-sm text-foreground">SYS.STATUS: NOMINAL</span>
                </div>
                <span className="font-mono text-sm text-primary">v2.0.4</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
