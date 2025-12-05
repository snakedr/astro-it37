// Этот код выполнится на сервере Node.js/Vercel/Netlify, а не в браузере.

export async function POST({ request }) {
    try {
        const data = await request.json();
        
        // --- Место, где происходит логика отправки ---
        
        const { name, email, message } = data;

        // В РЕАЛЬНОМ ПРОЕКТЕ:
        // 1. Здесь вы должны отправить email (например, используя Nodemailer, Resend, SendGrid).
        // 2. Или сохранить данные в базу данных.
        
        // Пример отправки email (требует дополнительной настройки, здесь только заглушка)
        console.log(`Received application from ${name}: ${email}`);
        console.log(`Message: ${message}`);

        // --- Конец логики отправки ---

        // Отправляем успешный ответ обратно клиенту
        return new Response(
            JSON.stringify({ message: "Success" }), {
                status: 200,
                headers: { "Content-Type": "application/json" }
            }
        );

    } catch (error) {
        console.error("Submission error:", error);
        
        // Отправляем ответ с ошибкой
        return new Response(
            JSON.stringify({ message: "Invalid JSON or Server Processing Error" }), {
                status: 500,
                headers: { "Content-Type": "application/json" }
            }
        );
    }
}