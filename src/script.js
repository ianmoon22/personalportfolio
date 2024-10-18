document.addEventListener("DOMContentLoaded", function() {
    // alert("Welcome to my portfolio!");
});

particlesJS("particles-js", {
    particles: {
        number: { value: 50 },
        size: { value: 22 },
        move: { speed: 3 },
        color: { value: "#292828"}
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" },
        },
    },
});
