console.log("We're sorting!");

const students = [];

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const formOnDom = () => {
  let domString = "";
  domString += `<form>
  <div class="mb-3" id="sort-form">
    <h5 class="form-title">Enter First Year's Name</h5>
    <label for="student-name" class="form-label" id="name">Student Name</label>
    <input type="name" class="form-control" id="first-year-name" placeholder="Harry Potter">
    <button type="submit" class="btn btn-primary" id="sort">Sort!</button>
  </div>
</form>`

renderToDom("#app", domString);
}


const showFormButton = document.querySelector("#start-sorting");

showFormButton.addEventListener('click', () => {
  formOnDom();
})

const cardsOnDom = () => {
  let domString2 = "";
  domString2 += `<div class="card mb-3" style="max-width: 480px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Student Name</h5>
        <p class="card-text">House Name</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>`

renderToDom("#app", domString2);
}

const showStudentButton = document.querySelector("#sort");

showStudentButton.addEventListener("submit",);
