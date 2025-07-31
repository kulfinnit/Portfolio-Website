// Mobile-only loader fix 
(function() {
  // Check if it's a mobile device
  function isMobileDevice() {
    return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  
  // Mobile-specific loader centering
  function fixMobileLoader() {
    if (!isMobileDevice()) return; // Skip if not mobile
    
    const loader = document.getElementById("loader-overlay");
    const logo = document.querySelector(".loader-logo");
    
    if (loader) {
      // Mobile-specific overlay fix
      loader.style.cssText = `
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        background: #000 !important;
        z-index: 99999 !important;
        transition: opacity 0.5s ease;
        overflow: hidden !important;
        margin: 0 !important;
        padding: 0 !important;
      `;
      
      // Force flexbox centering for mobile
      loader.style.display = 'flex';
      loader.style.justifyContent = 'center';
      loader.style.alignItems = 'center';
      
      // Additional mobile viewport fixes
      loader.style.minHeight = '100vh';
      loader.style.minHeight = '-webkit-fill-available';
    }
    
    if (logo) {
      // Mobile-specific logo positioning
      logo.style.cssText = `
        width: 80px !important;
        height: auto !important;
        display: block !important;
        position: relative !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        margin: 0 auto !important;
        padding: 0 !important;
        transform: none !important;
        float: none !important;
        animation: pulse 1.5s ease-in-out infinite;
      `;
      
      // Force re-center with absolute positioning as backup
      setTimeout(() => {
        if (isMobileDevice()) {
          logo.style.position = 'absolute';
          logo.style.top = '50%';
          logo.style.left = '50%';
          logo.style.transform = 'translate(-50%, -50%)';
          logo.style.animation = 'pulse-mobile 1.5s ease-in-out infinite';
        }
      }, 50);
    }
  }
  
  // Apply the fix immediately and on various events
  fixMobileLoader();
  
  // Apply when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixMobileLoader);
  } else {
    fixMobileLoader();
  }
  
  // Apply on window load
  window.addEventListener('load', fixMobileLoader);
  
  // Apply on orientation change (mobile specific)
  window.addEventListener('orientationchange', () => {
    setTimeout(fixMobileLoader, 100);
  });
  
  // Apply on resize (for mobile browsers changing viewport)
  window.addEventListener('resize', () => {
    if (isMobileDevice()) {
      setTimeout(fixMobileLoader, 50);
    }
  });
})();

// Add mobile-specific CSS animation
const mobileStyle = document.createElement('style');
mobileStyle.textContent = `
  @media (max-width: 768px) {
    @keyframes pulse-mobile {
      0%, 100% {
        transform: translate(-50%, -50%) scale(1) !important;
        opacity: 1 !important;
      }
      50% {
        transform: translate(-50%, -50%) scale(1.1) !important;
        opacity: 0.6 !important;
      }
    }
  }
`;
document.head.appendChild(mobileStyle);


document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader-overlay");
  
  const hideLoader = () => {
    if (loader) {
      loader.style.opacity = "0";
      setTimeout(() => {
        if (loader.parentNode) {
          loader.remove();
        }
      }, 600);
    }
  };
  
  setTimeout(hideLoader, 1000);
  
  window.addEventListener("load", () => {
    if (loader && loader.style.opacity !== "0") {
      setTimeout(hideLoader, 500);
    }
  });
});

// Rest of your existing code...
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
