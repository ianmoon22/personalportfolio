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

document.addEventListener("scroll", () => {
    const leftDiv = document.getElementById("leftDiv");
    const rightDiv = document.getElementById("rightDiv");
    const rightDiv2 = document.getElementById("rightDiv2");
    const windowHeight = window.innerHeight;

    // Check position of the left div
    const leftElementTop = leftDiv.getBoundingClientRect().top;
    if (leftElementTop < windowHeight && leftElementTop > 0) {
        leftDiv.classList.add("visible");
    } else {
        leftDiv.classList.remove("visible"); // Slide out when not in view
    }

    // Check position of the right div
    const rightElementTop = rightDiv.getBoundingClientRect().top;
    if (rightElementTop < windowHeight && rightElementTop > 0) {
        rightDiv.classList.add("visible");
    } else {
        rightDiv.classList.remove("visible"); // Slide out when not in view
    }

    const rightElementTop2 = rightDiv2.getBoundingClientRect().top;
    if (rightElementTop2 < windowHeight && rightElementTop2 > 0) {
        rightDiv2.classList.add("visible");
    } else {
        rightDiv2.classList.remove("visible"); // Slide out when not in view
    }
});