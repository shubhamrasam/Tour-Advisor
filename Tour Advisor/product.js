function searchElement() {
  let searchEle = document.querySelector("#search-input").value;
  console.log(searchEle);
  let searchData = fullData.filter((e) => {
    return e.Description.toLowerCase().includes(searchEle.toLowerCase());
  });
  displayData(searchData);
}
let trips = document.querySelector("#searchTrips");
trips.addEventListener("click",function(){
    window.location.href = "product.html"
})

let HomePage = document.querySelector("#logo");
HomePage.addEventListener('click',function(){
    window.location.href = "index2.html"
})
HomePage.setAttribute("style","cursor:pointer");

let fullData = [];
async function getData() {
    try{
        let out = await fetch("https://637087430399d1995d7eebf5.mockapi.io/trips");
        let data = await out.json();
        fullData = [...data];
        displayData(data);
    }catch(err){
        console.log(err)
    }
}
getData();
let cartData = JSON.parse(localStorage.getItem("cartItem")) || [];
function displayData(data) {
  document.querySelector("#trips").innerHTML = null;
  data.forEach((element) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", element.image);
    let desc = document.createElement("h4");
    desc.innerText = element.Description;
    let price = document.createElement("p");
    price.innerText = ` $ ${element.price}`;
    let id = element.id;
    let basket = document.createElement("button");
    basket.innerText = "Add to Basket";
    basket.setAttribute("id", "addCart");
    basket.addEventListener("click", function () {
      addCart(element, "cartItem", id);
    });
    div.append(img, desc, price, basket);
    document.querySelector("#trips").append(div);
  });
}

function addCart(value, key, id) {
  let flag = false;
  let cartData = JSON.parse(localStorage.getItem(key)) || [];
  cartData.forEach((e) => {
    if (e.id == id) {
      flag = true;
    }
  });
  if (flag == false) {
    cartData.push(value);
    localStorage.setItem(key, JSON.stringify(cartData));
  } else {
    alert("Product Already in Cart");
  }
}

function openside() {
  document.querySelector("#side-window").style.width = "250px";
}

function closeside() {
  document.querySelector("#side-window").style.width = "0";
}

let logout = document.querySelector(".dropdown");
logout.addEventListener("click", function () {
  window.location.href = "index.html";
});

let basket = document.querySelector("#basket");
basket.addEventListener("click", function () {
  window.location.href = "basket.html";
});
