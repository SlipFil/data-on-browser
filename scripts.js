let login, password

const loginInput = document.querySelector('#login')
const passwordInput = document.querySelector('#password')
const loginButton = document.querySelector('#loginButton')
const deleteCookiesButton = document.querySelector('#deleteCookies')


 
function setCookie(name, value, options = {}) {

    options = {
      path: '/',
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
  }

loginInput.addEventListener('keyup', () => {
    login = loginInput.value;
    })

passwordInput.addEventListener('keyup', () => {
    password = passwordInput.value;
    
    })

loginButton.addEventListener("click", ()=>{
    setCookie("login", login, options = {"max-age": 3600})
    setCookie("password", password, options = {"max-age": 3600})
    })

    deleteCookiesButton.addEventListener("click", ()=>{
        setCookie("login", "", options = {"max-age":-1})
        setCookie("password", "", options = {"max-age":-1})
    })


    //localstorage

    let textArea
    const textAreaInput = document.querySelector("#textarea")
    const clearButton = document.querySelector("#clear")

    window.onload=()=>{
        textAreaInput.value= localStorage.getItem("text" )
    }

    textAreaInput.addEventListener('keyup', () => {
        textArea = textAreaInput.value;
        localStorage.setItem("text", textArea )
        
        })

    clearButton.addEventListener("click", ()=>{
        localStorage.removeItem("text")
        textAreaInput.value=""
    })