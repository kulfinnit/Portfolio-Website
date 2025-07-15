particlesJS("particles-js", {
  particles: {
    number: { value: 40, density: { enable: true, value_area: 800 } },
    color: { value: "#6ec1e4" },
    shape: { type: "circle" },
    opacity: { value: 0.4 },
    size: { value: 3 },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true },
      onclick: { enable: false },
      resize: true,
    },
  },
  retina_detect: true,
});
