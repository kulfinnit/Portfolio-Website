
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader-overlay");
  
  // Set a maximum timeout as fallback
  const hideLoader = () => {
    if (loader) {
      loader.style.opacity = "0";
      setTimeout(() => {
        if (loader.parentNode) {
          loader.remove();
        }
      }, 600); // fade out duration
    }
  };
  
  // Hide loader after DOM is ready + small delay for animation
  setTimeout(hideLoader, 1000);
  
  // Also hide on window load as backup (in case DOM loads faster than expected)
  window.addEventListener("load", () => {
    // Only hide if still visible
    if (loader && loader.style.opacity !== "0") {
      setTimeout(hideLoader, 500);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // --- Project Cards ---
  const projects = [
    {
      title: "Guess Gara",
      description: "A simple JS game with sound and logic.",
      image: "images/number-guessing.png",
      demoLink: "https://kulfinnit.github.io/guess-gara-game",
      codeLink: "https://github.com/kulfinnit/guess-gara-game",
    },
    {
      title: "Portfolio Website",
      description: "This website right here.",
      image: "images/portfolio.png",
      demoLink: "https://kulfinnit.github.io/Portfolio-Website",
      codeLink: "https://github.com/kulfinnit/Portfolio-Website",
    },
    {
      title: "Placement Cell",
      description: "A campus recruitment system made using Python Django",
      image: "images/placement-cell.png",
      demoLink: "https://kulfinit.github.io/placement-cell",
      codeLink: "https://github.com/kulfinnit/placement-cell",
    },
  ];

  const projectList = document.getElementById("project-list");

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.setAttribute("data-aos", "slide-up");
    card.setAttribute("data-aos-delay", "200");
    card.innerHTML = `
      <img src="${project.image}" alt= "Screenshot of ${project.title} project" />
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.demoLink}" target="_blank">🔗 Demo</a> |
      <a href="${project.codeLink}" target="_blank">💻 Code</a>
    `;
    projectList.appendChild(card);

    // Bounce on click
    card.addEventListener("click", () => {
      card.style.transition = "transform 0.2s ease";
      card.style.transform = "scale(0.97)";
      setTimeout(() => {
        card.style.transform = "translateY(-8px) scale(1.03)";
      }, 150);
      setTimeout(() => {
        card.style.transform = "scale(1)";
      }, 350);
    });
  });

  // --- Email Copy to Clipboard ---
  const emailLink = document.querySelector('a[href^="mailto:"]');
  if (emailLink) {
    emailLink.addEventListener("click", (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(emailLink.href.replace("mailto:", ""));
      emailLink.innerHTML = '<i class="fas fa-envelope"></i> Email Copied!';
      setTimeout(() => {
        emailLink.innerHTML = '<i class="fas fa-envelope"></i> Email Me';
      }, 2000);
    });
  }

  // --- Floating Button Drag ---
  const floatWrapper = document.querySelector(".floating-buttons");
  if (floatWrapper) {
    let isDragging = false;
    let offset = { x: 0, y: 0 };

    const startDrag = (e) => {
      isDragging = true;
      const clientX = e.clientX || e.touches[0].clientX;
      const clientY = e.clientY || e.touches[0].clientY;
      offset.x = clientX - floatWrapper.getBoundingClientRect().left;
      offset.y = clientY - floatWrapper.getBoundingClientRect().top;
      floatWrapper.style.cursor = "grabbing";
    };

    const drag = (e) => {
      if (!isDragging) return;
      const clientX = e.clientX || e.touches[0].clientX;
      const clientY = e.clientY || e.touches[0].clientY;
      floatWrapper.style.left = clientX - offset.x + "px";
      floatWrapper.style.top = clientY - offset.y + "px";
      floatWrapper.style.bottom = "unset";
      floatWrapper.style.right = "unset";
    };

    const stopDrag = () => {
      isDragging = false;
      floatWrapper.style.cursor = "grab";
    };

    floatWrapper.addEventListener("mousedown", startDrag);
    floatWrapper.addEventListener("touchstart", startDrag);
    document.addEventListener("mousemove", drag);
    document.addEventListener("touchmove", drag);
    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("touchend", stopDrag);
  }
});