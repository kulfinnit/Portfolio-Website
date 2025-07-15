document.addEventListener("DOMContentLoaded", () => {
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
    // Add more projects here
    {
      title: "Placement Cell",
      description: "A campus recruitment system made using Python Django",
      image: "images/placement-cell.png",
      demoLink: "https://kulfinit.github.io/placement-cell",
      codeLink: "https://github/kulfinnit/placement-cell",
    },
  ];

  const projectList = document.getElementById("project-list");

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}" />
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.demoLink}" target="_blank">🔗 Demo</a> |
      <a href="${project.codeLink}" target="_blank">💻 Code</a>
    `;
    projectList.appendChild(card);
  });
});
// Email copy functionality
document.addEventListener("DOMContentLoaded", () => {
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
});
// Drag for floating buttons
const floatWrapper = document.querySelector(".floating-buttons");
let isDragging = false;
let offset = { x: 0, y: 0 };

floatWrapper.addEventListener("mousedown", (e) => {
  isDragging = true;
  offset.x = e.clientX - floatWrapper.getBoundingClientRect().left;
  offset.y = e.clientY - floatWrapper.getBoundingClientRect().top;
  floatWrapper.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  floatWrapper.style.left = e.clientX - offset.x + "px";
  floatWrapper.style.top = e.clientY - offset.y + "px";
  floatWrapper.style.bottom = "unset";
  floatWrapper.style.right = "unset";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  floatWrapper.style.cursor = "grab";
});
document.addEventListener("DOMContentLoaded", () => {
  const emailLink = document.querySelector('a[href^="mailto:"]');
  emailLink.addEventListener("click", (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailLink.href.replace("mailto:", ""));
    emailLink.innerHTML = '<i class="fas fa-envelope"></i> Email Copied!';
    setTimeout(() => {
      emailLink.innerHTML = '<i class="fas fa-envelope"></i> Email Me';
    }, 2000);
  });
});
// Bounce effect on project/game card click
document
  .querySelectorAll("#project-list .project-card, .game-card")
  .forEach((card) => {
    card.addEventListener("click", () => {
      card.style.transition = "transform 0.2s ease";
      card.style.transform = "scale(0.97)";
      setTimeout(() => {
        card.style.transform = "translateY(-8px) scale(1.03)";
      }, 150);
    });
  });
