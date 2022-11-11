let HomePage = document.querySelector("#logo");
HomePage.addEventListener('click',function(){
    window.location.href = "index2.html"
})
HomePage.setAttribute("style","cursor:pointer");

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
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


let pay = document.querySelector("#payment-accpet");
let input = document.getElementsByTagName("input").value
console.log(input);
let flag = true;
pay.addEventListener("click",function(){
    // for(let i=0; i<10; i++){
    //     if(input[i] == null){
    //         flag = false
    //      }
    // }

    if(flag==false){
        let warn = document.createElement("h4");
         warn.innerText = "Fill all Card Details"
        document.querySelector(".payment-details").append(warn)
    }else{
        window.location.href = "otp.html"
    }
})
