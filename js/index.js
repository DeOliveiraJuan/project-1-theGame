const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")
const game = new Gamepad(ctx)

window.onload = () => {
    document.getElementById('play-btn').onclick = () => {
        startGame();
    };
} 
