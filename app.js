// import functions

// grab DOM elements
const animalButton = document.getElementById('animalButton');
const animalDiv = document.getElementById('animalDiv');
// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
animalButton.addEventListener('click', () => {
    animalDiv.classList.toggle('hidden');
});