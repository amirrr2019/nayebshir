const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
    menuBtn.textContent = nav.classList.contains("active") ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      menuBtn.textContent = "☰";
    });
  });
}

function toggleProducts() {
  const wrapper = document.getElementById("productsWrapper");
  wrapper.classList.toggle("open");
  if (wrapper.classList.contains("open")) {
    wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function jumpCow(type) {
  const el = document.getElementById(type === 'male' ? 'cowMale' : 'cowFemale');
  el.classList.remove('jump');
  void el.offsetWidth;
  el.classList.add('jump');
}

// گاو کارتونی هدر
const cowMascot = document.getElementById("cowMascot");
const cowWrapper = document.querySelector(".cow-mascot-wrapper");
cowWrapper.addEventListener("click", () => {
  cowMascot.classList.add('cow-wave');
  setTimeout(() => cowMascot.classList.remove('cow-wave'), 600);
  openModal();
});

// اسکرول برای گاوهای کنار پنجره
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const male = document.getElementById("cowMale");
  const female = document.getElementById("cowFemale");
  if (male) {
    const move = (scrollY % 80) - 40;
    male.style.transform = `translateY(${move * 0.2}px) rotate(${move * 0.5}deg)`;
  }
  if (female) {
    const move = (scrollY % 80) - 40;
    female.style.transform = `translateY(${-move * 0.2}px) rotate(${-move * 0.5}deg)`;
  }
});

// انیمیشن اسکرول
const items = document.querySelectorAll(".product, .factory-box, .contact-number");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });
items.forEach(item => {
  item.classList.add("hidden");
  observer.observe(item);
});

function toggleExpand() {
  const content = document.getElementById("expandContent");
  content.classList.toggle("open");
  const btn = document.querySelector(".expand-btn");
  btn.innerHTML = content.classList.contains("open") ? "📋 بستن اطلاعات" : "📋 بیشتر درباره کارخانه";
}

function openModal() {
  document.getElementById("cowModal").classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  document.getElementById("cowModal").classList.remove("active");
  document.body.style.overflow = "";
}
document.getElementById("cowModal").addEventListener("click", function(e) {
  if (e.target === this) closeModal();
});
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") closeModal();
});
