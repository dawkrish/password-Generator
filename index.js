const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const charactersWOnumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const charactersWOsymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const charactersWOsymbolsNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let symbols = true;
let numbers = true;
let bool = false;
length = 10;

const pbtn1 = document.getElementById("pbtn-1");
const pbtn2 = document.getElementById("pbtn-2");
const gbtn = document.getElementById("gbtn");
const symbolBtn= document.getElementById("s1");
const numberBtn = document.getElementById("s2");
const lengthBtns = document.getElementsByClassName("lengthBtn")

function pwdGen(){
    pwd = "";
    if(symbols && numbers){
        for(let i =0; i < length; i++ ){
            pwd += characters[Math.floor(Math.random() * characters.length)];
        }
    }
    else if(symbols && !numbers){
        for(let i =0; i < length; i++ ){
            pwd += charactersWOnumbers[Math.floor(Math.random() * charactersWOnumbers.length)];
        }
   }
    else if(!symbols && numbers){
    for(let i =0; i < length; i++ ){
        pwd += charactersWOsymbols[Math.floor(Math.random() * charactersWOsymbols.length)];
    }
    }
    else if(!symbols && !numbers){
        for(let i =0; i < length; i++ ){
            pwd += charactersWOsymbolsNumbers[Math.floor(Math.random() * charactersWOsymbolsNumbers.length)];
        }

}

   return pwd
}

for(let i = 0; i < lengthBtns.length; i++){
    lengthBtns[i].addEventListener("click", function(){
        length = lengthBtns[i].textContent;
    })
}

function display(){
    pbtn1.textContent = pwdGen()
    pbtn2.textContent = pwdGen()
}

function copy1(){
    let copyText = pbtn1.textContent ;
    navigator.clipboard.writeText(copyText);
}

function copy2(){
    let copyText = pbtn2.textContent ;
    navigator.clipboard.writeText(copyText);
}

numberBtn.addEventListener("click", function(){
    if(numbers){
        numbers = false;
        numberBtn.style.backgroundColor = "#FFC54D"
        numberBtn.style.color = "white"

    }
    else{
        numbers = true;
        numberBtn.style.backgroundColor = "#10B981"
        numberBtn.style.color = "white"
    }

})

symbolBtn.addEventListener("click", function(){
    if(symbols){
        symbols = false;
        symbolBtn.style.backgroundColor = "#FFC54D"
        symbolBtn.style.color = "white"
    }
    else{
        symbols = true;
        symbolBtn.style.backgroundColor = "#10B981"
        symbolBtn.style.color = "white"

        
    }
})


function check(){
    
}