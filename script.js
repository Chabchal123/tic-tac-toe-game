let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector(".reset-btn");
let newGamebtn = document.querySelector(".new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO =  true;//player X, player Y

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>{
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");

};

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
       
        if(turnO){
            box.innerText = "O"
            turnO = false;
        
        }
        else{
            box.innerText ="X"
            turnO =true;
        }
        box.disabled = true;

        checkWinner();
        
    });
});
const disableboxes = ()=>{
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = ()=>{
    for(let box of boxes) {
        box.disabled = false;
        box.innerText ="";
    }
};
const showWinner = (winner) =>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes()

};


const checkWinner=() => {
    for (let pattern of winPatterns) {
        
         let pos1Val1 =   boxes[pattern [0]].innerText;
          let pos2Val2 =   boxes[pattern [1]].innerText;
        let pos3Val3 = boxes[pattern [2]].innerText;
            
    if(pos1Val1 !="" && pos2Val2 !="" && pos3Val3 !=""){
        if(pos1Val1 === pos2Val2 && pos2Val2 === pos3Val3){
          

            showWinner(pos1Val1);
        }

    }

    }
};

newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click",resetGame);

