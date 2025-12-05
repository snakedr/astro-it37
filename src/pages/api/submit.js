// src/pages/api/submit.js

export async function POST({ request }) {
  // Check Content-Type header
  if (request.headers.get("content-type") !== "application/json") {
    return new Response(JSON.stringify({ message: "Unsupported Content Type. Expected application/json" }), {
      status: 415, // Unsupported Media Type
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const data = await request.json();
    const { name, email, message } = data;

    // Minimal validation: Check for presence of required fields
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ message: "Missing required fields: name, email, or message." }), {
        status: 400, // Bad Request
        headers: { "Content-Type": "application/json" },
      });
    }

    /*
    * *** ТОЛЬКО АНГЛИЙСКИЕ КОММЕНТАРИИ: Logic for sending email or saving data goes here ***
    *
    * Example: sending an email using a service like Nodemailer (requires installation/setup)
    *
    * const transporter = nodemailer.createTransport({...});
    * await transporter.sendMail({
    *   from: '"Contact Form" <no-reply@yourdomain.com>',
    *   to: "your-target-email@example.com",
    *   subject: "New Contact Form Submission",
    *   text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    * });
    */

    // Minimal confirmation log for server side
    console.log(`Received application from ${name} (${email}).`);

    // Success response
    return new Response(JSON.stringify({ message: "Application received." }), {
      status: 200, // OK
      headers: { "Content-Type": "application/json" },
    });
    
  } catch (error) {
    // Handle JSON parsing errors or unexpected issues
    console.error("API error:", error); // Log the error on the server
    return new Response(JSON.stringify({ message: "Server error processing data." }), {
      status: 500, // Internal Server Error
      headers: { "Content-Type": "application/json" },
    });
  }
}