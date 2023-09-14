'use strict';
// console.log(document.querySelector('.message').textContent);
// (document.querySelector('.guess').value)=2;

// Generating global random no
const randomGlobal=Math.trunc(Math.random()*20)+1;
 console.log(randomGlobal);

 // global counter for decreasing score;
 let newValue= document.querySelector('.score').textContent;


// adding eventListner to check! 
document.querySelector('.check').addEventListener('click',function(){
    //console.log(22);
    // on clicking that button, value that user enter should be fetch and mathch with radomGlobal
    // const randomLocal=Math.trunc(Math.random()*20)+1;
    // document.querySelector('.guess').value=randomLocal;
   // console.log(document.querySelector('.guess').value);


// on each click score decreases by one till it match;
newValue-=1;
document.querySelector('.score').textContent=newValue;
// console.log(newValue);
  // console.log(document.querySelector('.score').textContent);

   const randomLocal=Number(document.querySelector('.guess').value);
 // console.log(typeof randomLocal);
// if value match then message text should be change and ? should be replace with actual globalRandomno
   if(randomGlobal===randomLocal){

    document.querySelector('.message').textContent='✨correct number';

    // changing the ? text according to randomGlobal;
    document.querySelector('.number').textContent=randomGlobal;

    // background color of body should change to green
    document.querySelector('body').style.backgroundColor="green";
    // Highest score will be update be newValue;
    document.querySelector('.highscore').textContent=newValue;

   }

   // if randomLocal<randomGlobal
   // score should be dereases 
   // message should be too less;

   if(randomLocal<randomGlobal){
    document.querySelector('.message').textContent='📉 too low!';

   }
   if(randomLocal>randomGlobal){
    document.querySelector('.message').textContent='📈 too high!';

   }
   // when no i/p and press button  no number!
   if(randomLocal===0){
    document.querySelector('.message').textContent='💀 no number!';

   }
})

// on clicking Again page should be refresh
// use location.reload();

document.querySelector('.again').addEventListener("click",function(){
    location.reload();
})