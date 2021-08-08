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
  console.log("Upgrading")
    let carDB = e.target.result;
    let cars = carDB.createObjectStore('cars', {autoIncrement: true})
   
  // срабатывает, если на клиенте нет базы данных
  // ...выполнить инициализацию...
};

openRequest.onerror = function() {
  console.error("Error", openRequest.error);
};

openRequest.onsuccess = function(e) {
    carDB = e.target.result;
    
    addCarButton.addEventListener("click", ()=>{
      addCar();
      e.preventDefault();
      // let car = {
      //     "carName": carName,
      //     "carPrice": carPrice
      // }
      // let transaction = carDB.transaction(["cars"], "readwrite")
      // let store = transaction.objectStore('car')
      // let request = store.addCarButton(car)
  })
  
  // продолжить работу с базой данных, используя объект db
};
const addCar = ()=> {
  let transaction = carDB.transaction(["cars"], "readwrite")
  let store = transaction.objectStore('cars')
  let car = {
    "carName": carName,
    "carPrice": carPrice
    }
  let request = store.add(car)

  transaction.oncomplete = () => {
    console.log('stored car!')
  }
  transaction.onerror = (event) => {
    alert('error storing car ' + event.target.errorCode);
  }
}









// удаление БД
// let deleteRequest = indexedDB.deleteDatabase(name)
