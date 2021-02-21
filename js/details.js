let postsContainer = document.querySelector(".postsDetailsContainer");

let queryString = document.location.search;
const params = new URLSearchParams(queryString);
const paramID = params.get("id");

if (paramID >= 20) {
  location.replace("index.html");
}

let url = `https://jsonplaceholder.typicode.com/posts/${paramID}`;

let urlUser = `https://jsonplaceholder.typicode.com/users/${paramID}`;

async function fetchData() {
  postsContainer.innerHTML = "fetching posts...";
  try {
    let response = await fetch(url);
    let userresponse = await fetch(urlUser);
    let userResult = await userresponse.json();
    let result = await response.json();
    postsContainer.innerHTML = "";
    if (result.title === undefined || result.body === undefined) {
      return;
    }
    showPosts(result, userResult);
  } catch (error) {
    showMessage(postsContainer, error, "red");
  }
}
fetchData();

const showPosts = (data, userData) => {
  postsContainer.innerHTML += ` <div class="card">
                                     <h2>${data.title}</h2>
                                    <p>${data.body}</p>
                                        <span>posted by:<h3>${userData.name}</h3></span>                                   
                                </div>`;
};

function showMessage(field, errorMessage, messageColor) {
  field.style.display = "block";
  field.style.color = messageColor;
  field.style.textAlign = "center";
  field.style.fontSize = "2rem";
  field.style.background = "#88888855";
  field.style.border = `1px solid ${messageColor}`;
  field.innerHTML = errorMessage;
}
