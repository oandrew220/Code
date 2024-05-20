document.addEventListener('DOMContentLoaded', () => {
    const reservationForm = document.getElementById('reservation-form');
    
    reservationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(this);
        
        // Process the form data or send it to the server
        console.log('Reservation Details:');
        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });
        
        alert('Reservation submitted successfully!');
        
        // Reset the form
        this.reset();
    });
});
