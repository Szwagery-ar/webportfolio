import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const projects = [
  {
    id: 1,
    title: "AVASARA",
    description: "Awarded 3rd place in a web design competition. Designed and implemented a responsive UI using HTML, CSS, and JavaScript within a time-limited challenge with strong emphasis on design clarity and user experience.",
    tags: ["Next.js", "Tailwind CSS", "Figma", , "GitHub"],
    image: "/images/avasara.png",
    link: "https://github.com/Szwagery-ar/Avasara",
  },
  {
    id: 2,
    title: "ReUseMart",
    description: "Capstone project built in a 3-person team to create a secondhand goods marketplace. I led the database design in MySQL and developed the web app using Next.js, also contributing to its React Native mobile version.",
    tags: ["Next.js", "React Native", "MySQL", "Tailwind CSS", "GitHub"],
    image: "/images/reusemart.png",
    link: "https://github.com/Szwagery-ar/reusemart",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 grid-lines pointer-events-none"></div>

      <div className="absolute top-32 left-0 w-full h-4 bg-[#00DBD8]"></div>

      <AnimatedSection>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 flex items-center">
              {/* <span className="bg-[#00DBD8] text-primary-foreground px-2">PROJECTS</span> */}
              <span className="relative inline-block px-2 font-bold text-[#1F2833] bg-[#00DBD8]">
                PROJECTS
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 w-full h-1/2 bg-[#00DBD8] text-[#1F2833] overflow-hidden"
                  style={{
                    clipPath: "inset(0 0 22% 0)",
                    transform: "translateX(9px)",
                  }}
                >
                  PROJECTS
                </span>
              </span>

              <div className="h-1 bg-[#00DBD8] flex-grow ml-4"></div>
            </h2>
            <p className="text-muted-foreground max-w-md">
              Selected works showcasing my skills and experience in development and design.
            </p>
          </div>  
          {/* <div className="mt-6 md:mt-0">
            <Button variant="outline" className="font-mono border-[#00DBD8] rounded-none text-primary hover:bg-[#00DBD8]/20">
              VIEW ALL WORK
            </Button>
          </div> */}
        </div>
      </AnimatedSection>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <AnimatedSection key={project.id} delay={index * 200}>
            <div
              className={`grid grid-cols-1 ${index % 2 === 0 ? "lg:grid-cols-[2fr_1fr]" : "lg:grid-cols-[1fr_2fr]"
                } gap-8 items-center`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative group">
                  <div className="aspect-[4/3] bg-[background] border-2 border-[#00DBD8] overflow-hidden flex items-center justify-center relative group">
                    {/* Gambar di tengah */}
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-contain max-w-full max-h-full transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#00DBD8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Brutalist Bars */}
                    <div className="absolute top-0 left-0 w-full h-4 bg-[#00DBD8] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-full h-4 bg-[#00DBD8] transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                    <div className="absolute top-2 left-2 px-2 py-1 bg-[#00DBD8] text-[#0B0C10] text-lg font-bold font-mono uppercase tracking-widest shadow-lg">
                      FEATURED
                    </div>

                    <div className="absolute bottom-2 right-2 w-4 h-4 bg-[#00DBD8] rotate-45"></div>

                    <div className="absolute -top-2 right-6 w-8 h-1 bg-[#00DBD8] animate-pulse"></div>

                    <div className="absolute right-2 bottom-10 text-[20px] font-mono text-[#00DBD8] tracking-widest">
                      EXPERIMENTAL
                    </div>
                  </div>


                  <div className="absolute top-4 right-4">
                    <Button
                      size="icon"
                      variant="secondary"
                      asChild
                      className="bg-[#00DBD8] text-[#1F2833] hover:bg-[#00DBD8]/90 rounded-none"
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">Visit project</span>
                      </a>
                    </Button>
                  </div>

                  {/* Project number */}
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#00DBD8] flex items-center justify-center text-[#1F2833] font-bold">
                    {project.id.toString().padStart(2, "0")}
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative space-y-6 z-10"> {/* Relative wrapper */}
                  {/* Konten utama */}
                  <div className="inline-block border-2 border-[#00DBD8] px-3 py-1 font-mono text-xs">
                    PROJECT {project.id.toString().padStart(2, "0")}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#00DBD8]">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-background text-foreground px-3 py-1 text-sm border border-[#00DBD8] cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Button
                      asChild
                      className="font-mono group relative overflow-hidden bg-[#00DBD8] hover:bg-[#00DBD8]/90 rounded-none"
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 text-[#1F2833]"
                      >
                        VIEW PROJECT
                        <span className="absolute inset-0 bg-white/40 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                      </a>
                    </Button>
                  </div>

                </div>

              </div>

            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
