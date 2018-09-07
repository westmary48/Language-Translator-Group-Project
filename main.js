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

    const languageStringBuilder() => {
    let newString = '';
    for (let i = 0); i<languageTranslator.spanish.length; i++{
        newString += `<div class="spanish">`;
        newString += `<h3>$languageTranslator.spanish[i].english}</h3>`;
        newString += `<h3>$languageTranslator.spanish[i].spanish}</h3>`;
        newString += `</div>`;
    }

    printToDom(newString, 'spanish');

}

