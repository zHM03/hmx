// =========================== h2 başlık

function letterFadeSlide(
  selector,
  yDistance = 20,
  staggerTime = 0.03,
  delayTime = 0
) {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  elements.forEach((element) => {
    const text = element.innerText;
    let newHTML = "";

    for (let char of text) {
      newHTML +=
        char.trim() === "" ? char : `<span class="letter">${char}</span>`;
    }

    element.innerHTML = newHTML;

    gsap.from(element.querySelectorAll(".letter"), {
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
      },
      y: yDistance,
      opacity: 0,
      stagger: staggerTime,
      duration: 0.8,
      ease: "power3.out",
      delay: delayTime,
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // 👉 Animasyon yapmak istediğin H2'leri buraya yaz
  letterFadeSlide(".service-section .text-block h2", 25, 0.04, 0);
  letterFadeSlide(".process-section h2", 25, 0.04, 0);
  letterFadeSlide(".projects-section h2", 25, 0.04, 0);
  letterFadeSlide(".about-us-section h2", 25, 0.04, 0);
  letterFadeSlide(".faq-section h2", 25, 0.04, 0);
  //          Paragraf
  letterFadeSlide(".lead-text", 25, 0.01, 0);
});

// =========================== h3 başlık

function wordFadeSlide(
  selector,
  yDistance = 25,
  staggerAmount = 0.18,
  durationTime = 2.8,
  delayTime = 0
) {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  elements.forEach((element) => {
    const words = element.innerText.split(" ");

    element.innerHTML = words
      .map((w) => `<span class="word">${w}</span>`)
      .join(" ");

    gsap.from(element.querySelectorAll(".word"), {
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        once: true,
      },
      y: yDistance,
      opacity: 0,
      stagger: staggerAmount, // kelimeler arası gecikme daha uzun
      duration: durationTime, // animasyon süresi daha uzun
      ease: "power3.out",
      delay: delayTime,
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  wordFadeSlide("section h3", 25, 0.18, 2.8, 0);
});

//================== Aşağıdan Yukarı

function paragraphSlideUp(selector, y = 40, duration = 1.2) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(selector).forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: y,
      duration: duration,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 95%",
        once: true,
      },
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  paragraphSlideUp(".about-text", 40, 1.6);
  paragraphSlideUp(".feature-lead-text", 40, 1.6);
  paragraphSlideUp(".features-text", 40, 1.6);
  paragraphSlideUp(".image-block", 40, 1.6);
  paragraphSlideUp(".container", 40, 2);
});
