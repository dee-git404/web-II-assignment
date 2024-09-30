// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation to Book Now button on hover
const bookNowBtn = document.getElementById("book-now");

bookNowBtn.addEventListener("mouseover", function() {
    this.style.transform = "scale(1.1)";
    this.style.transition = "transform 0.2s ease-in-out";
});

bookNowBtn.addEventListener("mouseout", function() {
    this.style.transform = "scale(1)";
});

bookNowBtn.addEventListener("click", function() {
    alert("Redirecting to the booking page...");
    window.location.href = "booking.html"; // Redirect to the booking page
});

// Testimonial slider
let currentSlide = 0;
const testimonials = document.querySelectorAll('.testimonial-item');

function showNextTestimonial() {
    testimonials[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % testimonials.length;
    testimonials[currentSlide].classList.add('active');
}

// Automatically switch testimonials every 5 seconds
setInterval(showNextTestimonial, 5000);

// Room Price Filter
const priceRange = document.getElementById('price-range');
const priceValue = document.getElementById('price-value');
const roomList = document.getElementById('room-list').children;

priceRange.addEventListener('input', function() {
    const price = priceRange.value;
    priceValue.textContent = price;

    Array.from(roomList).forEach(room => {
        const roomPrice = parseInt(room.getAttribute('data-price'));
        if (roomPrice <= price) {
            room.style.display = 'block';
        } else {
            room.style.display = 'none';
        }
    });
});

// Validate Booking Form
const bookingForm = document.getElementById('booking-form');

bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Booking Submitted! We look forward to hosting you.');
    // Add further processing like sending form data to the server if necessary
});

// Validate Contact Form
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
});
