window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_jupgd2v", "template_3nlebjg", this)
      .then(function () {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset(); // Optional: Reset form after success
      }, function (error) {
        alert("Failed to send message. Please try again.");
        console.error("EmailJS Error:", error);
      });
  });