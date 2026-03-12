const sparkleChars = ["✦", "✸", "✷", "✺", "✹", "✶"];
const sparkleColors = ["#ff5c8a", "#ffd43b", "#4dabf7", "#38d9a9", "#c77dff"];

let lastTime = 0;

window.addEventListener("mousemove", (e) => {
  const now = Date.now();
  if (now - lastTime < 60) return;
  lastTime = now;

  createSparkle(e.clientX, e.clientY);
});

function createSparkle(x, y) {
  const sparkle = document.createElement("span");
  sparkle.className = "sparkle";
  sparkle.textContent = sparkleChars[Math.floor(Math.random() * sparkleChars.length)];
  sparkle.style.left = x + (Math.random() * 30 - 15) + "px";
  sparkle.style.top = y + (Math.random() * 20 - 10) + "px";
  sparkle.style.color = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
  sparkle.style.fontSize = 10 + Math.random() * 8 + "px";
  sparkle.style.filter = "blur(0.2px)";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 700);
}

/* 邮箱复制功能 */
document.addEventListener("DOMContentLoaded", () => {
  const emailEl = document.querySelector(".copy-email");
  if (!emailEl) return;

  const copyText = emailEl.dataset.copy;
  const displayText = emailEl.dataset.display || emailEl.textContent;

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(copyText);
      emailEl.textContent = "Copied!";
      emailEl.classList.add("copied");

      setTimeout(() => {
        emailEl.textContent = displayText;
        emailEl.classList.remove("copied");
      }, 1000);
    } catch (err) {
      console.error("Clipboard copy failed:", err);
    }
  }

  emailEl.addEventListener("click", copyEmail);

  emailEl.addEventListener("copy", (e) => {
    e.preventDefault();
    e.clipboardData.setData("text/plain", copyText);
  });
});
