async function loadTips() {
  const response = await fetch('tips.json');
  const tips = await response.json();

  const today = new Date();
  const start = new Date(2025, 0, 1);
  const diffDays = Math.floor((today - start) / (1000 * 60 * 60 * 24));

  const index = diffDays % tips.length;
  displayTip(tips[index]);
}

function displayTip(tip) {
  document.getElementById("tipText").textContent = tip;

  const score = Math.floor(Math.random() * 30) + 1; // terrible score
  document.getElementById("scoreFill").style.width = score + "%";
  document.getElementById("scoreValue").textContent = score + "/100";
}

async function showRandomTip() {
  const response = await fetch('tips.json');
  const tips = await response.json();
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  displayTip(randomTip);
}

function showModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

loadTips();
