const textEntry = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(){
    if(textEntry.value === ""){
        alert("Please input a value");
        return
    };

    const inputUser = textEntry.value.replace(/[^a-zA-Z0-9]/gi,"").toLowerCase();
    const reversedInputUser = inputUser.split("").reverse().join("") 
 
    const message = (inputUser === reversedInputUser)? `${textEntry.value} is a palindrome` : `${textEntry.value} is not a palindrome`;
    result.display = "block";
    result.textContent = message;
    textEntry.textContent = "";
}

checkBtn.addEventListener("click", isPalindrome)
