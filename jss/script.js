//Creating first and last name of student's
let randomStudentName = ["Adrian Segura", "AJay Olmos", "Alex Ato", "Anothay Chansy", "Bryan Stewart", "Carlos Gonzalez", "Christy Eang", "Demitrius Ovro", "Dylan McFarlin",
    "Hugo Mejia", "John Shamoon", "Jorge Lopez", "Joseph Racca", "Juan Morales", "Leo Manzo", "Mathew Mendoza", "Trevor Womack", "Tyler Rose", "Victor Maldonado"];
let randomQuotes = ["It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.",
    "In a world where there is so much to be done. I felt strongly impressed that there must be something for me to do.",
    "The only way to entertain some folks is to listen to them.", "We all have strength enough to endure the misfortunes of others.",
    "The art of leadership is saying no, not yes. It is very easy to say yes.", "My way of joking is to tell the truth. It is the funniest joke in the world.",
    "It is better to know some of the questions than all of the answers.", "Your limitation—it’s only your imagination.", "Push yourself, because no one else is going to do it for you.",
"Sometimes later becomes never. Do it now.", "Great things never come from comfort zones.", "The harder you work for something, the greater you’ll feel when you achieve it.", "It’s going to be hard, but hard does not mean impossible."];
let randomStudent = "";
let randomQ = "";
let quotes = "";


// let wickedCss = ["wiggle"];
// let cssSelected = Math.floor(Math.random() * wickedCss.length);
// title.className = wickedCss[cssSelected];


let randomStudents = document.getElementById("randomStudents").addEventListener('click', function () {
    randomStudentGenerator();
    
});
let randomQuote = document.getElementById("randomStudents").addEventListener('click', function () {
    randomQuotesGenerator();
    
});


function randomStudentGenerator() {
    randomStudent = randomStudentName[Math.floor(Math.random() * randomStudentName.length)];
    document.getElementById("randomStudents").innerText = "SELECT ANOTHER STUDENT"
    studentName.innerText = randomStudentName[Math.floor(Math.random() * randomStudentName.length)];
}

function randomQuotesGenerator() {
    randomQ = randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
    document.getElementById("randomQuote").innerText = randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
    quotes.innerText = randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
}


//Adding DOM 
/*Grab the id element in HTML*/
let inputText = document.getElementById("inputText");
let outputText = document.getElementById("outputText");
let names = [];

let NFO = JSON.parse(localStorage.getItem("Name"))


inputText.addEventListener("keypress", function (e) {
    // console.log(e);
    if (e.code == "Enter") {
        appendElements(inputText.value);
    }
});

function appendElements(studentName) {
    console.log(studentName);
    let ulElement = document.createElement('ul');
    let liElement = document.createElement('li');

    liElement.innerText = studentName;
    // outputText.setAttribute("class", "d-flex justify-content-center")
    liElement.addEventListener("click", function (e) {
        e.target.remove();
    });

    // ulElement.appendChild(li);
    outputText.appendChild(liElement);
    inputText.value = "";

    names.push(studentName);
    localStorage.setItem("Lists", JSON.stringify(names))

}

