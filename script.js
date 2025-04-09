document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        
        // Construct mailto link
        const subject = `Message from ${name}`;
        const body = encodeURIComponent(message);
        const mailtoLink = ` https://mail.google.com/mail/?view=cm&fs=1&to=ramyamantena04@gmail.com&su=${subject}&body=${body}`;
       
        // Open email client
        window.location.href = mailtoLink;
        
        // Optional: Reset form after submission
        contactForm.reset();
    });
});
