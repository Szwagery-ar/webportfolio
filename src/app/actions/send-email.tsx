"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: {
  name: string
  email: string
  message: string
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Use your verified domain
      to: ["eusideroxylonszwagery@gmail.com"], // Your email
      subject: `New Contact Form Message from ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00DBD8; border-bottom: 2px solid #00DBD8; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 5px;">From:</h3>
            <p style="margin: 0; padding: 10px; background-color: #f5f5f5; border-left: 4px solid #00DBD8;">
              <strong>${formData.name}</strong><br>
              <a href="mailto:${formData.email}" style="color: #00DBD8;">${formData.email}</a>
            </p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 5px;">Message:</h3>
            <div style="padding: 15px; background-color: #f9f9f9; border: 1px solid #ddd; white-space: pre-wrap;">
              ${formData.message}
            </div>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This message was sent from your portfolio contact form.</p>
          </div>
        </div>
      `,
      replyTo: formData.email, // Allow you to reply directly to the sender
    })

    if (error) {
      console.error("Email sending error:", error)
      return { success: false, error: "Failed to send email" }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Email sending error:", error)
    return { success: false, error: "Failed to send email" }
  }
}
