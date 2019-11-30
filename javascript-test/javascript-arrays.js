window.onload = () => {

    const elfCode = {
        appendToList: (list, value) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    };

    //Displays numbers with the 'Show Numbers' button in the console log and on the screen from lowest to greatest number in a list.

    const numbersAction = document.getElementById('numbers-action');
    const numbersDisplay = document.getElementById('numbers-display');

    const arrays = {
        numbers: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5]
    };

    arrays.numbers.sort((a, b) => a - b);
    
    numbersAction.onclick = () => {
    for (let number of arrays.numbers) {
        console.log(number);
        elfCode.appendToList(numbersDisplay, number);
    };
};
//Same procedure but this time we would be displaying languages in the console log and on the screen with a button.


const languagesAction = document.getElementById('languages-action');
const languagesDisplay = document.getElementById('languages-display');

const listOfLanguages = {
    languages: ["JavaScript", "HTML", "CSS", "Java", "C#", "Python", "C/C++"]
};

listOfLanguages.languages.sort();

languagesAction.onclick = () => {
for (let language of listOfLanguages.languages) {
    console.log(language);
    elfCode.appendToList(languagesDisplay, language);
}
}

};
