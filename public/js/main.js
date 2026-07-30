let count = 100;

function addScore(event) {
  count += 10;
  document.getElementById("counter").innerText = count;
  createSparkles(event.clientX, event.clientY);
  appendTerminalLog(`Score boosted: +10 (Total: ${count})`);
}

function resetScore(event) {
  count = 0;
  document.getElementById("counter").innerText = count;
  appendTerminalLog(`Score reset to 0`);
}

function changeTheme(event) {
  const colors = [
    ['#00f2fe', '#4facfe'],
    ['#7928ca', '#ff007f'],
    ['#00dfa2', '#00b894'],
    ['#ff9a9e', '#fecfef']
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.documentElement.style.setProperty('--accent-cyan', randomColor[0]);
  appendTerminalLog(`Theme accent shifted to ${randomColor[0]}`);
}

function appendTerminalLog(message) {
  const terminal = document.getElementById("terminal-body");
  if (!terminal) return;
  
  const p = document.createElement("p");
  p.innerHTML = `<span class="prompt">nabil@nabil-server:~$</span> ${message}`;
  
  const cursor = terminal.querySelector(".typing-cursor");
  if (cursor && cursor.parentElement) {
    terminal.insertBefore(p, cursor.parentElement);
  } else {
    terminal.appendChild(p);
  }
}