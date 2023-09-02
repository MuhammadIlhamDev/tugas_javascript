// DOM DOCUMENT OBJECT MODEL STARTING POINT
const login = document.getElementById("login");
console.log(login);
const p = document.createElement("p");
const pNode = document.createTextNode("Login");
p.appendChild(pNode);
login.appendChild(p);

// username starting point
const pUser = document.createElement("p");
login.appendChild(pUser);

const labelElement = document.createElement("label");
const labelTextNode = document.createTextNode("Username : ");
labelElement.appendChild(labelTextNode);
pUser.appendChild(labelElement);

const inputElement = document.createElement("input");
inputElement.setAttribute("id", "username");
inputElement.type = "text";
pUser.appendChild(inputElement);
// username endpoint

// password starting point
const pPassword = document.createElement("p");
login.appendChild(pPassword);

const labelElementp = document.createElement("label");
const labelTextNodep = document.createTextNode("Password : ");
labelElementp.appendChild(labelTextNodep);
pPassword.appendChild(labelElementp);

const inputElementp = document.createElement("input");
inputElementp.setAttribute("id", "password");
inputElementp.type = "password";
pPassword.appendChild(inputElementp);
// password endpoint

// button element starting point
const buttonElement = document.createElement("button");
buttonElement.setAttribute("id", "button");
buttonElement.type = "submit";
buttonElement.innerHTML = "login";
login.appendChild(buttonElement);
// button element endpoint
// DOM DOCUMENT OBJECT MODEL ENDPOINT

// ARRAY STARTING POINT
const cars = [
  {
    brand: "Toyota",
    model: "Corolla",
    year: 2000,
    color: "Silver",
    mileage: 15000,
  },
  {
    brand: "Honda",
    model: "Civic",
    year: 2001,
    color: "Blue",
    mileage: 16000,
  },
  {
    brand: "Ford",
    model: "Mustang",
    year: 2002,
    color: "red",
    mileage: 17000,
  },
];

// ARRAY ENDPOINT

// FUNCTION STARTING POINT

loginUser();

function loginUser() {
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const button = document.getElementById("button");

  function handleLogin() {
    const usernameValue = username.value;
    const passwordValue = password.value;

    if (usernameValue === "admin" && passwordValue === "admin") {
      for (const car of cars) {
        document.writeln(car.brand + " " + car.year + "</br>");
      }
      alert("Yay! You succeeded.");
    } else if (usernameValue === "" && passwordValue === "") {
      alert("Please enter username and password.");
    } else {
      alert("Invalid Username or Password.");
    }
  }

  button.addEventListener("click", handleLogin);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      handleLogin();
    }
  });
}

loginUser();

// FUNCTION ENDPOINT
