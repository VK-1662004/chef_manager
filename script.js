// Get the audio element
const clickSound = document.getElementById('clickSound');

// Get all the buttons
const buttons = document.querySelectorAll('.button');

// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Play the click sound
        clickSound.play();
    });
});
window.onload = function() {
    alert("Today's Special: Jalebi - Just waiting for you!");
}
function toggleOptions(optionId) {
    var option = document.getElementById(optionId);
    if (option.style.display === "block") {
        option.style.display = "none";
    } else {
        option.style.display = "block";
    }
}
