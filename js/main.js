let elNameInput = document.querySelector(".hero__name");
let elIdInput = document.querySelector(".hero__id");
let elEmailInput = document.querySelector(".hero__email");

elIdInput.addEventListener("keyup", () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => {
      showHTML(data);
    })
})

function showHTML(data){
  let elSearch = elIdInput.value;
  let elHeroList = document.querySelector(".hero__list");
  elHeroList.innerHTML = "";
  data.forEach((item) => {
    if(item.id == elSearch){
      let elItem = document.createElement("li");
      elItem.className = "hero__item col-4";

      elItem.innerHTML = `
        <span class="d-block">Posi ID: ${item.postId}</span>
        <span class="d-block">ID: ${item.id}</span>
        <h2>Title: ${item.name}</h2>
        <p>Body: ${item.body}</p>
        <p>Email: ${item.email}</p>
      `;

      elHeroList.appendChild(elItem);
    }
  });
}

elNameInput.addEventListener("keyup", () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => {
      showName(data);
    })
})

function showName(data){
  let elSearch = elNameInput.value;
  let elHeroList = document.querySelector(".hero__list");
  elHeroList.innerHTML = "";
  data.forEach((item) => {
    if(item.name.includes(elSearch)){
      let elItem = document.createElement("li");
      elItem.className = "hero__item col-4";

      elItem.innerHTML = `
        <span class="d-block">Posi ID: ${item.postId}</span>
        <span class="d-block">ID: ${item.id}</span>
        <h2>Title: ${item.name}</h2>
        <p>Body: ${item.body}</p>
        <p>Email: ${item.email}</p>
      `;

      elHeroList.appendChild(elItem);
    }
  });
}

elEmailInput.addEventListener("keyup", () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => {
      showEmail(data);
    })
})

function showEmail(data){
  let elSearch = elEmailInput.value;
  let elHeroList = document.querySelector(".hero__list");
  elHeroList.innerHTML = "";
  data.forEach((item) => {
    if(item.email.includes(elSearch)){
      let elItem = document.createElement("li");
      elItem.className = "hero__item col-4";

      elItem.innerHTML = `
        <span class="d-block">Posi ID: ${item.postId}</span>
        <span class="d-block">ID: ${item.id}</span>
        <h2>Title: ${item.name}</h2>
        <p>Body: ${item.body}</p>
        <p>Email: ${item.email}</p>
      `;

      elHeroList.appendChild(elItem);
    }
  });
}