import { Router } from "express";
import nodemailer from "nodemailer";
import { SubmitContactBody } from "@workspace/api-zod";

const router = Router();

router.post("/contact", async (req, res) => {
  const parsed = SubmitContactBody.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: "Invalid form data. Please check all fields and try again." });
    return;
  }

  const { name, email, subject, message } = parsed.data;

  req.log.info({ name, email, subject }, "Contact form submission received");

  const smtpHost = process.env["SMTP_HOST"];
  const smtpUser = process.env["SMTP_USER"];
  const smtpPass = process.env["SMTP_PASS"];

  if (!smtpHost || !smtpUser || !smtpPass) {
    req.log.warn("SMTP not configured — logging contact form submission only");
    req.log.info({ name, email, subject, message }, "Contact form submission (no SMTP)");
    res.status(200).json({
      success: true,
      message: "Thank you for reaching out! We will get back to you soon.",
    });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(process.env["SMTP_PORT"] ?? 587),
      secure: process.env["SMTP_SECURE"] === "true",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"Suneldah Contact Form" <${smtpUser}>`,
      to: "slaymasar@gmail.com",
      replyTo: `"${name}" <${email}>`,
      subject: `[Suneldah Contact] ${subject}`,
      text: `New contact form submission from ${name} (${email}):\n\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    req.log.info({ to: "slaymasar@gmail.com", from: email }, "Contact email sent successfully");

    res.status(200).json({
      success: true,
      message: "Thank you for reaching out! We will get back to you soon.",
    });
  } catch (err) {
    req.log.error({ err }, "Failed to send contact email");
    res.status(500).json({ error: "Failed to send your message. Please try again later." });
  }
});

export default router;
