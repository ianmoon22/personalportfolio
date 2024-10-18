document.addEventListener("DOMContentLoaded", function() {
    // alert("Welcome to my portfolio!");
});

particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        size: { value: 3 },
        move: { speed: 2 },
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" },
        },
    },
});
