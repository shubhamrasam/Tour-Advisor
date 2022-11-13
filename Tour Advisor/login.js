let HomePage = document.querySelector("#logo");
HomePage.addEventListener('click',function(){
    window.location.href = "index.html"
})
HomePage.setAttribute("style","cursor:pointer");


function openside() {
  document.querySelector("#side-window").style.width = "250px";
}

function closeside() {
  document.querySelector("#side-window").style.width = "0";
}

let accountsData = JSON.parse(localStorage.getItem("account-details")) || [];

let form = document.querySelector("#form");

form.addEventListener("submit",storeData);
let flag = false;
function storeData(event){
  event.preventDefault();
  let dataObj ={
    name:form.name.value,
    email:form.email.value,
    password:form.password.value
  }
  accountsData.forEach((e)=>{
    if(e.email == form.email.value){
        flag = true;
    }
  })

   if(flag == true){
      alert("Email is Already Registered")
      flag= false;
   }else{
      accountsData.push(dataObj);
      localStorage.setItem("account-details",JSON.stringify(accountsData));
      form.name.value = ""
      form.email.value = ""
      form.password.value ="";
      setTimeout(redirect,2000)
    }
    
}



function redirect(){
    window.location.href = "login2.html"
}

let checkbox = document.querySelector("#check");

function showPassword(){
  let password = document.querySelector("#password");
  console.log("hello")
  if(password.type=="password"){
    password.type = "text"
  }else{
    password.type = "password"
  }
}