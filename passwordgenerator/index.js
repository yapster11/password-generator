const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOneEl = document.getElementById("passwordOne")
let passwordTwoEl = document.getElementById("passwordTwo")
let checkboxCharEl = document.getElementById("checkboxChar")
let checkboxNumEl = document.getElementById("checkboxNum")
let checkboxSymEl = document.getElementById("checkboxSym")

function randomizePword() {
    let randomPword = ""
    if (checkboxCharEl.checked && checkboxSymEl.checked) {
        for (let i = 0; i < 15; i++) {
        let randomIndex = Math.floor(Math.random()*characters.length)
        randomPword += characters[randomIndex]
        }
    } else if (checkboxCharEl.checked) {
        for (let i = 0; i < 15; i++) {
        let randomIndex = Math.floor(Math.random()*62)
        randomPword += characters[randomIndex]
    } } else if (checkboxSymEl.checked){
        for (let i = 0; i < 8; i++) {
        let randomIndex = Math.floor(Math.random()*characters.length)
        randomPword += characters[randomIndex]
    } } else {

    for (let i = 0; i < 9; i++) {
        let randomIndex = Math.floor(Math.random()*52)
        randomPword += characters[randomIndex]
    }
    }
    return randomPword
}

function generatePword() {
    passwordOneEl.textContent = randomizePword()
    passwordTwoEl.textContent = randomizePword()
}

function copyToClipboardOne(){
    let textArea = document.createElement("textarea");
  textArea.value = document.getElementById("passwordOne").textContent;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}

function copyToClipboardTwo(){
    let textArea = document.createElement("textarea");
  textArea.value = document.getElementById("passwordTwo").textContent;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}