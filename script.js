const messages = [
    "Are you sure?",
    "Really sure??",
    "Cutes please...",
    "Don't do this to me :(",
    "U breakin my heart",
    "Not funny Cutes",
    "I was thinkin abt spawnin not anymore",
    "Heyyyyy!",
    "I'll just stare at the ceiling...",
    "I will be very very sad...",
    "I'm literally crying rn...",
    "My heart is breaking... 💔",
    "Pretty please with a cherry on top? 🍒",
    "Ok fine, I will stop asking...",
    "Just kidding, SAY YES CUTES! ❤️"
];
let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}