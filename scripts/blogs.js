function toggleContent(btn) {
  const post = btn.closest(".blog-post");
  post.classList.toggle("expanded");
  btn.textContent = post.classList.contains("expanded")
    ? "Read Less"
    : "Read More";
}
