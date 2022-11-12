let HomePage = document.querySelector("#logo");
HomePage.addEventListener('click',function(){
    window.location.href = "index2.html"
})
HomePage.setAttribute("style","cursor:pointer");

function openside() {
  document.querySelector("#side-window").style.width = "250px";
}

function closeside() {
  document.querySelector("#side-window").style.width = "0";
}

let logout = document.querySelector(".dropdown");
logout.addEventListener("click",function(){
  window.location.href = "index.html"
})

let cartItem = JSON.parse(localStorage.getItem("cartItem")) || [];
console.log(cartItem)
let totalprice = document.querySelector(".price");
let finalprice = document.querySelector(".final-price");
let priceTotal = cartItem.reduce((acc,element)=>{
    return acc + element.price;
},0);
totalprice.innerText = Math.abs(priceTotal.toFixed(2));
finalprice.innerText = Math.abs(priceTotal.toFixed(2));
displayItem(cartItem)
function displayItem(data){
    document.querySelector(".basket-items").innerHTML=null;
    data.forEach((element,index) => {
         let div = document.createElement("div");
         let img = document.createElement("img");
         img.setAttribute("src",element.image)
         let title = document.createElement("h4");
         title.innerText = element.Description
         let price = document.createElement("p");
         price.innerText = `$ ${element.price}`;
         let add = document.createElement("button");
         add.innerText = "+";
         add.addEventListener("click",function(){
            count.innerText = 1+Number(count.innerText)
            priceTotal +=(element.price * (+(count.innerText))) - (element.price * (+(count.innerText-1))) ;
          
            totalprice.innerText = Math.abs(priceTotal.toFixed(2));
            finalprice.innerText = Math.abs(priceTotal.toFixed(2));
         })
         let count = document.createElement("span");
         count.innerText = 1;
         let minus = document.createElement("button");
         minus.innerText="-"
         minus.addEventListener("click",function(){
             count.innerText -=1;
             if(count.innerText==0){
                deleteItem(index,cartItem)
             }
             priceTotal -= (element.price * (+(count.innerText))) - (element.price * (+(count.innerText-1))) ;
             if(priceTotal<0){
                totalprice.innerText= 0;
             }else{
                 totalprice.innerText =Math.abs( priceTotal.toFixed(2));
                 finalprice.innerText = Math.abs(priceTotal.toFixed(2));
             }
         })
         let div2 = document.createElement("div");
      
         div2.append(add,count,minus)
         div.append(img,title,price,div2);
         document.querySelector(".basket-items").append(div);        
    });
}

function deleteItem(index,data){
    data.splice(index,1);
    displayItem(data);
    localStorage.setItem("cartItem",JSON.stringify(data))
 
}


var modal = document.querySelector("#payment");
let checkoutBtn = document.querySelector("#checkout-btn");
var span = document.querySelector(".close");

checkoutBtn.onclick = function() {
  if(totalprice.innerText==0){
    alert("Add Items in Cart")
  }else{
    modal.style.display = "block";
  }
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


let pay = document.querySelector(".payment-details");
let flag = true;
pay.addEventListener("submit",payment);
function payment(event){
    event.preventDefault()
    console.log("completed")
   window.location.href = "otp.html"
}
