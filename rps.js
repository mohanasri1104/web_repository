//for popups 1st section - rules popup
var popupoverlay = document.querySelector(".popupoverlay")
var popup = document.querySelector(".popup")
var popupwon = document.querySelector(".popupwon")
var popuplose = document.querySelector(".popuplose")
var rulebtn = document.querySelector("#rule-button")

function displayrules(){
   popupoverlay.style.display = "block";
   popup.style.display = "block";
   rulebtn.style.display = "none";

}
function cancelpopup(){
   popupoverlay.style.display = "none";
   popup.style.display = "none";
   rulebtn.style.display = "block";
}

//for scores 2nd section - scores

//selecting components
var rock = document.querySelector("#rock")
var paper = document.querySelector("#paper")
var scissors = document.querySelector("#scissors")

//selecting scores
var playerscore = document.querySelector("#p-score")
var computerscore = document.querySelector("#c-score")

//selecting computer and player
var computer = document.querySelector("#computer")
var player = document.querySelector("#player")
var update = document.querySelector("#wins")




//converting from string to numbers
var pscore = Number(playerscore.textContent)
var cscore = Number(computerscore.textContent)


var arr = [rock.value, paper.value, scissors.value]



//main functions

rock.onclick = rocks;
paper.onclick = papers;
scissors.onclick = scissorss;

function rocks(){
   var comp = arr[Math.floor(Math.random() * 3)]
   console.log(comp)
   if( comp == rock.value){
      computer.textContent = " Rock";
      player.textContent = " Rock"
      update.textContent = "It's a tie"
   }
   else if (comp == paper.value){
       cscore += 1;
       computer.textContent = " Paper";
      player.textContent = " Rock"
      update.textContent = "Computer wins"
   }
   else{
       pscore += 1;
       computer.textContent = " Scissors";
      player.textContent = " Rock"
      update.textContent = "Player wins"
   }

   playerscore.textContent = pscore;
   computerscore.textContent = cscore;

   if(cscore == 5){
       losepopup()
   }
   if(pscore == 5){
       wonpopup()
   }
}
function papers(){
   var comp = arr[Math.floor(Math.random() * 3)]
   console.log(comp)
   if(comp == paper.value){
         computer.textContent = " Paper";
      player.textContent = " Paper"
      update.textContent = "It's a tie"
   }
   else if(comp == rock.value){
       pscore += 1;
       computer.textContent = " Rock";
      player.textContent = " Paper"
      update.textContent = "Player wins"
   }
   else{
       cscore += 1
       computer.textContent = " Scissros";
      player.textContent = " Paper"
      update.textContent = "Computer wins"
   }
   playerscore.textContent = pscore;
   computerscore.textContent = cscore;

   if(cscore == 5){
       losepopup()
   }
   if(pscore == 5){
       wonpopup()
   }
}
function scissorss(){
   var comp = arr[Math.floor(Math.random() * 3)]
   console.log(comp)
   if(comp == scissors.value){
        computer.textContent = " Scissors";
      player.textContent = " Scissors"
      update.textContent = "It's a tie"
   }
   else if(comp == paper.value){
       pscore += 1
       computer.textContent = " Paper";
      player.textContent = " Scissors"
      update.textContent = "Player wins"
   }
   else{
       cscore += 1
       computer.textContent = " Rock";
      player.textContent = " Scissors"
      update.textContent = "Computer wins"
   }
   playerscore.textContent = pscore;
   computerscore.textContent = cscore

   if(cscore == 5){
       losepopup()
   }
   if(pscore == 5){
       wonpopup()
   }
}

//selecting wonpopup and losepopup to display corresponding popups
//selecting won and lose popups

var wpopup = document.querySelector(".popupwon")
var lpopup = document.querySelector(".popuplose")

function losepopup(){
    popupoverlay.style.display = "block"
    lpopup.style.display = "block"
}
function wonpopup(){
   popupoverlay.style.display = "block"
   wpopup.style.display = "block"
}

//selecting replay buttons and redirecting to the first page

var lbtn = document.querySelector("#lose-button")
var wbtn = document.querySelector("#won-button")

lbtn.onclick = replay;
wbtn.onclick = replay;

function replay(){
   popupoverlay.style.display = "none"
   lpopup.style.display = "none"
   playerscore.textContent = "0"
   computerscore.textContent = "0"
   wpopup.style.display = "none";
   pscore = 0;
   cscore = 0;
   computer.textContent = ""
   player.textContent = ""
   update.textContent = ""
}
