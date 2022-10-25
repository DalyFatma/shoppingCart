
var hearts= document.querySelectorAll(".fa-heart");
console.log(hearts);
for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener("click",function(){
   console.log(hearts[i].classList.toggle("active")); 
    });
    
}

let deductBtnArr = document.getElementsByClassName("minus-item");
let addButtonArr = document.getElementsByClassName("plus-item");

for (let el of deductBtnArr ) {
el.addEventListener("click", function(){
if(el.nextElementSibling.innerHTML>0){
    el.nextElementSibling.innerHTML--;
    total();
}
    else{
        alert("oops!");
    };

});
}

for (let el of addButtonArr ) {
    el.addEventListener("click", function(){
    el.previousElementSibling.innerHTML++;
    total();
    } );
    
    }

var remvs = document.getElementsByClassName("delet_item")
for (const el of remvs) {
 el.addEventListener("dblclick", function(){
    el.parentNode.parentNode.remove(); total();
 })   
}
function total(){
    let sum=0;
var prix = document.getElementsByClassName("price");
var qts= document.getElementsByClassName("qte");
for (let i = 0; i < prix.length; i++) {
   sum+=parseInt(prix[i].innerHTML)*parseInt(qts[i].innerHTML); 
}
document.getElementById("total-amount").innerHTML=sum + " Dt";

}