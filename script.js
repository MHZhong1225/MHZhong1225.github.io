const sparkleChars = ["✦", "✸", "✷", "✺", "✹", "✶"];
const sparkleColors = ["#ff5c8a", "#ffd43b", "#4dabf7", "#38d9a9", "#c77dff"];

let lastTime = 0;

window.addEventListener("mousemove", (e) => {
  const now = Date.now();
  if (now - lastTime < 60) return;
  lastTime = now;

  for (let i = 0; i < 2; i++) {
  createSparkle(e.clientX, e.clientY);
}
});

function createSparkle(x, y) {
  const sparkle = document.createElement("span");
  sparkle.className = "sparkle";
  sparkle.textContent = sparkleChars[Math.floor(Math.random() * sparkleChars.length)];
  sparkle.style.left = x + (Math.random() * 30 - 15) + "px";
  sparkle.style.top = y + (Math.random() * 20 - 10) + "px";
  sparkle.style.color = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
  sparkle.style.fontSize = 10 + Math.random() * 10 + "px";
  sparkle.style.filter = "blur(0.3px)";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 700);
}

const emailEl = document.querySelector(".copy-email");

if (emailEl) {
  emailEl.addEventListener("copy", (e) => {
    e.preventDefault();
    const realEmail = emailEl.dataset.copy;
    e.clipboardData.setData("text/plain", realEmail);
  });

  emailEl.addEventListener("click", async () => {
    const realEmail = emailEl.dataset.copy;

    try {
      await navigator.clipboard.writeText(realEmail);
      emailEl.classList.add("copied");
      emailEl.textContent = "Copied!";
      setTimeout(() => {
        emailEl.textContent = "moc.kooltuo [TA] iatxw";
        emailEl.classList.remove("copied");
      }, 1000);
    } catch {
      // fallback: do nothing
    }
  });
}
