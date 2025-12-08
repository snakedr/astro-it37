// Импорт Nodemailer для отправки почты
import nodemailer from 'nodemailer';

// Настройка Nodemailer Transport
// Используйте ваши учетные данные (предпочтительно из .env файла)
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com', // Например, 'smtp.gmail.com'
  port: 587,
  secure: false, // true для порта 465, false для других
  auth: {
    user: 'YOUR_EMAIL@example.com', // Ваш email
    pass: 'YOUR_PASS', // Ваш пароль или App Password
  },
});

export async function POST({ request }) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: 'Missing required fields.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Параметры письма
    const mailOptions = {
      from: 'YOUR_EMAIL@example.com', // Отправитель
      to: 'RECIPIENT_EMAIL@example.com', // Куда отправлять
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Отправка письма
    await transporter.sendMail(mailOptions);

    // Успешный ответ
    return new Response(
      JSON.stringify({ message: 'Email sent successfully.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    
    // Ответ с ошибкой
    return new Response(
      JSON.stringify({ message: 'Failed to send email due to server error.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}