import { generateStars } from "./stars.js";

window.addEventListener("load", () => {
  // Wait for initial fade-in
  setTimeout(() => {
    document.body.classList.remove("not-loaded");

    // -------------------- Generate Stars --------------------
    generateStars();

    // -------------------- Animate Title --------------------
    const title = document.querySelector(".title");
    const text = "Anh xin lỗi vì đã lớn tiếng với vợ 😔";

    // Render each character as span (handles emoji & spacing)
    title.innerHTML = Array.from(text)
      .map((char) =>
        char === " "
          ? `<span style="margin-right:16px;"></span>`
          : `<span>${char}</span>`
      )
      .join("");

    // Apply soft fade typing effect via staggered delays
    const spans = title.querySelectorAll("span");
    spans.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.08}s`;
      el.style.display = "inline-block";
    });
  }, 1000);
});
