export const prerender = false; // Required for SSR on Vercel
import nodemailer from "nodemailer";

export const POST = async ({ request }) => {
  if (request.headers.get("Content-Type") !== "application/json") {
    return new Response(JSON.stringify({ message: "Invalid Content-Type" }), { status: 400 });
  }

  try {
    const data = await request.json();

    if (!data.name || !data.email || !data.message) {
      return new Response(JSON.stringify({ message: "Missing required fields" }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: import.meta.env.SMTP_HOST,
      port: import.meta.env.SMTP_PORT,
      secure: true,
      auth: {
        user: import.meta.env.SMTP_USER,
        pass: import.meta.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: import.meta.env.SMTP_USER,
      to: import.meta.env.SMTP_USER, // Sending to yourself
      replyTo: data.email,
      subject: `New Contact: ${data.name}`,
      text: `From: ${data.email}\n\n${data.message}`,
    });

    return new Response(JSON.stringify({ message: "Message sent successfully" }), { status: 200 });

  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ message: error.message || "Internal Server Error" }), { status: 500 });
  }
};