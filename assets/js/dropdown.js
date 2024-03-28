document.addEventListener("DOMContentLoaded", function () {
  const blogPosts = document.querySelectorAll(".blog-post");
  blogPosts.forEach((post) => {
    const dropdownArrow = post.querySelector(".dropdown-arrow");
    const blogContent = post.querySelector(".blog-content");

    dropdownArrow.addEventListener("click", function () {
      blogContent.classList.toggle("visible");
    });
  });
});