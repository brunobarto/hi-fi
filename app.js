// Simple intersection observer to fade sections/cards in on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

document.querySelectorAll(".panel, .card, .hero-content, .hero-image").forEach((el) => {
  observer.observe(el);
});

// Basic “fake” add-to-cart feedback
document.querySelectorAll(".product-card .btn.small").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.textContent = "Added";
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = "Add to cart";
      btn.disabled = false;
    }, 1500);
  });
});

// Prevent real submit for now
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks! We’ll get back with a system suggestion.");
    form.reset();
  });
}
