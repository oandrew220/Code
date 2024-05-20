document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(this);
        
        // Process the form data or send it to the server
        console.log('Contact Form Details:');
        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });
        
        alert('Message sent successfully!');
        
        // Reset the form
        this.reset();
    });
});
