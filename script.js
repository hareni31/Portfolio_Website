function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("active");
  }

  
  const typedText = "Full Stack Developer | Passionate Learner";
const typingElement = document.querySelector('.typedText');
let index = 0;

function typeText() {
    if (index < typedText.length) {
        typingElement.textContent += typedText.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}

typeText();
