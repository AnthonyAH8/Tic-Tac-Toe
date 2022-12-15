let cases = document.querySelectorAll('[data-cell]')
let tableau = document.getElementById('tableau')
let joueur1 = 'x'
let joueur2 = '0'
let aquiletour = false
let victoire = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
]
let start = 0;

startGame().addEventListener('click', startGame)

function startGame() {
    isPlayer_O_Turn = false

    cases.forEach(cases => {
        cases.classList.remove(joueur1),
            cases.classList.remove(joueur2),
            cases.removeEventListener('click', handleCellClick),
            cases.addEventListener('click', handleCellClick, { once: true })
    })
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
}

function handleCellClick(event){
    var cases = event.target
    var tour = aquiletour? joueur1 : joueur2
    placeMar

}