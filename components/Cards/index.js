// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector(".cards-container")
axios
.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response =>{
    console.log(response.data.articles);

    response.data.articles.javascript.forEach(item =>{
        const newCardJs = cardCreate(item);
    cardContainer.appendChild(newCardJs);
    console.log(item);
})
response.data.articles.bootstrap.forEach(item =>{
    const newCardBs = cardCreate(item);
cardContainer.appendChild(newCardBs);
})
response.data.articles.jquery.forEach(item =>{
    const newCardJq = cardCreate(item);
cardContainer.appendChild(newCardJq);
})
response.data.articles.node.forEach(item =>{
    const newCardNode = cardCreate(item);
cardContainer.appendChild(newCardNode);
})
response.data.articles.technology.forEach(item =>{
    const newCardTech = cardCreate(item);
cardContainer.appendChild(newCardTech);
})
    });

    function cardCreate(el){
        const 
        card = document.createElement("div"),
        headLine = document.createElement("div"),
        author = document.createElement("div"),
        imgContainer = document.createElement("div"),
        image = document.createElement("img"),
        span = document.createElement("span");
        card.appendChild(headLine);
        card.appendChild(author);
        author.appendChild(imgContainer);
        imgContainer.appendChild(image);
        author.appendChild(span);
    
        card.classList.add("card");
        headLine.classList.add("headline");
        author.classList.add("author");
        imgContainer.classList.add("img-container");
    
        headLine.textContent = `${el.headline}`;
        image.src = `${el.authorPhoto}`;
        span.textContent = `${el.authorName}`;
    
    
        return card;
    }    