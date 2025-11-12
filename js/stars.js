export function generateStars(
  selector = ".stars",
  count = 200,
  color = "white"
) {
  const stars = document.querySelector(selector);
  if (!stars) return;

  const shadowArray = Array.from({ length: count }, () => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    return `${x}vw ${y}vh ${color}`;
  });

  stars.style.boxShadow = shadowArray.join(", ");
}
