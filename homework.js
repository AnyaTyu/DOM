/**
 * Обработчик клика по ссылке с классом 'popup-link'
 * @param {Event} e событие клика
 * @private
 */
document.body.onclick = function(e){
	if (e.target.className === "popup-link") _onMouseClick(e);
}
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
	var message = link.getAttribute('data-message');
	message = message.replace("\'%s\'",_url);
	var title = link.getAttribute('data-title');
	var myPopUp = createPopup(title,message,_url);
	document.body.appendChild(myPopUp);
}

/**
 * Создаёт DOM-узел с сообщением
 * @param {String} title Заголовок сообщение
 * @param {String} message Текст сообщения сообщение
 * @param {Function} onOk Обработчик клика по кнопке 'Да'
 * @returns {HTMLElement}
 */
function createPopup(title, message, _url) {
	var myPopUp = document.createElement('div');
	myPopUp.id = "popUp";
	myPopUp.innerHTML = "<div id=\"tt\"><p>\""+title+"\"</p><p>\""+message+"\"</p><form><input type = \"button\" value = \"Да\" id = \"yes\" onclick = \"go('"+_url+"');\"/><input type = \"button\" value = \"Нет\" id = \"no\" onclick=\"del()\"/></form></div>"
	//document.body.appendChild(myPopUp);
	return myPopUp;
}

function go(_url){
	window.location = _url;
}

function del(){
	 var del = document.getElementById('popUp')
	 document.body.removeChild(del);
}
