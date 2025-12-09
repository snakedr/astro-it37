const form = document.getElementById('contact-form');
const statusText = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusText.textContent = 'Sending...';
    
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData);

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || `Server error: ${response.status}`);
      }

      statusText.textContent = 'Message sent!';
      form.reset();

    } catch (error) {
      console.error(error);
      statusText.textContent = `Error: ${error.message}`;
    }
  });
}