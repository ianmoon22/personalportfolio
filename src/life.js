document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");

  // List of images with captions
  const images = [
    { src: "001.jpg", caption: "Puerto Vallarta, Mexico" },
    { src: "003.jpg", caption: "Puerto Vallarta, Mexico" },
    { src: "004.jpg", caption: "Puerto Vallarta, Mexico" },
    { src: "005.jpg", caption: "Ginza, Japan" },
    { src: "006.jpg", caption: "Taipei, Taiwan" },
    { src: "007.jpg", caption: "Shibuya, Japan" },
    { src: "008.jpg", caption: "Washington, USA" },
    { src: "009.jpg", caption: "Washington, USA" },
    { src: "010.jpg", caption: "Busan, Korea" }
  ];

  images.forEach(image => {
    // Create the figure element
    const figure = document.createElement("figure");
    figure.classList.add("gallery-item");

    // Create the img element
    const imgElement = document.createElement("img");
    imgElement.src = `../resources/media/${image.src}`;
    imgElement.alt = image.caption;

    // Create the figcaption element for the caption
    const caption = document.createElement("figcaption");
    caption.textContent = image.caption;
    caption.style.opacity = "0"; // Initially hidden
    caption.style.transition = "opacity 0.3s ease";

    // Show caption when the mouse enters
    figure.addEventListener("mouseenter", () => {
      caption.style.opacity = "1";
    });

    // Keep caption visible until mouse leaves the figure
    figure.addEventListener("mouseleave", () => {
      caption.style.opacity = "0";
    });

    // Append img and caption to figure, and figure to gallery
    figure.appendChild(imgElement);
    figure.appendChild(caption);
    gallery.appendChild(figure);
  });
});
