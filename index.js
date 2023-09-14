const characters = ["A","B","C","D","E","F","G","H","I",
"J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
"X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y",
"z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~",
"`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?","/"];

let firstPassEl = document.getElementById("first-pass")
let secondPassEl = document.getElementById("second-pass")
let selectLenght = document.getElementById("length-select");
const btnTheme = document.querySelector(".btn-theme");
const FILE_SPANS = document.querySelectorAll(`.first-pass, .second-pass`);
let passwordLength = "";

selectLenght.addEventListener("change", function () {
  let lenghtValue = selectLenght.value;
  passwordLength = lenghtValue;
})

function  getRandomCharacter(){
    let randomChar = Math.floor(Math.random()*characters.length)
    return characters[randomChar]
}

function generate(){
    let randomPassOne = "";
    let randomPassTwo = "";
    for(let i = 0; i < passwordLength; i++){
        randomPassOne += getRandomCharacter()
        randomPassTwo += getRandomCharacter()
    }
    firstPassEl.textContent = randomPassOne
    secondPassEl.textContent = randomPassTwo
}

// COPY TO THE CLIPBOARD

Array.from(FILE_SPANS).forEach(span => {
  span.addEventListener(`click`, event => {
    const COPY_TEXT = event.target.innerText;
    
    navigator.clipboard.writeText(COPY_TEXT).then(() => {
        alert("The password is copied to the clipboard.");
      });
    });
  })


// DARK THEME

btnTheme.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    btnTheme.classList.toggle("fa-moon");
    btnTheme.classList.toggle("fa-sun");
});
