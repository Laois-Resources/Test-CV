document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations for skill bars
    const bars = document.querySelectorAll('.fill');
    
    // Simple intersection observer to animate bars when scrolled into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = "width 1.5s ease-in-out";
                // Triggering the width defined in HTML style attribute
            }
        });
    });

    bars.forEach(bar => observer.observe(bar));

    console.log("CV Website Loaded successfully.");
});