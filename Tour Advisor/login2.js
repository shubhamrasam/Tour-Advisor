let HomePage = document.querySelector("#logo");
HomePage.addEventListener('click',function(){
    window.location.href = "index.html"
})
HomePage.setAttribute("style","cursor:pointer");

let form = document.querySelector("#form");
form.addEventListener("submit",login)
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let accountsData = JSON.parse(localStorage.getItem("account-details")) || [];

function login(event){
  let flag = false;
  let name = ""
    event.preventDefault();
    accountsData.forEach((element)=>{
        let email = form.email.value;
        let password = form.password.value;
        if(email == element.email){
          if(password==element.password){
              flag = true;
              localStorage.setItem("name",JSON.stringify(element.name))
              window.location.href = "index2.html"
            // alert("Sign in Successful");
          }else{
          }
        }
    })
    if(flag==false){
          alert("Wrong Credentials");
    }
 }



function showPassword(){
    let password = document.querySelector("#password");
    console.log("hello")
    if(password.type=="password"){
      password.type = "text"
    }else{
      password.type = "password"
    }
  }