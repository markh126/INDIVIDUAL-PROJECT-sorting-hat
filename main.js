// Students array
const students = [];

//Houses array
const houses = [
  {
    house: "Gryffindor",
  },
  {
    house: "Hufflepuff",
  },
  {
    house: "Ravenclaw",
  },
  {
    house: "Slytherin",
  },
];

const voldemort = [];

// Function to print things onto the Dom
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

// Function for rendering Sorting form onto the Dom
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

//Function for rending new student cards to the Dom
const cardsOnDom = (array) => {
  let domString2 = "";
  for (const member of array) {
  domString2 += `<div class="card" text-center style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${member.name}</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary" id="delete--${member.id}">Expel</a>
  </div>
</div>`
  
  }

renderToDom("#cards", domString2);

};

const voldyArmy = (array) => {
  let domString3 = "";
  for (const member of array) {
    domString3 += `<div class="card" text-center style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${member.name}</h5>
      <p class="card-text"></p>
      <a href="#" class="btn btn-primary" id="delete--${member.id}">Expel</a>
    </div>
  </div>`
  }

  renderToDom("#voldy-cards", domString3);
}

//Event function to print forms with a button click
const showFormButton = document.querySelector("#start-sorting");

showFormButton.addEventListener('click', () => {
  formOnDom();
})

//Event function to print new student cards with a button click
const form = document.querySelector("#sort-form");

const newStudent = (e) => {
  e.preventDefault();

  const studentObj = {
    id: students.length + 1, 
    name: document.querySelector("#name").value,
    house: houses[Math.floor(Math.random() * houses.length)],
  }

  students.push(studentObj);
  cardsOnDom(students);
  reset.reset();
  console.log(students);
}

form.addEventListener("submit", newStudent);

//Event function to expel student cards
const remove = document.querySelector("#cards");

remove.addEventListener('click', (e) => {
  if (e.target.id.includes("delete--")) {
    const [, id] = e.target.id.split("--");

    const index = students.findIndex(e => e.id === Number(id));
    const removed = students.splice(index, 1);

    cardsOnDom(students);
    voldemort.push(removed);
    console.log(voldemort);
    voldyArmy(voldemort);
  }
});

const filter = (array, typeString) => {
  const typeArray = [];
  for (const member of array) {
    if (member.house === typeString) {
      typeArray.push(member)
    }
  }

  return(typeArray);
}


const showAllButton = document.querySelector("#All");
const showGryffindorButton = document.querySelector("#Gryffindor");
const showHuffelpuffButton = document.querySelector("#Huffelpuff");
const showSlytherinButton = document.querySelector("#Slytherin");
const showRavenclawButton = document.querySelector("#Ravenclaw");

showAllButton.addEventListener('click', () => {
  cardsOnDom(students);
  console.log("this is the all");
});

showGryffindorButton.addEventListener('click', () => {
  const GHouse = filter(students, 'Gryffindor');
  cardsOnDom(GHouse);
  console.log("Gryffindor");
});

showHuffelpuffButton.addEventListener('click', () => {
  const HHouse = filter(students, 'Huffelpuff');
  cardsOnDom(HHouse);
  console.log("Huffelpuff");
});

showSlytherinButton.addEventListener('click', () => {
  const SHouse = filter(students, 'Slytherin');
  cardsOnDom(SHouse);
  console.log("Slytherin");
});

showRavenclawButton.addEventListener('click', () => {
  const RHouse = filter(students, 'Ravenclaw');
  cardsOnDom(RHouse);
  console.log("Ravenclaw");
});
