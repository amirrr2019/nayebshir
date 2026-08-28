const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");


// =========================
// MOBILE MENU
// =========================

if (menuBtn && mainNav) {

  menuBtn.addEventListener("click", () => {

    mainNav.classList.toggle("active");

    if (mainNav.classList.contains("active")) {
      menuBtn.textContent = "✕";
    } else {
      menuBtn.textContent = "☰";
    }

  });


  document.querySelectorAll("#mainNav a").forEach(link => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("active");

      menuBtn.textContent = "☰";

    });

  });

}


// =========================
// SCROLL ANIMATION
// =========================

const animatedItems = document.querySelectorAll(
  ".product-card, .feature, .about-image, .factory-box, .contact-phone"
);


const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

      }

    });

  },
  {
    threshold: 0.12
  }
);


animatedItems.forEach(item => {

  item.style.opacity = "0";
  item.style.transform = "translateY(25px)";
  item.style.transition = "opacity .7s ease, transform .7s ease";

  observer.observe(item);

});


// =========================
// COW CLICK
// =========================

const cow = document.querySelector(".floating-cow");

if (cow) {

  cow.addEventListener("click", () => {

    cow.style.transform = "scale(1.15) rotate(-5deg)";

    setTimeout(() => {
      cow.style.transform = "";
    }, 300);

  });

}
