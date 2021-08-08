//Публикация первой версии БД

let openRequest = indexedDB.open(testDB, 1);

openRequest.onupgradeneeded = function() {
  // срабатывает, если на клиенте нет базы данных
  // ...выполнить инициализацию...
};

openRequest.onerror = function() {
  console.error("Error", openRequest.error);
};

openRequest.onsuccess = function() {
  let db = openRequest.result;
  // продолжить работу с базой данных, используя объект db
};



// Публикация второй версии БД

let openRequest = indexedDB.open("store", 2);

// проверить существование указанной версии базы данных, обновить по мере необходимости:
openRequest.onupgradeneeded = function() {
  // версия существующей базы данных меньше 2 (или база данных не существует)
  let db = openRequest.result;
  switch(db.version) { // существующая (старая) версия базы данных
    case 0:
      // версия 0 означает, что на клиенте нет базы данных
      // выполнить инициализацию
    case 1:
      // на клиенте версия базы данных 1
      // обновить
  }
};


// удаление БД
// let deleteRequest = indexedDB.deleteDatabase(name)
