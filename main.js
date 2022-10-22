console.log("We're sorting!");

const students = [];

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const sortButton = document.getElementById("start-sorting");

sortButton.addEventListener('click', () => {
  const form = document.getElementById('form');
}); 
