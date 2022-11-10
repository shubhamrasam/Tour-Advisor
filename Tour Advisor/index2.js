let name1 = document.querySelector("#nameID");

let nameID = JSON.parse(localStorage.getItem("name"));

name1.innerText = nameID

let logout = document.querySelector("#dropdown");
logout.addEventListener("click",function(){
    window.location.href = "index.html"
})

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
