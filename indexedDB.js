//Публикация первой версии БД

let openRequest = indexedDB.open("cars", 1);
let carDB, carName, carPrice, carNameInput, carPriceInput, addCarButtonб 

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

openRequest.onupgradeneeded = function(e) {

    let thisDB = openRequest.result
    if(!thisDB.objectStoreNames.contains('cars')){
        thisDB.createObjectStore("cars", {autoIncrement: true})
    }
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


addCarButton.addEventListener("click", ()=>{
    let car = {
        "carName": carName,
        "carPrice": carPrice
    }
    let transaction = carDB.transaction(["cars"], "readwrite")
    let store = transaction.objectStore('car')
    let request = store.addCarButton(car)
})






// удаление БД
// let deleteRequest = indexedDB.deleteDatabase(name)
