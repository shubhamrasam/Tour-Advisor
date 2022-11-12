let loginpage = document.querySelector("#sign-in");
loginpage.addEventListener("click", function () {
  window.location.href = "login.html";
});

async function getData() {
    let out = await fetch(
      "https://636b2410c07d8f936daeca12.mockapi.io/TourAdvisor"
    );
    let data = await out.json();
    // console.log(data)
    displayData(data);
  }
  getData();
  function displayData(data) {
    data.forEach((element) => {
      let div1 = document.createElement("div");
      div1.setAttribute("class", "card");
      let div2 = document.createElement("div");
      div2.setAttribute("class", "card-content");
      let img = document.createElement("img");
      img.setAttribute("src", element.image);
      let desc = document.createElement("h4");
      desc.innerText = element.Description;
      let price = document.createElement("p");
      price.innerText = ` $ ${element.price}`;
      let basket = document.createElement("button");
      basket.innerText = "Add to Basket";
      basket.setAttribute("id", "addCart");
      div2.append(img, desc, price, basket);
      div1.append(div2);
      document.querySelector("#tour-destination").append(div1);
    });
    slideCard();
  }
  
  function slideCard() {
    const cards = document.querySelectorAll(".card");
    let rightArrow = document.querySelector(".right-arrow");
    let leftArrow = document.querySelector(".left-arrow");
    let left = 0;
    let cardSize = 25;
    let totalCardSize = cards.length * cardSize - cardSize * 4;
    checkopacity(left);
    rightArrow.addEventListener("click", function () {
      left += cardSize;
      if (left >= totalCardSize) {
        left = totalCardSize;
      }
      movecard(left);
      checkopacity(left);
      checkopacity2(left);
    });
  
    leftArrow.addEventListener("click", function () {
      left -= cardSize;
      if (left <= 0) {
        left = 0;
      }
      movecard(left);
      checkopacity(left);
      checkopacity2(left);
    });
  
    function movecard(left) {
      for (card of cards) {
        card.style.left = -left + "%";
      }
    }
  
    function checkopacity(left) {
      if (left <= 0) {
        leftArrow.style.opacity = 0;
      } else {
        leftArrow.style.opacity = 1;
      }
    }
    function checkopacity2(left) {
      if (left >= totalCardSize) {
        rightArrow.style.opacity = 0;
      } else {
        rightArrow.style.opacity = 1;
      }
    }
  }
  
  async function destination() {
    let out = await fetch("https://636b92b2ad62451f9fb59e6e.mockapi.io/info");
    let data = await out.json();
    //   console.log(data)
    getDestination(data);
  }
  
  destination();
  function getDestination(data) {
    data.forEach((element) => {
      let div = document.createElement("div");
      div.setAttribute("class", "card2");
      let div2 = document.createElement("div");
      div2.setAttribute("class", "card-content2");
      let img = document.createElement("img");
      img.setAttribute("src", element.image);
      let name = document.createElement("h4");
      name.innerText = element.name;
      let info = document.createElement("p");
      info.innerText = element.info;
      div2.append(img, name, info);
      div.append(div2);
      document.querySelector("#autumn-section").append(div);
    });
    slideCard2();
  }
  
  function slideCard2() {
    let cards = document.querySelectorAll(".card2");
    let rightArrow = document.querySelector("#rightArrow");
    let leftArrow = document.querySelector("#leftArrow");
    let left = 0;
    let cardSize = 25;
    let totalCardSize = (cards.length) * cardSize - cardSize*4;
    checkopacity(left);
    rightArrow.addEventListener("click", function () {
      left += cardSize;
      if (left >= totalCardSize) {
        left = totalCardSize;
      }
      movecard(left);
      checkopacity(left);
      checkopacity2(left);
    });
  
    leftArrow.addEventListener("click", function () {
      left -= cardSize;
      if (left <= 0) {
        left = 0;
      }
      movecard(left);
      checkopacity(left);
      checkopacity2(left);
    });
  
    function movecard(left) {
      for (card of cards) {
        card.style.left = -left + "%";
      }
    }
  
    function checkopacity(left) {
      if (left <= 0) {
        leftArrow.style.opacity = 0;
      } else {
        leftArrow.style.opacity = 1;
      }
    }
    function checkopacity2(left) {
      if (left >= totalCardSize) {
        rightArrow.style.opacity = 0;
      } else {
        rightArrow.style.opacity = 1;
      }
    }
  }
  
  slideCard3();
  function slideCard3() {
    let cards = document.querySelectorAll(".card3");
    let rightArrow = document.querySelector("#rightA");
    let leftArrow = document.querySelector("#leftA");
    let left = 0;
    let cardSize = 25;
    let totalCardSize = cards.length * cardSize - cardSize * 4;
    checkopacity(left);
    rightArrow.addEventListener("click", function () {
      left += cardSize;
      if (left >= totalCardSize) {
        left = totalCardSize;
      }
      movecard(left);
      checkopacity(left);
      checkopacity2(left);
    });
  
    leftArrow.addEventListener("click", function () {
      left -= cardSize;
      if (left <= 0) {
        left = 0;
      }
      movecard(left);
      checkopacity(left);
      checkopacity2(left);
    });
  
    function movecard(left) {
      for (card of cards) {
        card.style.left = -left + "%";
      }
    }
  
    function checkopacity(left) {
      if (left <= 0) {
        leftArrow.style.opacity = 0;
      } else {
        leftArrow.style.opacity = 1;
      }
    }
    function checkopacity2(left) {
      if (left >= totalCardSize) {
        rightArrow.style.opacity = 0;
      } else {
        rightArrow.style.opacity = 1;
      }
    }
  } 

// <----------experiment------------>
function openside() {
  document.querySelector("#side-window").style.width = "250px";
}

function closeside() {
  document.querySelector("#side-window").style.width = "0";
}

let input = document.querySelector("#search-input")
input.addEventListener("click",function(){
    alert("Login First")
})
