let display1 = document.getElementById("display1");
let display2 = document.getElementById("display2");
document.getElementById("one").addEventListener("click", ()=>{
    display1.value += (document.getElementById("one").value);  
})
document.getElementById("addMinus").addEventListener("click", ()=>{
    display1.value = ("");  
})
document.getElementById("two").addEventListener("click", ()=>{
    display1.value += (document.getElementById("two").value);
})
document.getElementById("three").addEventListener("click", ()=>{
    display1.value += (document.getElementById("three").value);    
})
document.getElementById("four").addEventListener("click", ()=>{
    display1.value += (document.getElementById("four").value);    
})
document.getElementById("five").addEventListener("click", ()=>{
    display1.value += (document.getElementById("five").value); 
})
document.getElementById("six").addEventListener("click", ()=>{
    display1.value += (document.getElementById("six").value); 
})
document.getElementById("seven").addEventListener("click", ()=>{
    display1.value += (document.getElementById("seven").value);    
})
document.getElementById("eight").addEventListener("click", ()=>{
    display1.value += (document.getElementById("eight").value);    
})
document.getElementById("nine").addEventListener("click", ()=>{
    display1.value += (document.getElementById("nine").value);   
})
document.getElementById("zero").addEventListener("click", ()=>{
    display1.value += (document.getElementById("zero").value);   
})
document.getElementById("dot").addEventListener("click", ()=>{
    display1.value += (document.getElementById("dot").value);    
})
document.getElementById("addition").addEventListener("click", ()=>{
    display1.value += (document.getElementById("addition").value);   
})
document.getElementById("subtraction").addEventListener("click", ()=>{
    display1.value += (document.getElementById("subtraction").value); 
})
document.getElementById("multiplication").addEventListener("click", ()=>{
    display1.value += (document.getElementById("multiplication").value);
})
document.getElementById("division").addEventListener("click", ()=>{
    display1.value += (document.getElementById("division").value);  
})
document.getElementById("clear").addEventListener("click", ()=>{
    display1.value = ("");
    display2.value = "";    
})
document.getElementById("equality").addEventListener("click", ()=>{
    if (display1.value == "") {
        alert("please enter a number to evaluate")
    } else {
        display2.value = eval (display1.value);
    } 
})


