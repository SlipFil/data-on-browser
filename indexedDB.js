//Публикация первой версии БД

let openRequest = indexedDB.open("cars", 1);
let carDB, carName, carPrice, carNameInput, carPriceInput, addCarButton

carNameInput = document.querySelector("#carName")
carPriceInput = document.querySelector("#carPrice")
addCarButton = document.querySelector("#addCar")


carNameInput.addEventListener("keyup", ()=>{
    carName = carNameInput.value
    console.log(carName)
})
carPriceInput.addEventListener("keyup", ()=>{
    carPrice = carPriceInput.value
    console.log(carPrice)
})

openRequest.onupgradeneeded = function() {
  // срабатывает, если на клиенте нет базы данных
  // ...выполнить инициализацию...
};

openRequest.onerror = function() {
  console.error("Error", openRequest.error);
};

openRequest.onsuccess = function() {
    carDB = openRequest.result;
  console.log(carDB)
  // продолжить работу с базой данных, используя объект db
};






// удаление БД
// let deleteRequest = indexedDB.deleteDatabase(name)
