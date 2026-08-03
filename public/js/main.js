document.addEventListener("DOMContentLoaded", () => {
    let uptimeSeconds = 31200;

    function formatUptime(secs) {
        const h = Math.floor(secs / 3600);
        const m = Math.floor((secs % 3600) / 60);
        const s = secs % 60;
        return `${h}h ${m}m ${s}s`;
    }

    // Live Streamer Log Terminal untuk Project 1 (CT100)
    const terminal = document.getElementById('terminal-logs');
    const simulatedLogs = [
        () => `<div class="log-line">[CT100] CPU Usage: ${(Math.random() * 4 + 1.1).toFixed(1)}% | RAM: 1.05GB / 4.00GB</div>`,
        () => `<div class="log-line log-green">[RUNNER] CT100 runner polling GitHub Actions jobs...</div>`,
        () => `<div class="log-line">[DOCKER] project1-web stack status: RUNNING (Port 80)</div>`,
        () => `<div class="log-line log-yellow">[SECURITY] Hadolint & Trivy scan result: PASSED</div>`,
        () => `<div class="log-line">[CLOUDFLARE] Ingress route active: project1.nabil.homes</div>`
    ];

    function appendLog() {
        if (!terminal) return;
        
        const randomLog = simulatedLogs[Math.floor(Math.random() * simulatedLogs.length)]();
        terminal.innerHTML += randomLog;
        
        // Auto scroll
        terminal.scrollTop = terminal.scrollHeight;

        // Hadkan max 15 baris
        if (terminal.children.length > 15) {
            terminal.removeChild(terminal.children[0]);
        }
    }

    // Update automatik setiap 2 saat
    setInterval(() => {
        uptimeSeconds++;
        const uptimeElement = document.getElementById('live-uptime');
        if (uptimeElement) {
            uptimeElement.innerText = formatUptime(uptimeSeconds);
        }
        appendLog();
    }, 2000);

    // Initial setup
    const uptimeElement = document.getElementById('live-uptime');
    if (uptimeElement) {
        uptimeElement.innerText = formatUptime(uptimeSeconds);
    }
});