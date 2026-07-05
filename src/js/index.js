const target = document.querySelectorAll("[data-target]");

// об'экт налаштування
const options = {
  rootMargin: "50px",
  threshold: 0.5,
};

// колбек функція
const onEntry = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target.querySelector("[data-src]");
      const origin = img.dataset.src;
      img.src = origin;
      img.classList.add("animated");
    }
  });
};

// єкземпляр класу
const observer = new IntersectionObserver(onEntry, options);

target.forEach((item) => {
  observer.observe(item);
});
