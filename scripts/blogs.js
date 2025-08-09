function toggleContent(btn) {
  const post = btn.closest(".blog-post");
  const allPosts = document.querySelectorAll(".blog-post");

  // Close all other posts
  allPosts.forEach(p => {
    if (p !== post) {
      p.classList.remove("expanded");
      const otherBtn = p.querySelector("button"); // adjust selector if needed
      if (otherBtn) otherBtn.textContent = "Read More";
    }
  });

  // Toggle the clicked post
  const isExpanded = post.classList.toggle("expanded");
  btn.textContent = isExpanded ? "Read Less" : "Read More";
}
