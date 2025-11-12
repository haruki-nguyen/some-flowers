import { generateStars } from "./stars.js";

// -------------------- Generate Stars --------------------
generateStars();

// -------------------- Animate Title --------------------
const titleContainer = document.querySelector(".title-container .title");
const title = document.querySelector(".title");
const titleText = "Anh có điều muốn nói với vợ 😆!";
const btn = document.querySelector(".btn-romantic");

// Render each letter (handles emojis properly)
titleContainer.innerHTML = Array.from(titleText)
  .map((char) =>
    char === " "
      ? `<span style="margin-right:20px;"></span>`
      : `<span>${char}</span>`
  )
  .join("");

// Apply sequential animation delays
const spans = titleContainer.querySelectorAll("span");
spans.forEach((el, index) => {
  el.style.animationDelay = `${index * 0.1}s`;
});

// Append button after the last letter animation
const totalDelay = spans.length * 0.1; // seconds
setTimeout(() => {
  btn.classList.add("show");
}, totalDelay * 1000);
