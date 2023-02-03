let display1 = document.getElementById("display1");
let display2 = document.getElementById("display2")
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let equality = document.getElementById("equality");
let dot = document.getElementById("dot");
let zero = document.getElementById("zero");
let subtraction = document.getElementById("subtraction");
let multiply = document.getElementById("multiplication");
let division = document.getElementById("division");
let addition = document.getElementById("addition");
let clear = document.getElementById("clear");
let mc = document.getElementById("mc");
let mplus = document.getElementById("mplus");
let minus = document.getElementById("minus");
let mr = document.getElementById("mr");

one.addEventListener("click", ()=>{
    result = parseInt(one.value);
    display1.value += result;    
})
two.addEventListener("click", ()=>{
    result = parseInt(two.value);
    display1.value += result;    
})
three.addEventListener("click", ()=>{
    result = parseInt(three.value);
    display1.value += result;    
})
four.addEventListener("click", ()=>{
    result = parseInt(four.value);
    display1.value += result;    
})
five.addEventListener("click", ()=>{
    result = parseInt(five.value);
    display1.value += result;    
})
six.addEventListener("click", ()=>{
    result = parseInt(six.value);
    display1.value += result;    
})
seven.addEventListener("click", ()=>{
    result = parseInt(seven.value);
    display1.value += result;    
})
eight.addEventListener("click", ()=>{
    result = parseInt(eight.value);
    display1.value += result;    
})
nine.addEventListener("click", ()=>{
    result = parseInt(nine.value);
    display1.value += result;    
})
zero.addEventListener("click", ()=>{
    result = (zero.value);
    display1.value += result;    
})
dot.addEventListener("click", ()=>{
    result = (dot.value);
    display1.value += result;    
})
addition.addEventListener("click", ()=>{
    result = (addition.value);
    display1.value += result;    
})
subtraction.addEventListener("click", ()=>{
    result = (subtraction.value);
    display1.value += result;    
})
multiply.addEventListener("click", ()=>{
    result = (multiply.value);
    display1.value += result;    
})
division.addEventListener("click", ()=>{
    result = (division.value);
    display1.value += result;    
})
clear.addEventListener("click", ()=>{
    result = (0);
    display1.value = result;    
})
