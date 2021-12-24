let result = document.getElementById("container")
const choice = document.querySelectorAll(".square");
const PLAYER_X = "X";
const PLAYER_O = "O";
let turnCheck = true;
const COMBINATION = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
]
document.addEventListener("click", (element) => {
        if(element.target.matches(".square")){
                 jogar(element.target.id)
        
        }
})

function jogar(id){
        const celula = document.getElementById(id);
        turno = turnCheck ? PLAYER_X : PLAYER_O;
        celula.textContent = turno;
        celula.classList.add(turno);
        whoWinner(turno)

}
function whoWinner(turno){
        const winner = COMBINATION.some((comb) => {
                return comb.every((index) => {
                        return choice[index].classList.contains(turno);
                })
        });
        if(winner){
                finish(turno);
        }else if(tie()){
                finish();
        }else{
                turnCheck = !turnCheck;
        }
}
function tie(){
        let x = 0;
        let o = 0;
        for (index in choice){
                if(!isNaN(index)){
                        if(choice[index].classList.contains(PLAYER_X)){
                                x++;
                        }
                        if(choice[index].classList.contains(PLAYER_O)){
                                o++;
                        }
                }
        }
        return x + o === 9 ? true : false;
}

function finish(winner = null){
        if(winner){
                result.style.display = "none";
                let show = document.createElement("p")
                show.innerHTML = `O Vencedor foi o jogador ${winner} \u{1F601}`
                show.classList.add("paragraf")
                wrap.appendChild(show)
                setTimeout(() => {
                        location.reload()
                }, 10000)
        
        }else{
                result.style.display = "none";
                let show = document.createElement("p")
                show.innerHTML = `O jogo terminou em empate \u{1F611}`
                show.classList.add("paragraf")
                wrap.appendChild(show)
                setTimeout(() => {
                        location.reload()
                }, 10000)
        }
}
