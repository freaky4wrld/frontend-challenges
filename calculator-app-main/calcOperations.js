const operationsBtn = document.querySelectorAll('.btn');
var operationsArray = [];
var operator= [];
// var operator2 = [];
const screenDisplay = document.getElementById('sub-display');
const screenNumDisplay = document.getElementById('display-content');

operationsBtn.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        if(e.target.innerText=='+'||
        e.target.innerText=='-'||
        e.target.innerText=='/'||
        e.target.innerText=='X'){
            operationsArray.push(operator.join(''));
            resetOperator()
            operationsArray.push(e.target.innerText);
            showScreen();
        }else if(e.target.innerText=='=') {
            operationsArray.push(operator.join(''));
            resetOperator()
            operationsArray.push(e.target.innerText);
            showScreen();
            calculateResult();
            showOperator()
            // resetOperator();
        }
        else if(e.target.innerText=='DEL'){
            operator.pop();
            showOperator()
        }else if (e.target.innerText=='RESET'){
            resetScreen();
            showOperator();
            showScreen();
        }
        else{
            operator.push(e.target.innerText);
            showOperator();
        }
    })
})

function showOperator(){
    screenNumDisplay.innerText = operator.join('');
    console.log(operator.join(''));
}

function resetOperator(){
    operator = [];
}
function resetScreen(){
    resetOperator()
    operationsArray = [];
}

function showScreen(){
    screenDisplay.innerText = operationsArray.join(' ');
    console.log(operationsArray);
}

function calculateResult(){
    for (let index = 0; index < (operationsArray.length-1); index++) {
        switch (operationsArray[index]) {
            case '+':
                addUp(operationsArray[index-1], operationsArray[index+1]);
                break;
            case '-':
                subtractUp(operationsArray[index-1], operationsArray[index+1]);
                break;
            case '/':
                divideUp(operationsArray[index-1], operationsArray[index+1]);
                break;
            case 'X':
                multiplyUp(operationsArray[index-1], operationsArray[index+1]);
                break;
        }
    }
}

function addUp(a,b){
    let result = a.includes('.')?parseFloat(a)+parseFloat(b):b.includes('.')?parseFloat(a)+parseFloat(b):parseInt(a)+parseInt(b);
    resetOperator();
    operator.push(result);
}
function subtractUp(a,b){
    let result = a.includes('.')?parseFloat(a)-parseFloat(b):b.includes('.')?parseFloat(a)-parseFloat(b):parseInt(a)-parseInt(b);
    resetOperator();
    operator.push(result);
}
function divideUp(a,b){
    let result = a.includes('.')?parseFloat(a)/parseFloat(b):b.includes('.')?parseFloat(a)/parseFloat(b):parseInt(a)/parseInt(b);
    resetOperator();
    operator.push(result);
}

function multiplyUp(a,b){
    let result = a.includes('.')?parseFloat(a)*parseFloat(b):b.includes('.')?parseFloat(a)*parseFloat(b):parseInt(a)*parseInt(b);
    resetOperator();
    operator.push(result);
}