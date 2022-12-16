let joueur = ' x '
let cases = document.querySelectorAll('[data-cell]')
let tableau = document.getElementById('tableau')
let state = {
    encours: 1,
    j1: 0,
    j2: 0,
    case1: 0,
    case2: 0,
    case3: 0,
    case4: 0,
    case5: 0,
    case6: 0,
    case7: 0,
    case8: 0,
    case9: 0,
}

let victory = () => {
    if (
        (state.case1 == state.case2 && state.case2 == state.case3 > 0)
        (state.case1 == state.case4 && state.case4 == state.case7 > 0)
        (state.case1 == state.case5 && state.case5 == state.case9 > 0)
        (state.case2 == state.case5 && state.case5 == state.case8 > 0)
        (state.case3 == state.case6 && state.case6 == state.case9 > 0)
        (state.case4 == state.case5 && state.case5 == state.case6 > 0)
        (state.case7 == state.case8 && state.case8 == state.case9 > 0)
        (state.case3 == state.case5 && state.case5 == state.case7 > 0)
    ) {
        return true;
    } else if (
        state.case1 != 0 &&
        state.case2 != 0 &&
        state.case3 != 0 &&
        state.case4 != 0 &&
        state.case5 != 0 &&
        state.case6 != 0 &&
        state.case7 != 0 &&
        state.case8 != 0 &&
        state.case9 != 0
    ) {
        return ("Match nul")
    } else {
        return false
    }
}


var cellule = (e) => {
    var cases = e.target
    console.log(cases)
    cases.innerHTML = joueur
    tour()
    if (state[cases] != 0)
        return
    state[cases] = state.encours

    var win = victory();
    if (win == true) {
        alert('Vous avez gagné')
        if (state.encours == 1) {
            state.j1++
        } else {
            state.j2++
        }
        nouvellepartie()
    } 
}


cases.forEach((e) => {
    e.addEventListener('click', cellule);
    console.log(e)
})

let nouvellepartie = () => {
    encours = 1
    state.case1 = 0
    state.case2 = 0
    state.case3 = 0
    state.case4 = 0
    state.case5 = 0
    state.case6 = 0
    state.case7 = 0
    state.case8 = 0
    state.case9 = 0
}


function tour(joueur){
    if(joueur == 'x'){
        joueur == 'o'
    } else {
        joueur = 'o'
    }
}
