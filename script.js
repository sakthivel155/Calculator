var solution=0;
var v1=0,v2=0;
var operator;
function input(i){
    if (i === "cls"){
        document.querySelector("#display").innerText= "" ;
    }
    //pushing input on h1 tag
  //--------------------------------------  
    if( 0<=i && i<=9){
    addLetter(i);
   }
function addLetter(i){
    const heading = document.getElementById('display');
    const text = heading.innerText;
    const letterToAdd = i;
    heading.innerText = text + letterToAdd;
  }
  //--------------------------------------
  // if select operator 
 //--------------------------------------- 
 switch (i) {
    case '+':
        operator = '+';
        v1 =document.getElementById('display').innerText;
        document.getElementById('display').innerText='';
        break;
    case '-':
        operator = '-';
        v1 =document.getElementById('display').innerText;
        document.getElementById('display').innerText='';
        break;
    case '*':
        operator = '*';
        v1 =document.getElementById('display').innerText;
        document.getElementById('display').innerText='';
        break;   
    case '/':
        operator = '/';
        v1 =document.getElementById('display').innerText;
        document.getElementById('display').innerText='';
        break;     
    case '=':
        v2 =document.getElementById('display').innerText;
        solution =add(operator,v1,v2);
        document.getElementById('display').innerText=solution;
        solution= 0;
        v1=0;
        v2=0;
 }

}
  function add(operator, num1, num2) {
    switch (operator) {
      case '+':
        return parseInt(num1) + parseInt(num2);
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
    }
  }
  
  