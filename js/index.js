const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")
const game = new Game(ctx)

window.onload = () => {
    document.getElementById('play-btn').onclick = () => {
        startGame();
        changeBtns();
    };
} 

function startGame() {
    if(game.intervalId === null) {
        game.start()
    } 
}

const pauseBtn = document.getElementById('pause-btn')

pauseBtn.addEventListener('click', () => {
    if (game.intervalId !== null) { 
        game.stop();  
    }  
})

const resetBtn = document.getElementById('reset-btn')

resetBtn.addEventListener('click', () => {
    window.location.reload()
})

function changeBtns() {
    document.getElementById('play-btn').style.visibility = 'hidden';
    document.getElementById('pause-btn').style.visibility = 'visible';
    document.getElementById('reset-btn').style.visibility = 'visible';
}


