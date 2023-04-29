let box = document.getElementById("cards");
let API = async () => {
  let response = await fetch("https://reqres.in/api/users?page=1");
  let file = await response.json();
  let info = file.data
    .map((element) => {                                  
      return `<div class="card">                     
        <div class="card-image">
            <img src="https://img.freepik.com/free-vector/white-technology-background_23-2148390327.jpg?w=996&t=st=1676666941~exp=1676667541~hmac=93b5ed0bdcee7826bbaf9e7b5dd13fd435f52bac54af47fef591a9e0f347791e" alt="">
        </div>
        <div class="profile-image">
            <img src="${element.avatar}" alt="photo">
        </div>
        <div class="card-content">
            <h3>User-Id:${element.id}</h3>
            <h3>Name:${element.first_name} ${element.last_name}</h3>
            <h2>Email:${element.email}</h2>
        </div>
    </div>`;
    })
    .join("");
  cards.innerHTML = info;
};
let navBtn = document.getElementById("nav-btn");
navBtn.addEventListener("click", () => {
  cards.innerHTML = `<div class="ring">Loading
  <span></span>
</div>`;
  setTimeout(() => {
    API();
  }, 2000);
});