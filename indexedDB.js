//Публикация первой версии БД

let openRequest = indexedDB.open("cars", 1);
let carDB, carName, carPrice, carNameInput, carPriceInput, addCarButtonб 

carNameInput = document.querySelector("#carName")
carPriceInput = document.querySelector("#carPrice")
addCarButton = document.querySelector("#addCar")


carNameInput.addEventListener("keyup", ()=>{
    carName = carNameInput.value
    
})
carPriceInput.addEventListener("keyup", ()=>{
    carPrice = carPriceInput.value
    
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
    getAndDisplayCars(carDB)
    addCarButton.addEventListener("click", ()=>{
      addCar();
      e.preventDefault();
      
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
    getAndDisplayCars(carDB)
  }
  transaction.onerror = (event) => {
    alert('error storing car ' + event.target.errorCode);
  }
}

const getAndDisplayCars = (carsDB) => {
  let tx = carsDB.transaction(['cars'], 'readonly');
  let store = tx.objectStore('cars');
  // Создать запрос курсора
  let req = store.openCursor();
  let allCars = [];
  req.onsuccess = (event) => {
    // Результатом req.onsuccess в запросах openCursor является
     // IDBCursor
    let cursor = event.target.result;
    if (cursor != null) {
      // Если курсор не нулевой, мы получили элемент.
      allCars.push(cursor.value);
      cursor.continue();
    } else {
      // Если у нас нулевой курсор, это означает, что мы получили
       // все данные, поэтому отображаем заметки, которые мы получили.
      displayCars(allCars);
    }
  }
  req.onerror = (event) => {
    alert('error in cursor request ' + event.target.errorCode);
  }
}

const displayCars = (cars) => {
  let listHTML = '<ul>';
  for (let i = 0; i < cars.length; i++) {
    let car = cars[i];
    listHTML += '<li>' + car.carName + ' ' + '$' + car.carPrice + '</li>';
    
  }
  document.getElementById('cars').innerHTML = listHTML;
}


// удаление БД
// let deleteRequest = indexedDB.deleteDatabase(name)
