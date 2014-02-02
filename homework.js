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
	var message = link.dataset.message;
	message = message.replace("\'%s\'",_url);
	var title = link.dataset.title;
//Проверяем наличие элемента в DOMe
	if (!document.getElementsByClassName('popUp')[0]) {
		myPopUp = createPopup(title,message);
		document.body.appendChild(myPopUp);
	}
	else{
		document.getElementsByClassName('title')[0].innerHTML = title;
      	document.getElementsByClassName('message')[0].innerHTML = message;
      	document.getElementsByClassName('popUp')[0].style.display = 'block';
	}
	
	document.getElementsByClassName('yes')[0].addEventListener('click', onOk);
	document.getElementsByClassName('no')[0].addEventListener('click', del);

	function onOk(){
		window.location = _url;
	}
	function del(){
	document.getElementsByClassName('popUp')[0].style.display = 'none';
	}
}
/**
 * Создаёт DOM-узел с сообщением
 * @param {String} title Заголовок сообщение
 * @param {String} message Текст сообщения сообщение
 * @returns {HTMLElement}
 */
function createPopup(title, message){
	var myPopUp = document.createElement('div');
	myPopUp.className = "popUp";
	myPopUp.innerHTML = "<div class =\"tt\"><p class=\"title\">\""+title+"\"</p><p class=\"message\">\""+message+"\"</p><form><input type = \"button\" value = \"Да\" class = \"yes\"/><input type = \"button\" value = \"Нет\" class = \"no\"/></form></div>"
	return myPopUp;
}