let home_score=0;
let guest_score=0;
let home_el=document.getElementById("home-score-el");
let guest_el=document.getElementById("guest-score-el");
let status_el=document.getElementById("status");
let timer_el=document.getElementById("winner");
let countHomeCheck=0;
let countGuestCheck=0;


for(let i=1;i<4;i++){
    const HomebuttonId=document.getElementById("btn-home-" + i);
    HomebuttonId.addEventListener('click',function homeScore(){
        home_score+=i;
        home_el.innerHTML=home_score;
        scoreChecker();
        countHomeCheck+=1;
    });
}

for(let y=1;y<4;y++){
    const GuestbuttonId=document.getElementById("btn-guest-" + y);
    GuestbuttonId.addEventListener('click',function guestScore(){
        guest_score+=y;
        guest_el.innerHTML=guest_score;
        scoreChecker();
        countGuestCheck+=1;
    });
}

function scoreChecker(){
        if (home_score>guest_score){
            status_el.textContent=("HOME is leading GUEST by " + (home_score-guest_score) + " points");
        }else{
            status_el.textContent=("GUEST is leading HOME by " + (guest_score-home_score) + " points");
        }
        
}
let newGame=10
let interval=setInterval(() => {
    newGame-=1
    if (newGame>0){
        timer_el.textContent=newGame
    }
    else{
        clearInterval(interval);
        if ((guest_score-home_score)>0){
            timer_el.textContent=("Guest wins by " + (guest_score-home_score)+ " points");
        }else{
            timer_el.textContent=("Home wins by " + (home_score-guest_score)+ " points");
        }
        let btns=document.querySelectorAll(".btn-point");
        for(let q=0;q<btns.length;q++){
            btns[q].style.pointerEvents="none";
        }
    }
}, 1000);

