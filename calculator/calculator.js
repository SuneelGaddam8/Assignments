let buttons=document.querySelectorAll("button");
const display=document.querySelector('.display');

let first;
let second;
let result;
buttons.forEach(function(button){
    button.addEventListener('click',calculate)
});
function calculate(event){
    let clickButtonValue=event.target.value;
    if(clickButtonValue==="="){
        if(display.value !==""){
            if(display.value){
                display.value=0;
            }
            else{
                display.value=result;
            }
        }
    }else if(clickButtonValue==="C"){
        display.value="";
    }
    else{
        display.value+=clickButtonValue;
    }

}