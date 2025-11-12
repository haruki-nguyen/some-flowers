// -------------------- Generate Stars --------------------
const stars = document.querySelector(".stars");
const starCount = 200;
const shadowArray = Array.from({ length: starCount }, () => {
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  return `${x}vw ${y}vh white`;
});
stars.style.boxShadow = shadowArray.join(", ");

// -------------------- Animate Title --------------------
const titleContainer = document.querySelector(".title-container .title");
const title = document.querySelector(".title");
const titleText = "Lorem ipsum is a dummy text 😆!";
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
