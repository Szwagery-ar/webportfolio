"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { sendContactEmail } from "@/app/actions/send-email"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [toast, setToast] = useState<{
    show: boolean
    type: "success" | "error"
    message: string
  }>({ show: false, type: "success", message: "" })

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ show: true, type, message })

    setTimeout(() => {
      setToast({ show: false, type, message: "" })
    }, 5000)
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        showToast("success", "Message sent successfully! I'll get back to you soon.")
        setFormData({ name: "", email: "", message: "" })
      } else {
        showToast("error", result.error || "Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("❌ Error sending contact form:", error)
      showToast("error", "An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }


  return (
    <section id="contact" className="py-20 md:py-32 relative">
      {
        toast.show && (
          <div
            className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-md shadow-lg border text-sm font-medium transition-opacity duration-300 animate-fade-in-out"
            style={{
              backgroundColor: "#00DBD8",
              borderColor: "#00DBD8",
              color: "#1F2833",
            }}
          >
            {toast.message}
          </div>
        )
      }
      {/* Checkered background */}
      <div className="absolute inset-0 checkered-bg pointer-events-none"></div>

      {/* Red diagonal line */}
      <div className="absolute bottom-0 right-0 w-full h-8 bg-[#00DBD8]"></div>
      <div className="absolute bottom-8 left-0 w-8 h-[30vh] bg-[#00DBD8]"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6 flex items-center">
            <span className="bg-[#00DBD8] text-primary-foreground px-2 text-[#1F2833]">CONTACT</span>
            <div className="h-1 bg-[#00DBD8] flex-grow ml-4"></div>
          </h2>
          <p className="text-xl mb-8 max-w-md border-l-4 border-[#00DBD8] pl-4">
            Interested in working together? Let&rsquo;s connect and discuss your next project.
          </p>

          <div className="space-y-6">
            <div className="group">
              <h3 className="font-mono text-lg mb-2 text-[#00DBD8]">EMAIL</h3>
              <a
                href="mailto:eusideroxylonszwagery@gmail.com"
                className="text-muted-foreground hover:text-primary transition-all duration-300 inline-block relative"
              >
                eusideroxylonszwagery@gmail.com
                <span className="absolute left-0 bottom-0 w-0 h-px bg-[#00DBD8] group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>

            <div className="group">
              <h3 className="font-mono text-lg mb-2 text-[#00DBD8]">LOCATION</h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Yogyakarta, Indonesia
              </p>
            </div>

            <div className="group">
              <h3 className="font-mono text-lg mb-2 text-[#00DBD8]">SOCIALS</h3>
              <div className="flex space-x-6">
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
          </div>
        </AnimatedSection>

        <AnimatedSection direction="left" delay={300}>
          <div className="border-2 border-[#00DBD8] p-6 md:p-8 hover:bg-[#00DBD8]/5 transition-colors duration-500 relative">
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#00DBD8]"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#00DBD8]"></div>

            <h3 className="font-mono text-xl mb-6 text-[#00DBD8]">GET IN TOUCH</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-mono text-sm mb-2 text-[#00DBD8]">
                  NAME
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="bg-background border-[#00DBD8] focus:border-[#00DBD8] transition-colors rounded-none disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-mono text-sm mb-2 text-[#00DBD8]">
                  EMAIL
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="bg-background border-[#00DBD8] focus:border-[#00DBD8] transition-colors rounded-none disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-sm mb-2 text-[#00DBD8]">
                  MESSAGE
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  className="bg-background border-[#00DBD8] resize-none focus:border-[#00DBD8] transition-colors rounded-none disabled:opacity-50"
                />
              </div>

              <Button
                type="submit"
                className="w-full font-mono group relative overflow-hidden bg-[#00DBD8] text-primary hover:bg-[#00DBD8]/90 rounded-none disabled:opacity-50"
                disabled={isSubmitting}
              >
                <span className="relative z-10 flex items-center justify-center text-[#1F2833]">
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                  {!isSubmitting && (
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  )}
                </span>
                <span className="absolute inset-0 bg-white/40 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </Button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
