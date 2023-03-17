
let buttons=document.getElementsByClassName("number");
let operators=document.getElementsByClassName("operator");
const display=document.querySelector('.display');
var first=null;
var oper=null;
var second=null;
let result;

    if(oper===null){
        for(item of buttons){
            item.addEventListener('click',(e)=>{
                clickButtonValue=e.target.value;
                if(clickButtonValue==="="){
                    if(display.value !==""){
                        switch(oper){
                            case '+':{
                                       let v1=parseInt(first);
                                       let v2=parseInt(second);
                                       display.value=v1+v2;
                                       first=null;
                                        second=null;
                                        oper=null;
                                        break;
                                     }
                            case '-':{
                                       let v1=parseInt(first);
                                       let v2=parseInt(second);
                                       display.value=v1-v2;
                                       first=null;
                                        second=null;
                                        oper=null;
                                        break;
                            }
                            case '×':{
                                       let v1=parseInt(first);
                                       let v2=parseInt(second);
                                       display.value=(v1*v2);
                                       first=null;
                                        second=null;
                                        oper=null;
                                        break;
                            }
                            case '÷':{
                                       let v1=parseInt(first);
                                       let v2=parseInt(second);
                                       display.value=v1/v2;
                                       first=null;
                                       second=null;
                                       oper=null;
                                       break;
                            }
                            // display.value=eval(display.value);

                        }
                       
                    }
                }else if(clickButtonValue==="C"){
                    first=null;
                    second=null;
                    oper=null;
                    display.value="";
                }
                else{
                if(oper===null){
                    if(first===null){
                        first=clickButtonValue;
                        display.value=first;
                    }
                    else{
                        first+=clickButtonValue;
                         display.value=first;
                    }
                }
                else if(oper!==null){
                    if(second===null){
                        second=clickButtonValue;
                        display.value=second;
                    }
                    else{
                        second+=clickButtonValue;
                         display.value=second;
                    }
                }
            }
                
            })
        }
        for(item of operators){
            item.addEventListener('click',(e)=>{
                valu=e.target.innerText;
                if(first!==null){
                    oper=valu;
                }
                else{
                    alert("please enter first value")
                }
                // console.log('button clicked '+oper,typeof(oper));
                
            })
           
        }
    }

// // buttons.forEach(function(button){
// //     button.addEventListener('click',calculate)
// // });
// // function calculate(event){
// //     let clickButtonValue=event.target.value;
//     if(clickButtonValue==="="){
//         if(display.value !==""){
//             display.value=eval(display.value);
//         }
//     }else if(clickButtonValue==="C"){
//         display.value="";
//     }
//     else{
//     if(oper===null){
//         first+=valu;
//         display.value=first;
//     }
//     else if(oper!==null){
//         second+=valu;
//         display.value=second;
//     }
// }
