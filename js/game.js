function play(){
    let pscore =0;
    let cscore =0;
     //fill these queries
    const option = document.querySelector();//player chooses
    const phand = document.querySelector();
    const chand = document.querySelector();

    const compOpts =['rock','paper','scissors'];
    
    //this part is incomplete
    const compNum = Math.floor(Math.random()*3+1);
    const compChoice = compOpts[compNum];
      
    compareChoice(playerChoice,compChoice);
    //    
    function scoreUpd(){
        const playerScore = document.getElementById("player1");
        const compScore = document.getElementById("player2");
        playerScore.innerHTML = pscore;
        compScore.innerHTML = cscore;
    }
    function compareChoice(playerChoice,compChoice){
        const winner = document.getElementById();//paragraph to display result
        if(playerChoice===compChoice){
           return ;
           write.innerHTML = "It is a Tie!";
        }

        if (playerChoice=='rock')
        {    
            if(compareChoice =='scissors'){
             write.innerHTML = "Player Win";
             pscore++;
             scoreUpd();
             return;
            }
            else {
                write.innerHTML = "Comp Win";
                cscore++;
                scoreUpd();
                return;
            }
        }
        if (playerChoice =='paper'){
            if(compChoice=='scissors'){
              write.innerHTML = "Comp Win";
                cscore++;
                scoreUpd();
                return;
            }
            else{
                write.innerHTML = "Player Win";
                pscore++;
                scoreUpd();
                return;
            }
        }
        if(playerChoice=='scissors'){
            if(compChoice=='rock'){
               write.innerHTML = "Comp Win";
                cscore++;
                scoreUpd();
                return;
            }
            else{
                write.innerHTML = "Player Win";
                pscore++;
                scoreUpd();
                return;
            }
        }
     }  

}
