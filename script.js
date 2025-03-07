
const textElement = document.getElementById("text");
const text = textElement.innerText;
let index = 0;
function type() {
    
    textElement.innerHTML = "";
    index = 0; 
    function typeLetter() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index); 
            index++;
            setTimeout(typeLetter, 100); 
        }
    }
    typeLetter();
}
setInterval(type, 3000); 
type(); 

const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});
