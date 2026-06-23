import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { AboutSection } from "@/components/sections/about";
import { StatsSection } from "@/components/sections/stats";
import { ProcessSection } from "@/components/sections/process";
import { ProductsSection } from "@/components/sections/products";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <AboutSection />
        <ProcessSection />
        <ProductsSection />
      </main>
      <Footer />
    </div>
  );
}
