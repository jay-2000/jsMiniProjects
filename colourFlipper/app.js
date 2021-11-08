const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector("color");
//setting event listener for click events
btn.addEventListener('click', function(){
  //get random number b/n 0 to 3 color from const colors[]
   const randomNumber = 2 ;
   document.body.style.backgroundColor = colors[randomNumber];
});