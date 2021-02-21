let postsContainer = document.querySelector(".postsContainer");
let url = "https://jsonplaceholder.typicode.com/posts/";

async function fetchData() {
  postsContainer.innerHTML = "fetching posts...";

  try {
    let response = await fetch(url);
    let result = await response.json();
    postsContainer.innerHTML = "";
    for (var i = 0; i <= 20; i++) {
      if (result[i].title === undefined || result[i].body === undefined) {
        continue;
      }
      showPosts(result[i]);
    }
  } catch (error) {
    showMessage(postsContainer, error, "red");
  }
}

fetchData();

const showPosts = (data) => {
  postsContainer.innerHTML += ` <div class="card">
                                    <h2>${data.title}</h2>
                                    <p>${data.body}</p>
                                    <a href='details.html?id=${data.id}'>Read More</a>
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
