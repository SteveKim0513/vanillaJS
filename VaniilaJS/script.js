/*
PART1. DOM
*/
// DOM
const title = document.getElementById("title1");
title.innerHTML = "Hi, from JS";
// You can see functions to handle "title" on Console
console.dir(title);
// Using DOM
title.style.backgroundColor = 'red';
title.style.color = 'blue';
// Another way to use DOM
const title_q = document.querySelector("#title2");
title_q.style.color = 'green';

// Can see functions in Document
console.dir(document);
document.title = 'Sample Code'


/*
PART2. Event Handler
    - ref1. https://developer.mozilla.org/ko/docs/Web/API/Event
*/
// Simple handler
function handleResize() {
    console.log("I have been resized");
}

window.addEventListener("resize", handleResize);

// handler with logic
const title = document.getElementById("title1");
title.style.backgroundColor = 'red';
title.style.color = 'blue';

const BASE_COLOR = title.style.color;
const CLICKED_COLOR = 'yellow';

function handleClick() {
    if (title.style.color === BASE_COLOR) {
        title.style.color = CLICKED_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

title.addEventListener("click", handleClick);


/*
PART3. doing actions at each file(CSS, HTML, JS)
*/
const title = document.querySelector("#title1");
const CLICKED_CLASS = "clicked";

function handleClick() {
    if (title.className !== CLICKED_CLASS) {
        title.className = CLICKED_CLASS;
    } else {
        title.className = "";
    }
}

title.addEventListener("click", handleClick);

// use Toggle function
const title = document.querySelector("#title1");
const CLICKED_CLASS = "clicked";

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
}
title.addEventListener("click", handleClick);