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
const card = document.querySelector(".cards-container");

function Article(article) {
  const newCard = document.createElement("div"),
    headline = document.createElement("div"),
    authorDiv = document.createElement("div"),
    imgDiv = document.createElement("div"),
    img = document.createElement("img"),
    name = document.createElement("span");

  newCard.classList.add("card");

  headline.classList.add("headline");
  headline.textContent = `${article.headline}`;

  authorDiv.classList.add("author");

  imgDiv.classList.add("img-container");
  img.src = `${article.authorPhoto}`;

  name.textContent = `${article.authorName}`;

  newCard.appendChild(headline);
  newCard.appendChild(authorDiv);
  newCard.appendChild(name);

  authorDiv.appendChild(imgDiv);

  imgDiv.appendChild(img);

  return newCard;
}
axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    const articlesTypeList = Object.values(response.data.articles);

    articlesTypeList.forEach(articleType => {
      articleType.forEach(article => {
        const newArticle = Article(article);
        card.appendChild(newArticle);
      });
    });
  });
