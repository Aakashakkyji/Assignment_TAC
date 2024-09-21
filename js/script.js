// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Handle Add to Cart buttons
  const addToCartButtons = document.querySelectorAll(".product__add-button");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Display a custom popup notification
      showAddToCartNotification();
    });
  });

  // Handle Newsletter Subscription Form
  const newsletterForm = document.getElementById("newsletter-form");

  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("newsletter-email");
    const email = emailInput.value.trim();

    if (validateEmail(email)) {
      alert("Thank you for subscribing!");
      newsletterForm.reset();
    } else {
      alert("Please enter a valid email address.");
    }
  });
});

// Function to show Add to Cart notification
function showAddToCartNotification() {
  // Create the notification element
  const notification = document.createElement("div");
  notification.classList.add("add-to-cart-notification");
  notification.textContent = "Item added to cart!";

  // Style the notification (can also be moved to CSS)
  notification.style.position = "fixed";
  notification.style.bottom = "20px";
  notification.style.right = "20px";
  notification.style.backgroundColor = "#000";
  notification.style.color = "#fff";
  notification.style.padding = "15px 20px";
  notification.style.borderRadius = "5px";
  notification.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
  notification.style.opacity = "0";
  notification.style.transition = "opacity 0.5s ease";

  // Add to the body
  document.body.appendChild(notification);

  // Fade in
  setTimeout(() => {
    notification.style.opacity = "1";
  }, 100);

  // Fade out and remove after 3 seconds
  setTimeout(() => {
    notification.style.opacity = "0";
    setTimeout(() => {
      notification.remove();
    }, 500);
  }, 3000);
}

// Function to validate email using regex
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
