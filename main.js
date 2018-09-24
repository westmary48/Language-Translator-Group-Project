let spanishTranslation = {"merry":"feliz", "christmas":"navidad", "and":"y", "happy":"feliz", "new":"nuevo", "year":"ano"}
let frenchTranslation = {"merry":"joyeux", "christmas":"noël", "and":"et", "happy":"content", "new":"nouveau", "year":"an"}
let dutchTranslation = {"merry":"vrolijk", "christmas":"kerstmis", "and":"en", "happy":"gelukkig", "new":"nieuwe", "year":"jaar"}

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
}

let userinput = document.getElementById("textarea");


let spanishStringBuilder = () => {
    let inputString = '';
    let arrayUserInput = userinput.value.split(' ');
    for (let i = 0; i < arrayUserInput.length; i++) {
        inputString += spanishTranslation[arrayUserInput[i]] + ' '
         printToDom(inputString, 'output');
    }
}

let frenchStringBuilder = () => {
    let inputString = '';
    let arrayUserInput = userinput.value.split(' ');
    for (let i = 0; i < arrayUserInput.length; i++) {
        inputString += frenchTranslation[arrayUserInput[i]] + ' '
        printToDom(inputString, 'output');
    }
}

let dutchStringBuilder = () => {
    let inputString = '';
    let arrayUserInput = userinput.value.split(' ');
    for (let i = 0; i < arrayUserInput.length; i++) {
        inputString += dutchTranslation[arrayUserInput[i]] + ' '
        printToDom(inputString, 'output');
    }
}

document.getElementById("SpanishButton").addEventListener("click", spanishStringBuilder);
document.getElementById("FrenchButton").addEventListener("click", frenchStringBuilder);
document.getElementById("DutchButton").addEventListener("click", dutchStringBuilder);

