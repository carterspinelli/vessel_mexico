import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const contactData = contactSchema.parse(req.body);

      // Configure Nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER || "vesselmexicoapp@gmail.com",
          pass: process.env.EMAIL_PASS || "",
        },
      });

      // Email content
      const mailOptions = {
        from: process.env.EMAIL_USER || "vesselmexicoapp@gmail.com",
        to: "cartierspinelli@icloud.com",
        subject: `Vessel México Contact: ${contactData.subject}`,
        html: `
          <h2>New Contact From Vessel México Website</h2>
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> ${contactData.email}</p>
          ${contactData.phone ? `<p><strong>Phone:</strong> ${contactData.phone}</p>` : ''}
          <p><strong>Subject:</strong> ${contactData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${contactData.message.replace(/\n/g, '<br>')}</p>
        `,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      // Record the contact in our storage
      await storage.createContact(contactData);

      res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Failed to send message" });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
