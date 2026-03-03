const games = [
    { name: "Five Nights at Freddy's", file: "Five Nights at Freddy's.html", icon: "fnaf1.png" },
    { name: "Five Nights at Freddy's 2", file: "Five Nights at Freddy's 2.html", icon: "fnaf2.png" },
    { name: "Five Nights at Freddy's 3", file: "Five Nights at Freddy's 3.html", icon: "fnaf3.png" },
    { name: "Five Nights at Freddy's 4", file: "Five Nights at Freddy's 4.html", icon: "fnaf4.png" },
    { name: "Five Nights at Freddy's 4 Halloween", file: "Five Nights at Freddy's 4 Halloween.html", icon: "fnaf4halloween.png" },
    { name: "Five Nights at Freddy's Sister Location", file: "Five Nights at Freddy's Sister Location.html", icon: "fnafsl.png" },
    { name: "Five Nights at Freddy's Pizza Simulator", file: "Five Nights at Freddy's Pizza Simulator.html", icon: "fnafpizzeriasimulator.png" },
    { name: "Five Nights at Freddy's Ultimate Custom Night", file: "Five Nights at Freddy's Ultimate Custom Night.html", icon: "fnafucn.png" },
    { name: "Five Nights at Freddy's World", file: "Five Nights at Freddy's World.html", icon: "fnafwrld.png" },
    { name: "Five Nights at Freddy's World Refreshed", file: "Five Nights at Freddy's World Refreshed.html", icon: "fnafwrldrefreshed.png" }
];

const container = document.getElementById('game-container');
const screen = document.getElementById('game-screen');
const frame = document.getElementById('game-frame');
const title = document.getElementById('current-game-title');
const fsBtn = document.getElementById('fs-btn');

games.forEach(game => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.onclick = () => {
        title.innerText = game.name;
        frame.src = `Games/${game.file}`;
        screen.style.display = 'block';
        document.body.style.overflow = 'hidden';
    };
    card.innerHTML = `<img src="Icons/${game.icon}" alt="${game.name}"><span>${game.name}</span>`;
    container.appendChild(card);
});

function closeGame() {
    if (document.fullscreenElement || document.webkitFullscreenElement) {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    }
    screen.style.display = 'none';
    frame.src = '';
    document.body.style.overflow = 'auto';
    fsBtn.innerText = "⛶";
}

function toggleFullscreen() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        const el = document.documentElement;
        if (el.requestFullscreen) el.requestFullscreen();
        else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
        fsBtn.innerText = "❐";
    } else {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
        fsBtn.innerText = "⛶";
    }
}