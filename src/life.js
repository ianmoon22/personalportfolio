document.addEventListener("DOMContentLoaded", function() {
    const videos = [
        "../resources/doggy.mp4",
        "../resources/stanley.mp4",
        "../resources/whistler.mp4",
    ];

    let currentIndex = 0;

    const videoPlayer = document.getElementById("videoPlayer");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    function updateVideo() {
        // Fade out the video
        videoPlayer.style.opacity = 0;
        setTimeout(() => {
            videoPlayer.src = videos[currentIndex];
            videoPlayer.load(); // Load the new video
            videoPlayer.play(); // Optionally, play the new video automatically
            // Fade in the new video
            videoPlayer.style.opacity = 1;
        }, 500); // Match this duration with the CSS transition time
    }

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + videos.length) % videos.length; // Wrap around logic
        updateVideo();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % videos.length; // Wrap around logic
        updateVideo();
    });

    // Initialize the video on load
    updateVideo();
});