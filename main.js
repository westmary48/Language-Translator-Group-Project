let languageTranslator = {
    SpanishTranslation: [
        { english: "merry", spanish: "god" },
        { english: "christmas", spanish: "jul" },
        { english: "and", spanish: "och" },
        { english: "happy", spanish: "gott" },
        { english: "new", spanish: "nytt" },
        { english: "year", spanish: "år" }
    ],
    GermanTranslation: [
        { english: "merry", german: "god" },
        { english: "christmas", german: "jul" },
        { english: "and", gernan: "och" },
        { english: "happy", german: "gott" },
        { english: "new", german: "nytt" },
        { english: "year", german: "år" }
    ],
    SweedishTranslation: [
        { english: "merry", sweedish: "god" },
        { english: "christmas", sweedish: "jul" },
        { english: "and", sweedish: "och" },
        { english: "happy", sweedish: "gott" },
        { english: "new", sweedish: "nytt" },
        { english: "year", sweedish: "år" }
    ]
}
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};
let english = document.getElementById("id of the textbox");

const spanishStringBuilder = () => {
    let newString = '';
    for (let i = 0; i < languageTranslator.SpanishTranslation.length; i++) {
        newString += `<div class="Spanish">`;
        newString += `<h3>${languageTranslator.SpanishTranslation[i].english}</h3>`;
        newString += `<h3>${languageTranslator.SpanishTranslation[i].spanish}</h3>`;
        newString += `</div>`;
    }
    printToDom(newString, 'SpanishTranslation');

};
const sweedishStringBuilder = () => {
    let newString = '';
    for (let i = 0; i < languageTranslator.SweedishTranslation.length; i++) {
        // newString += `<div class="Sweedish">`;
        // newString += `<h3>${languageTranslator.SweedishTranslation[i].english}</h3>`;
        // newString += `<h3>${languageTranslator.SweedishTranslation[i].spanish}</h3>`;
        // newString += `</div>`;
    }
    printToDom(newString, 'SweedishTranslation');
};
const germanStringBuilder = () => {
    let newString = '';
    for (let i = 0; i < languageTranslator.GermanTranslation.length; i++) {
        // newString += `<div class="German">`;
        // newString += `<h3>${languageTranslator.GermanTranslation[i].english}</h3>`;
        // newString += `<h3>${languageTranslator.GermanTranslation[i].german}</h3>`;
        // newString += `</div>`;
    }
    printToDom(newString, 'GermanTranslation');
};
spanishStringBuilder();
germanStringBuilder();
sweedishStringBuilder();

