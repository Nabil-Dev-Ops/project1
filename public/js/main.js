let score = 0;
const counterEl = document.getElementById('counter');

function addScore(e) {
  createRipple(e);
  score += 10;
  counterEl.innerText = score;
  counterEl.style.transform = 'scale(1.3)';
  setTimeout(() => counterEl.style.transform = 'scale(1)', 150);
}

function resetScore(e) {
  createRipple(e);
  score = 0;
  counterEl.innerText = score;
}

function changeTheme(e) {
  createRipple(e);
  const randomHue = Math.floor(Math.random() * 360);
  document.documentElement.style.setProperty('--primary', `hsl(${randomHue}, 100%, 50%)`);
  document.documentElement.style.setProperty('--accent', `hsl(${(randomHue + 120) % 360}, 100%, 50%)`);
}

function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
  circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];
  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}