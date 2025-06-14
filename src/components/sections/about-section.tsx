import { AnimatedSection } from "@/components/animated-section"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      {/* Diagonal lines background */}
      <div className="absolute inset-0 diagonal-lines pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6 flex items-center">
              <span className="bg-[#00DBD8] text-primary px-2 text-[#1F2833]">ABOUT</span>
              <div className="h-1 bg-[#00DBD8] flex-grow ml-4"></div>
            </h2>
            <div className="border-l-4 border-[#00DBD8] pl-4 mb-8">
              <p className="text-muted-foreground">Based in <span className="font-bold text-[#00DBD8]">Yogyakarta</span></p>
            </div>
            <div className="space-y-4">
              <div className="group">
                <h3 className="text-xs mb-2 text-[#00DBD8]">EMAIL</h3>
                <a
                  href="mailto:eusideroxylonszwagery@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 inline-block relative"
                >
                  eusideroxylonszwagery@gmail.com
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-[#00DBD8] group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
              <div className="font-mono">
                <div className="text-xs text-[#00DBD8] mb-1">SOCIALS</div>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Szwagery-ar"
                    className="text-muted-foreground hover:text-[#00DBD8] transition-all duration-300 relative"
                  >
                    GitHub
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-[#00DBD8] hover:w-full transition-all duration-300"></span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/szwagery-agustinus-rajagukguk-7820b5255/"
                    className="text-muted-foreground hover:text-[#00DBD8] transition-all duration-300 relative"
                  >
                    LinkedIn
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-[#00DBD8] hover:w-full transition-all duration-300"></span>
                  </a>
                  <a
                    href="https://www.instagram.com/szwagery_ar?igsh=MW5hdjB4eTBocGtzNg=="
                    className="text-muted-foreground hover:text-[#00DBD8] transition-all duration-300 relative"
                  >
                    Instagram
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-[#00DBD8] hover:w-full transition-all duration-300"></span>
                  </a>
                </div>
              </div>

              {/* Add the resume download button here */}
              <div className="pt-6">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-[#00DBD8] text-[#0B0C10] px-4 py-2 font-mono text-sm hover:bg-primary/90 transition-colors border-2 border-[#00DBD8] relative group overflow-hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-download relative z-10"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  <span className="relative z-10 text-[#0B0C10]">DOWNLOAD CV</span>
                  <span className="absolute inset-0 bg-white/40 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="lg:col-span-8 space-y-8">
          <AnimatedSection delay={200}>
            <div className="text-xl md:text-2xl font-medium leading-relaxed border-b-2 border-[#00DBD8] pb-4">
              I'm a full-stack developer passionate about building efficient and impactful digital experiences, from web apps to mobile platforms.
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="space-y-6 text-muted-foreground">
              <p>
                With hands-on experience in both frontend and backend development, I’ve worked on practical academic projects like a secondhand marketplace using Next.js and React Native. I focus on delivering clean design with efficient architecture.
              </p>
              <p>
                As a student staff in the university’s Information Systems Office, I assist students in solving system-related issues such as account access and usage problems. I combine technical support with communication skills, which I also apply in organizational activities on campus.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            {/* SKILLS */}
            <AnimatedSection delay={600} direction="right">
              <div className="border-2 border-[#00DBD8] p-6 hover:bg-[#00DBD8]/5 transition-colors duration-300 relative h-full">
                <div className="absolute top-0 right-0 w-8 h-8 bg-[#00DBD8] flex items-center justify-center text-primary-foreground font-bold">
                  01
                </div>
                <h3 className="font-mono text-lg mb-4 text-[#00DBD8]">SKILLS</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
                    "MySQL", "CSS", "Tailwind", "Git", "GitHub", "UI/UX", "Figma"
                  ].map((skill, index) => (
                    <span
                      key={skill}
                      className="bg-background text-foreground px-3 py-1 text-sm transition-all duration-300 hover:bg-[#00DBD8] hover:text-[#0B0C10] border border-[#00DBD8] cursor-default"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* EXPERIENCE */}
            <AnimatedSection delay={800} direction="left">
              <div className="border-2 border-[#00DBD8] p-6 hover:bg-[#00DBD8]/5 transition-colors duration-300 relative h-full">
                <div className="absolute top-0 right-0 w-8 h-8 bg-[#00DBD8] flex items-center justify-center text-primary-foreground font-bold">
                  02
                </div>
                <h3 className="font-mono text-lg mb-4 text-[#00DBD8]">EXPERIENCE</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-medium">Student Staff — Information Systems Office</div>
                    <div className="text-sm text-muted-foreground">
                      Universitas Atma Jaya Yogyakarta <br /> Sep 2024 – Present
                    </div>
                  </div>
                  <div>
                    <div className="font-medium">Capstone Developer — Online Marketplace Project</div>
                    <div className="text-sm text-muted-foreground">
                      Next.js & MySQL <br /> Feb 2025 – Jun 2025
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* EDUCATION — full width below */}
            <div className="md:col-span-2">
              <AnimatedSection delay={1000} direction="up">
                <div className="border-2 border-[#00DBD8] p-6 hover:bg-[#00DBD8]/5 transition-colors duration-300 relative">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-[#00DBD8] flex items-center justify-center text-primary-foreground font-bold">
                    03
                  </div>
                  <h3 className="font-mono text-lg mb-4 text-[#00DBD8]">EDUCATION</h3>
                  <div className="space-y-2">
                    <div>
                      <div className="font-medium">Universitas Atma Jaya Yogyakarta</div>
                      <div className="text-sm text-muted-foreground">
                        Bachelor of Informatics • Aug 2022 – Aug 2026 (expected)
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="text-xs text-[#00DBD8] mb-1 font-mono">RELEVANT COURSES</div>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Web Development",
                          "Software Engineering Project",
                          "Database Administration",
                          "UI/UX Design",
                          "Platform-Based Programming",
                          "Data Structures"
                        ].map((course, index) => (
                          <span
                            key={course}
                            className="bg-background text-foreground px-3 py-1 text-sm border border-[#00DBD8] transition-all duration-300 hover:bg-[#00DBD8] hover:text-[#0B0C10] cursor-default"
                            style={{ transitionDelay: `${index * 50}ms` }}
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
