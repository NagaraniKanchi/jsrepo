
let wordCloud = ["Cool", "Brave", "Courage", "Strong", "What", "Why", "Mom", "Dad", "Learning", "Self", "How", "Believe", "Beatiful", "Respect", "Soldier", "Police"];


let wordsContainerEl = document.getElementById('wordsContainer');
let errorMessageEl = document.getElementById('errorMessage');
let userInputEl = document.getElementById('userInput');
let addBtnEl = document.getElementById('addBtn');
let errMsg = "Please Enter a Word";

let addBtn = document.getElementById('addBtn');
function createAndAddWordToWordCloud(word) {
    let randomFontSize = Math.ceil(Math.random() * 40) + "px";

    let wordSpan = document.createElement('span');
    wordSpan.textContent = word;
    wordSpan.style.fontSize = randomFontSize;
    wordSpan.style.color = "tomato";
    wordSpan.classList.add("m-3");

    wordsContainerEl.appendChild(wordSpan);
}

for (let word of wordCloud) {
    createAndAddWordToWordCloud(word)
}

addBtnEl.onclick = function () {
    let userInputWord = userInputEl.value;
    if (userInputWord !== "") {
        userInputEl.value = "";
        errorMessageEl.textContent = "";
        createAndAddWordToWordCloud(userInputWord);
    }
    else {
        errorMessageEl.textContent = errMsg;
    }

}




