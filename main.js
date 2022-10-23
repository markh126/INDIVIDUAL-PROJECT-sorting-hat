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
