let expression = '' ;
let ans='';
function clearPromt(){
    expression ='';
    ans = '';
    document.querySelector("#display").innerText= expression;
}
function addNum(value){
  if(ans !== ''){
    document.querySelector("#display").innerText="error";
   }else{
      expression+=value; 
    document.querySelector("#display").innerText= expression;
   }
          
}
function addOperator(value){
    if(expression[expression.length-1] == '+' || 
       expression[expression.length-1] == '-'||
       expression[expression.length-1] == '*' ||
       expression[expression.length-1] == '/' ||
       expression[expression.length-1] == '%' ||
       expression[expression.length-1] == '.'){
      
        expression = expression.slice(0, expression.length-1);
        expression+=value;
   
    }else{

      expression+=value;        
    }
    if(ans !==''){
           expression=ans+expression[expression.length-1];
ans='';
    }
     document.querySelector("#display").innerText= expression;
     
}

function result(){
    try{
      ans='';
  ans= eval(expression);
  document.querySelector("#display").innerText=ans;
 
    }
    catch(error){
           console.log(error);
           document.querySelector("#display").innerText="error";
    }
}
function backSpace(){
  if(expression === ''){
    document.querySelector("#display").innerText="Not value Entered";
  }else{
    expression = expression.slice(0, expression.length-1);
    document.querySelector("#display").innerText= expression;
  }
}