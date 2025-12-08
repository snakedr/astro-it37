document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const messageArea = document.getElementById('messageArea');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      messageArea.textContent = 'Sending...';
      messageArea.style.color = 'orange';

      try {
        const response = await fetch('/api/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
          messageArea.textContent = 'Success! Your message has been sent.';
          messageArea.style.color = 'green';
          form.reset();
        } else {
          throw new Error(result.error || 'Submission failed.');
        }
      } catch (error) {
        messageArea.textContent = `Error: ${error.message}`;
        messageArea.style.color = 'red';
      }
    });
  }
});