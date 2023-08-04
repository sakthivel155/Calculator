let expression = '' ;
function clearPromt(){
    expression = '';
    document.querySelector("#display").innerText= expression;
}
function addNum(value){
       expression+=String(value);
       document.querySelector("#display").innerText= expression;
}
function addOperator(value){
    if(expression[expression.length-1] == '+' || 
       expression[expression.length-1] == '-'||
       expression[expression.length-1] == '*' ||
       expression[expression.length-1] == '/'){
      
        expression = expression.slice(0, expression.length-1);
        expression+=value;
   
    }else{
      expression+=value;        
    }
     document.querySelector("#display").innerText= expression;
}

function result(){
    try{
  expression = eval(expression);
  document.querySelector("#display").innerText=expression;
    }
    catch(error){
           console.log(error);
           document.querySelector("#display").innerText="error";
    }
}