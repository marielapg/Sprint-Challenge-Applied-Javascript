// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {}

const headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(Header())

function Header(info) {
    const 
    header = document.createElement("div"),
    date = document.createElement("span"),
    H1 = document.createElement("h1"),
    temp = document.createElement("span");

    header.appendChild(date);
    header.appendChild(H1);
    header.appendChild(temp);

    header.classList.add("header");
    date.classList.add("date");
    temp.classList.add("temp");

    date.textContent = "SMARCH 28, 2019";
    H1.textContent = "Lambda Times";
    temp.textContent = '98°';
return header;
}