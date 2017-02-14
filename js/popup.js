var link = document.querySelector(".write");  /*кнопка открытия окна*/
var popup = document.querySelector(".modal-content");  /*находим кнопку на форме*/   	
var close = popup.querySelector(".modal-content-close");	/*кнопка закрытия окна*/	
var form = popup.querySelector("form");  /*находим форму*/
var nameField = popup.querySelector("[name=name]");  /*находим поле ввода*/
var mailField = popup.querySelector("[name=mail]");
var storage = localStorage.getItem("name");  /*записываем значение имени в переменную*/


link.addEventListener("click", function(event) {    /*событие нажатия на кнопку*/
	event.preventDefault();  /*отмена стандартного действия ссылки*/
	popup.classList.add("modal-content-show"); /*добавление класса по клику на ссылку*/
	if (storage) {     /*запишем значение имени в соответствующее поле*/
		nameField.value = storage;
		nameField.focus();    /*смещаем фокус на следующее поле*/
	} else {
		  nameField.focus();
	}

	   nameField.focus();   /*при открытии формы, фокус автоматически устанавливается в поле ввода имени*/
});

close.addEventListener("click", function(event) {  /*обработчик клика по кнопке (закрытие)*/
	event.preventDefault();
	popup.classList.remove("modal-content-show");  /*удаление класса по клику на ссылке*/
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
	if (!nameField.value || !mailField.value) {     /*проверка на заполненность полей*/
			event.preventDefault();
			console.log("Нужно ввести имя и почту"); 
			popup.classList.remove("modal-error");
			popup.offsetWidth = popup.offsetWidth;
			popup.classList.add("modal-error");    /*класс ошибки*/
	} else {
			localStorage.setItem("name", nameField.value);  /*если правильно заполнено - записываем в локальное хранилище*/
		}
});
 window.addEventListener("keydown", function(event) {  /*отлавливает нажатие кнопки ESC*/
	if (event.keyCode === 27) {
			if (popup.classList.contains("modal-content-show")) {
  			popup.classList.remove("modal-content-show");
  			popup.classList.remove("modal-error");
			}
	}
});

function init () {
  myMap = new ymaps.Map('map', {  // создание копии карты и привязка к контейнеру
    // указание центра и масштабирования
    center:[59.93863106417265,30.3230545], // координата адреса
    zoom:18
  });

  myMap.controls
   .add('zoomControl', { left: 15, top: 15 });   // масштабирование кнопки
  myPlacemark = new ymaps.Placemark([59.93863106417265,30.3230545], {
  }, {
    iconImageHref: 'img/map-marker.png',
    iconImageSize: [231, 190],  // размер Label 
    iconImageOffset: [-60, -200]  //точка привязки 
  });

  myMap.geoObjects.add(myPlacemark);
}

ymaps.ready(init);  // Яндекс.Карта