document.addEventListener("DOMContentLoaded", () => {
    const terminalBody = document.getElementById('terminal-body');

    const liveLogs = [
        () => `<p class="log">[SYS] CPU Usage: ${(Math.random() * 3 + 1.1).toFixed(1)}% | Memory: 1.15GB/4.00GB</p>`,
        () => `<p class="log"><span class="active-text">[RUNNER]</span> Polling GitHub Actions pipeline jobs...</p>`,
        () => `<p class="log">[DOCKER] Container project1-web state: HEALTHY</p>`,
        () => `<p class="log">[SECURITY] Trivy vulnerability check: 0 CRITICAL</p>`
    ];

    setInterval(() => {
        if (!terminalBody) return;

        // Pick random log
        const newLog = liveLogs[Math.floor(Math.random() * liveLogs.length)]();
        
        // Remove cursor line temporarily, insert log, re-add cursor line
        const cursorLine = terminalBody.querySelector('.cmd:last-child');
        if (cursorLine) {
            cursorLine.insertAdjacentHTML('beforebegin', newLog);
        }

        // Auto scroll terminal
        terminalBody.scrollTop = terminalBody.scrollHeight;

        // Keep last 10 log lines
        if (terminalBody.children.length > 12) {
            terminalBody.removeChild(terminalBody.children[2]);
        }
    }, 2500);
});

function triggerBoost() {
    const score = document.getElementById('live-score');
    if (score) {
        let current = parseInt(score.innerText) || 100;
        score.innerText = current + 10;
    }
}

function resetMetrics() {
    const score = document.getElementById('live-score');
    if (score) score.innerText = "100";
}

function toggleTheme() {
    document.body.classList.toggle('light-theme');
}