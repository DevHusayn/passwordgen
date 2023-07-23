/*-------------------------Password Generator Section ------------------------*/
const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "@#$%&*{[}]?<>"

const allCases = upperCase + lowerCase + number + symbols;

createPassword = () => {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    while(length > password.length){
        password += allCases[Math.floor(Math.random() * allCases.length)];
    }
    passwordBox.value = password;
}

/*-------------------------Copy Text Section ------------------------*/
copyText = () => {
    let text = document.getElementById("password");
    text.select();
    document.execCommand("copy");
      //document.getElementById("copied").style.display ="block"; 

if (passwordBox.value === ""){
 text= alert("Pls, Generate password a first");
}
else{
  text =  alert("Copied Successfullly!")
}}
refreshPage = () => {
    window.location.reload();

}

var type = new Typed("#changeText", {
    strings: ['Strong Password', 'Developed by: DevHusayn'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
});
