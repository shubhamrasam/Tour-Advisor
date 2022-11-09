
async function getData(){
    let out = await fetch ("https://636b2410c07d8f936daeca12.mockapi.io/TourAdvisor");
    let data = await out.json()
    // console.log(data)
    displayData(data)
}
getData()

function displayData(data){
    data.forEach((element) => {
        let div = document.createElement("div");
        div.setAttribute("class","card");
        let img = document.createElement("img");
        img.setAttribute("src",element.image)
        let desc = document.createElement("h4");
        desc.innerText = element.Description
        let price = document.createElement("p");
        price.innerText = `$ ${element.price}`;
        div.append(img,desc,price)
        document.querySelector("#tour-destination").append(div)
    });
}


async function destination(){
    let out = await fetch ("https://636b92b2ad62451f9fb59e6e.mockapi.io/info");
    let data = await out.json()
    console.log(data)
    getDestination(data)
}
destination()
function getDestination(data){
    data.forEach((element) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src",element.image)
        let name = document.createElement("h4");
        name.innerText = element.name
        let info = document.createElement("p");
        info.innerText = element.info;
        div.append(img,name,info)
        document.querySelector("#autumn-section").append(div)
    });
}




const cards = document.querySelectorAll(".card");
console.log(cards)
// let rightArrow = document.querySelector("#right-arrow");
// let leftArrow = document.querySelector("#left-arrow");
// let destination = document.querySelector("#tour-destination")
// let left = 0;
// let cardSize = 25.4;
// let totalCardSize = (cards.length * cardSize) - (cardSize*4);


