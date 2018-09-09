let spanishTranslation = {"merry":"feliz", "christmas":"navidad", "and":"y", "happy":"feliz", "new":"nuevo", "year":"ano"}
let frenchTranslation = {"merry":"joyeux", "christmas":"noël", "and":"et", "happy":"content", "new":"nouveau", "year":"an"}
let dutchTranslation = {"merry":"vrolijk", "christmas":"kerstmis", "and":"en", "happy":"gelukkig", "new":"nieuwe", "year":"jaar"}

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
}

let userinput = document.getElementById("textarea");
let spanishUserInput = userinput.value.split(" ");

const spanishStringBuilder = () => {
    let inputString = '';
    for (let i = 0; i < spanishUserInput.length; i++) {
        inputString += spanishTranslation[spanishUserInput.value[i]]
         printToDom(inputString, 'output');
    }
}