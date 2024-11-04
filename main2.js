let userObj = {
    id: "777",
    password: "701",
    name: "Azizbek",
    lastName: "Saydullayev",
    coin: "1050",
    xp: "1390",
    group: "F2-1702",
    img: "./img/image.png"
  };
  
  let token = JSON.parse(localStorage.getItem("token")); 
  const firstName = document.querySelector(".name");
  const coin = document.querySelector(".coin");
  const userImg = document.querySelector(".user-img");
  const xp = document.querySelector(".xp");
  
  if (token && token.id == userObj.id && token.password == userObj.password) {
    firstName.textContent = ` ${userObj.name} ${userObj.lastName}`;
    coin.textContent = userObj.coin;
    userImg.src = userObj.img;
    xp.textContent = userObj.xp;
  }
  
  const logOut = document.querySelector(".logOut");
  
  logOut.addEventListener("click", () => {
    localStorage.removeItem("token");
    window.location.href = "./index.html"; 
  });
  