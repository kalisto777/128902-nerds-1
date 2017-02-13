<script type="text/javascript">  			
	var link = document.querySelector(".write");  /*кнопка открытия окна*/
	var popup = document.querySelector(".modal-content");  /*находим кнопку на форме*/   	
	var close = popup.querySelector(".modal-content-close");	/*кнопка закрытия окна*/	
	var form = popup.querySelector("form");  /*находим форму*/
	var name-field = popup.querySelector("[name=name-field]");  /*находим поле ввода*/
	var mail-field = popup.querySelector("[name=mail-field]");
	var storage = localStorage.getItem("name-field");  /*записываем значение имени в переменную*/


	link.addEventListener("click", function(event) {    /*событие нажатия на кнопку*/
		event.preventDefault();  /*отмена стандартного действия ссылки*/
		popup.classList.add("modal-content-show"); /*добавление класса по клику на ссылку*/
		if (storage) {     /*запишем значение имени в соответствующее поле*/
  		name-field.value = storage;
			mail-field.focus();    /*смещаем фокус на следующее поле*/
		} else {
  		  name-field.focus();
		}

		   name-field.focus();   /*при открытии формы, фокус автоматически устанавливается в поле ввода имени*/
	});
	
	close.addEventListener("click", function(event) {  /*обработчик клика по кнопке (закрытие)*/
		event.preventDefault();
		popup.classList.remove("modal-content-show");  /*удаление класса по клику на ссылке*/
		popup.classList.remove("modal-error");
	});

	form.addEventListener("submit", function(event) {
		if (!name-field.value || !mail-field.value) {     /*проверка на заполненность полей*/
  			event.preventDefault();
  			console.log("Нужно ввести имя и почту"); 
  			popup.classList.remove("modal-error");
  			popup.offsetWidth = popup.offsetWidth;
  			popup.classList.add("modal-error");    /*класс ошибки*/
		} else {
  			localStorage.setItem("name-field", name-field.value);  /*если правильно заполнено - записываем в локальное хранилище*/
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
</script>