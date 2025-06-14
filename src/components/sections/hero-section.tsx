"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { GlitchText } from "@/components/glitch-text"
import { AnimatedSection } from "@/components/animated-section"

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  const currentYear = new Date().getFullYear()
  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 relative">
      {/* Brutalist grid overlay */}
      <div className="absolute inset-0 grid-lines pointer-events-none"></div>

      {/* Red diagonal line */}
      <div className="absolute top-0 left-0 w-full h-8 bg-primary bg-[#00DBD8]"></div>
      <div className="absolute top-8 right-0 w-8 h-[30vh] bg-[#00DBD8]"></div>

      <div className={`transition-all duration-1000 ${loaded ? "opacity-100" : "opacity-0 translate-y-10"}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <AnimatedSection delay={200}>
              <div className="inline-block border-2 border-[#00DBD8] px-4 py-1 font-mono text-sm relative overflow-hidden">
                <span className="relative z-10">PORTFOLIO / {currentYear}</span>
                <div className="absolute inset-0 bg-primary/20 -translate-x-full animate-[slide-in_2s_ease-in-out]"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                <GlitchText text="SZWAGERY AGUSTINUS" className="block" />
                <GlitchText text="RAJAGUKGUK" className="block mt-2 text-[#00DBD8]" />
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <p className="text-xl text-[#C5C6C7] max-w-md border-l-4 border-[#00DBD8] pl-4">
                Informatics student at Universitas Atma Jaya Yogyakarta with experience in full-stack development.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={800}>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="font-mono group relative overflow-hidden bg-[#00DBD8] hover:bg-[#00DBD8]/90 rounded-none" onClick={() => window.location.href = "#projects"}>
                  <span className="relative z-10 text-[#0B0C10]">VIEW PROJECTS</span>
                  <span className="absolute inset-0 bg-white/50 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.location.href = "#contact"}
                  className="font-mono border-[#00DBD8] text-[#00DBD8] hover:text-white hover:bg-[#00DBD8]/20 rounded-none"
                >
                  CONTACT ME
                </Button>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="left" delay={600} className="hidden lg:block">
            <div className="aspect-square bg-background border-2 border-[#00DBD8] relative overflow-hidden border-brutalist">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-mono">
                <img src="/images/Me.webp" alt="Profile Image" className="hover:grayscale-0 transition duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-[#00DBD8] p-4 font-mono text-sm text-primary-foreground">
                <div className="flex justify-between">
                  <span className="animate-pulse text-[#0B0C10]">DEVELOPER</span>
                  <span className="text-[#0B0C10]">DESIGNER</span>
                  <span className="text-[#0B0C10]">CREATOR</span>
                </div>
              </div>

              {/* Brutalist decorative elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#00DBD8]"></div>
              <div className="absolute bottom-32 left-0 w-8 h-8 bg-[#00DBD8]"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
