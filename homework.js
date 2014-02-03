/**
 * Обработчик клика по ссылке с классом 'popup-link'
 * @param {Event} e событие клика
 * @private
 */
document.body.addEventListener('click', _onMouseClick);

function _onMouseClick(e) {
	if (e.preventDefault) {
		e.preventDefault();
	}
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
//Проверяем наличие элемента в DOMe
	if (!document.getElementsByClassName('popUp')[0]) {
		myPopUp = createPopup(title,
		message,
		onOk = function(){
			window.location = _url;
		} );
		document.body.appendChild(myPopUp[0]);
		document.getElementsByName('but')[0].appendChild(myPopUp[1]);
		document.getElementsByName('but')[0].appendChild(myPopUp[2]);
	}
	else{
		document.getElementsByClassName('title')[0].innerHTML = title;
      	document.getElementsByClassName('message')[0].innerHTML = message;
      	document.getElementsByClassName('popUp')[0].style.display = 'block';
	}
}
/**
 * Создаёт DOM-узел с сообщением
 * @param {String} title Заголовок сообщение
 * @param {String} message Текст сообщения сообщение
 * @returns {HTMLElement}
 */
function createPopup(title, message, onOk){
	var myPopUp = document.createElement('div');
	myPopUp.className = "popUp";
	myPopUp.innerHTML = "<div class =\"tt\"><p class=\"title\">\""+title+"\"</p><p class=\"message\">\""+message+"\"</p><form name = \"but\"></form></div>"
	
	var buttonYes = document.createElement('input');
	buttonYes.setAttribute('type','button');
	buttonYes.setAttribute('value','Да');
	buttonYes.addEventListener('click', onOk);
	
	var buttonNo = document.createElement('input');
	buttonNo.setAttribute('type','button');
	buttonNo.setAttribute('value','Нет');
	buttonNo.addEventListener('click', del);

	return [myPopUp, buttonYes, buttonNo];
}

function del(){
	document.getElementsByClassName('popUp')[0].style.display = 'none';
}