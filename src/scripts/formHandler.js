document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);
  const body = Object.fromEntries(data.entries());

  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    if (response.ok) {
      alert('Success: Form submitted.');
      form.reset();
    } else {
      alert(`Error: ${result.message || 'Submission failed.'}`);
    }
  } catch (error) {
    alert('Network error. Try again.');
  }
});