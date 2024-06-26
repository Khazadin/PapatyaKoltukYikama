let fixedElement = document.getElementById("fixedElement");
const footer = document.getElementById("footer");
const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fixedElement.classList.add("newHeight");
      } else {
        fixedElement.classList.remove("newHeight");
      }
    });
  },
  { threshold: 0.1 }
);

observer.observe(footer);
