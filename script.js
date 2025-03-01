const mainDisplay = document.getElementById('#screen');

const clearbutton = document.querySelector('#clearButton');

const deleteButton = document.querySelector('#deleteButton');

const decimalButton = document.querySelector('#decimalButton');

const divideButton = document.querySelector('#divideButton');

const sevenButton = document.querySelector('#sevenButton');

const eightButton = document.querySelector('#eightButton');

const nineButton = document.querySelector('#nineButton');

const multiplyButton= document.querySelector('#multiplyButton');

const fourButton = document.querySelector('#fourButton');

const fiveButton = document.querySelector('#fiveButton');

const sixButton = document.querySelector('#sixButton');

const subtractButton = document.querySelector('#subtractButton');

const oneButton = document.querySelector('#oneButton');

const twoButton = document.querySelector('#twoButton');

const threeButton = document.querySelector('#threeButton');

const additionButton = document.querySelector('#additionButton');

const doubleZeroButton = document.querySelector('#doubleZeroButton');

const zeroButton = document.querySelector('#zeroButton');

const equalsButton = document.querySelector('#equalsButton');


function addChar(val) {
    document.getElementById("mainDisplay").value += val
}


function solve() {
    let x = document.getElementById("mainDisplay").value
    let y = eval(x)
    document.getElementById("mainDisplay").value = y
}

function clearDisplay() {
    document.getElementById("mainDisplay").value = ""
}

function deleteChar() {
    let x = document.getElementById("mainDisplay").value
    let y = x.slice(0, x.length - 1)
    document.getElementById("mainDisplay").value = y
}





