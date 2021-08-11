let login, password

const loginInput = document.querySelector('#login')
const passwordInput = document.querySelector('#password')
const loginButton = document.querySelector('#loginButton')
const deleteCookiesButton = document.querySelector('#deleteCookies')



function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    
    //domain домен на котором доступны куки
    //expires, max-age - время жизни куки
    //secure передача куки только по  HTTPS
    //samesite=sttric защита от XSRF-атак
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

loginButton.addEventListener("click", () => {
  setCookie("login", login, options = { "max-age": 3600 })
  setCookie("password", password, options = { "max-age": 3600 })
})

deleteCookiesButton.addEventListener("click", () => {
  setCookie("login", "", options = { "max-age": -1 })
  setCookie("password", "", options = { "max-age": -1 })
})




//localstorage

let textArea
const textAreaInput = document.querySelector("#textarea")
const clearButton = document.querySelector("#clear")

window.onload = () => {
  textAreaInput.value = localStorage.getItem("text")
}

textAreaInput.addEventListener('keyup', () => {
  textArea = textAreaInput.value;
  localStorage.setItem("text", textArea)

})

clearButton.addEventListener("click", () => {
  localStorage.removeItem("text")
  textAreaInput.value = ""
})

//clear() – удалить всё.
//key(index) – получить ключ на заданной позиции.
//length – количество элементов в хранилище.


//sessionstorage

//     sessionStorage существует только в рамках текущей вкладки браузера.
// Другая вкладка с той же страницей будет иметь другое хранилище.
// Но оно разделяется между ифреймами на той же вкладке (при условии, 
// что они из одного и того же источника).
// Данные продолжают существовать после перезагрузки страницы, но не после закрытия/открытия вкладки.

// Событие storage:

// Срабатывает при вызове setItem, removeItem, clear.
// Содержит все данные об произошедшем обновлении(key / oldValue / newValue), 
// url документа и объект хранилища storageArea.
// Срабатывает на всех объектах window, которые имеют доступ к 
// хранилищу, кроме того, где оно было сгенерировано(внутри вкладки 
// для sessionStorage, глобально для localStorage).