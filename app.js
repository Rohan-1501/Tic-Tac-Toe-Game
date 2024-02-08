let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbtn=document.querySelector("#new");
let msgC=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
            
        }else{
            box.innerText="X";
            turn0=true;
        }
       
        box.disabled=true;

        checkWinner();
    });
});
const rstGame=()=>{
    turn0=true;
    enableBtn();
    msgC.classList.add("hide");
};
const disBtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText=`Congo, Winner is ${winner}`;
    msgC.classList.remove("hide");
    disBtn();
};

const checkWinner = () =>{
    for( let patterns of winPatterns){
        let pst1Val=boxes[patterns[0]].innerText;
        let pst2Val=boxes[patterns[1]].innerText;
        let pst3Val=boxes[patterns[2]].innerText;

        if(pst1Val != "" && pst2Val != "" && pst3Val != ""){
            if(pst1Val === pst2Val && pst2Val === pst3Val){
                 showWinner(pst1Val);
            }
        }   
    }
};

newbtn.addEventListener("click", rstGame);
reset.addEventListener("click", rstGame);

