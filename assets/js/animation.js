gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother;

if (window.innerWidth > 768) {
  smoother = ScrollSmoother.create({
    wrapper: ".smooth-wrapper",
    content: ".smooth-content",
    smooth: 1,
    effects: true,
    smoothTouch: 0.1,
    speed: 1.5,
  });

  // Anchor smooth scroll
  document.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("href");
      smoother.scrollTo(target, true, "top top");
    });
  });
}
// ========================== Cursor hareketi
const isMobile = /Android|iPhone|iPad|iPod|Windows Phone|webOS/i.test(
  navigator.userAgent
);

if (!isMobile) {
  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  const textElements = document.querySelectorAll(
    "p, h1, h2, h3, h4, h5, h6, span, a:not(nav a), li, button, .text, .title"
  );

  textElements.forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("grow"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("grow"));
  });
}
