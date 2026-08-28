const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {

  menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
      menuBtn.textContent = "×";
    } else {
      menuBtn.textContent = "☰";
    }

  });


  nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      nav.classList.remove("active");
      menuBtn.textContent = "☰";

    });

  });

}


// نمایش نرم بخش‌ها هنگام اسکرول

const items = document.querySelectorAll(
  ".product, .feature, .about-image, .about-text, .factory-box, .big-phone"
);

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

      }

    });

  },
  {
    threshold: 0.12
  }
);


items.forEach(item => {

  item.classList.add("hidden");
  observer.observe(item);

});
