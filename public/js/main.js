document.addEventListener("DOMContentLoaded", () => {
    console.log("🚀 DevOps Dashboard JS initialized!");
    const terminalBody = document.getElementById('terminal-body');

    // Senarai log real-time
    const liveLogs = [
        () => `<p class="log-info">[SYS] CPU Usage: ${(Math.random() * 3 + 1.1).toFixed(1)}% | RAM: 1.15GB / 4.00GB</p>`,
        () => `<p class="log-info"><span class="log-success">[RUNNER]</span> Polling GitHub Actions pipeline jobs... ACK</p>`,
        () => `<p class="log-info">[DOCKER] Container project1-web health: OK</p>`,
        () => `<p class="log-info">[SECURITY] Trivy vulnerability scan: 0 CRITICAL</p>`,
        () => `<p class="log-info">[CLOUDFLARE] Ingress active on project1.nabil.homes</p>`
    ];

    // Auto-stream log ke terminal setiap 2.5 saat
    setInterval(() => {
        if (!terminalBody) return;

        // Pilih log secara rawak
        const newLog = liveLogs[Math.floor(Math.random() * liveLogs.length)]();
        
        // Cari prompt terminal terakhir (nabil@nabil-server:~$)
        const lastCmd = terminalBody.querySelector('.cmd:last-child');
        if (lastCmd) {
            lastCmd.insertAdjacentHTML('beforebegin', newLog);
        } else {
            terminalBody.innerHTML += newLog;
        }

        // Auto scroll terminal ke bawah
        terminalBody.scrollTop = terminalBody.scrollHeight;

        // Hadkan kepada 12 baris maksimum
        if (terminalBody.children.length > 12) {
            terminalBody.removeChild(terminalBody.children[1]);
        }
    }, 2500);
});

// Function Boost
function triggerBoost() {
    const score = document.getElementById('live-score');
    if (score) {
        let current = parseInt(score.innerText) || 100;
        score.innerText = current + 10;
    }
}

// Function Reset
function resetMetrics() {
    const score = document.getElementById('live-score');
    if (score) score.innerText = "100";
}

// Function Shift Theme
function toggleTheme() {
    document.body.classList.toggle('light-theme');
}