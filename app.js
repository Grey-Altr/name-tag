// import functions and grab DOM elements
const nameEl = document.getElementById('name');
const pronounsEl = document.getElementById('pronouns');
const buttonEL = document.getElementById('submit');

// let state

// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state
buttonEL.addEventListener('click', () => {
  const nameInputEl = document.getElementById('your-name');
  const pronounsInputEl = document.getElementById('your-pronouns');
  nameEl.textContent = nameInputEl.value;
  pronounsEl.textContent = pronounsInputEl.value;
});
