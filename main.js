console.log("We're sorting!");

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
  `<form id="sort-form">
    <div class="mb-3">
    <h5 class="form-title">Enter First Year's Name</h5>
    <input type="text" class="form-control" id="name" required>
    <label class="fill text-center" for="floatingInput"></label>
    <button type="submit" class="btn btn-primary" id="sort">Sort!</button>
    </div>
  </form>`

renderToDom("#app", domString);
}

const cardsOnDom = () => {
  let domString2 = "";
  for (const people of array) {
  domString2 += `<div class="card mb-3" style="max-width: 480px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>`

  }

renderToDom("#app", domString2);
}

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
  form.reset();
}

console.log(students); 

form.addEventListener("submit", newStudent);
