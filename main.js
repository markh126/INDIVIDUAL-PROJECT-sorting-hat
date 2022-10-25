const students = [
  {
    id: 1,
    name: "Harry Potter",
  }
];

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const formOnDom = () => {
  let domString = "";
  domString += 
  `<form id="reset">
    <div class="mb-3">
    <h5 class="form-title">Enter First Year's Name</h5>
    <input type="text" class="form-control" id="name" required>
    <label class="fill text-center" for="floatingInput"></label>
    <button type="submit" class="btn btn-primary" id="sort">Sort!</button>
    </div>
  </form>`

renderToDom("#sort-form", domString);
}

const cardsOnDom = (array) => {
  let domString2 = "";
  for (const member of array) {
  domString2 += `<div class="card" id="cards" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${member.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
  
  }

renderToDom("#cards", domString2);

};

const showFormButton = document.querySelector("#start-sorting");

showFormButton.addEventListener('click', () => {
  formOnDom();
})

const form = document.querySelector("#sort-form");

const newStudent = (e) => {
  e.preventDefault();

  const studentObj = {
    id: students.length +1, 
    name: document.querySelector("#name").value,
  }

  students.push(studentObj);
  cardsOnDom(students);
  reset.reset();
}

form.addEventListener("submit", newStudent);

console.log(students);
