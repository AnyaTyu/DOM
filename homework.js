/**
 * Обработчик клика по ссылке с классом 'popup-link'
 * @param {Event} e событие клика
 * @private
 */
document.body.addEventListener('click', _onMouseClick);

function _onMouseClick(e) {
	if (e.target.classList.contains('popup-link') && e.preventDefault) {
		 	e.preventDefault(); 
	};
	openPopupFromLink(e.target);
}
/**
 * Получает данные из ссылки
 * на основе этих данных создаёт попап (через createPopup) и добавляет его в DOM
 * @param {HTMLElement} link Ссылка с data-аттрибутами
 */
function openPopupFromLink(link) {
	var _url = link.getAttribute('href');
	var message = link.dataset.message.replace("\'%s\'",_url);
	var title = link.dataset.title;
	createPopup(title,
		message,
		function(){
			window.location = _url;
		} );
}
/**
 * Создаёт DOM-узел с сообщением
 * @param {String} title Заголовок сообщение
 * @param {String} message Текст сообщения сообщение
 * @param {Function} onOk Обработчик клика по кнопке 'Да'
 * @returns {HTMLElement}
 */
function createPopup(title, message, onOk){
 	var myPopUp =  document.getElementsByClassName('popUp')[0];
	if (!myPopUp) {
		var myPopUp = document.createElement('div');
		myPopUp.className = "popUp";
		myPopUp.innerHTML = "<div class =\"tt\"><p class=\"title\">\""+title+"\"</p><p class=\"message\">\""+message+"\"</p><form name = \"but\"></form></div>"
		document.body.appendChild(myPopUp);

		var buttonYes = document.createElement('input');
		buttonYes.setAttribute('type','button');
		buttonYes.setAttribute('value','Да');
		buttonYes.addEventListener('click', onOk);
		document.getElementsByName('but')[0].appendChild(buttonYes);	

		var buttonNo = document.createElement('input');
		buttonNo.setAttribute('type','button');
		buttonNo.setAttribute('value','Нет');
		buttonNo.addEventListener('click', del);
		document.getElementsByName('but')[0].appendChild(buttonNo);
	}
	else{
		myPopUp.getElementsByClassName('title')[0].innerHTML = title;
		myPopUp.getElementsByClassName('message')[0].innerHTML = message;
		myPopUp.style.display = "block";
	}

	function del(){
	document.getElementsByClassName('popUp')[0].style.display = 'none';
	}
	
	return myPopUp;
}