var number1 = 10; 
var number2 = 20; 
var myNumber1 = '3'; 
var myNumber2 = '4'; 
var count1 = number1 + number2; 
var count2 = myNumber1 + myNumber2; 

var num = 47;
var address = " Jalan Gombak";
var add = num + address;

var num1 = 50;
var num2 = 100;
var multiply = num1 * num2;

document.querySelector("#address").textContent = add;
document.querySelector("#mul").textContent = multiply;

document.getElementById("btn").addEventListener("click", function(){
    alert("FUCK YOU!!!");
});

// var el = document.getElementById('one'); 
// var el = document.getElementsByClassName("res");
// var el = document.getElementsByTagName("span");
// var el = document.querySelector("#one");
var el = document.querySelectorAll("span");
el[0].textContent = count1; 

// var el = document.getElementById('two');
// var el = document.getElementsByClassName("res");
// var el = document.getElementsByTagName("span");
// var el = document.querySelector("#two");
el[1].textContent = count2; 