let usersco = 0;
let compsco = 0;

const choices = document.querySelectorAll(".cho");
const msg = document.querySelector("#msg");
const user = document.querySelector("#you");
const comp = document.querySelector("#com");

const genComputerchoice = ()=>{
    const options = ["rock", "paper","scissors"];
   let randIdx = Math.floor(Math.random() * 3);
   return options[randIdx];
    // rock ,paper,scissors
}

//Draw Game
const draw = ()=>{
    console.log("Game was Draw");
    msg.innerText = "Game Was Draw";
    msg.style.backgroundColor = "#081b31";
    
}

showwinner = (userwin , userchoice , compchoice)=>{
    if(userwin){
        console.log("User win");
        msg.innerText = `You Have Won ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        usersco ++;
        user.innerText = usersco;
    }
    else{
        console.log("Computer win");
        msg.innerText = `You Have Lost. ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
        compsco ++
        comp.innerText = compsco;

    }
    

}

const playgame =  (userchoice) =>{
    console.log("User choice = ", userchoice);
    //Genrate User Choice
    const compchoice = genComputerchoice();
    console.log("Coputer choice = " , compchoice);


    if(userchoice == compchoice){
      draw();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
           userwin =  compchoice == "paper" ? false : true;
    }else if(userchoice === "paper"){
        userwin = compchoice == "scissors" ? false: true;
    }
    else{
       userwin = compchoice == "rock" ? false: true;
    }
    showwinner(userwin ,userchoice,compchoice);
}}

choices.forEach((cho)=>{
    cho.addEventListener("click" , ()=> {
        const userchoice = cho.getAttribute('id');
        playgame(userchoice);
    });
});


