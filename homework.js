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
	var message = link.dataset.message;
	message = message.replace("\'%s\'",_url);
	var title = link.dataset.title;
//Проверяем наличие элемента в DOMe
	if (!document.getElementById('popUp')) {
		myPopUp = createPopup(title,message);
		document.body.appendChild(myPopUp);
	}
	else{
		document.getElementById('popUp').outerHTML = "<div id = \"popUp\" style = \" display: \'block\';\" ><div id=\"tt\"><p>\""+title+"\"</p><p>\""+message+"\"</p><form><input type = \"button\" value = \"Да\" id = \"yes\"/><input type = \"button\" value = \"Нет\" id = \"no\"/></form></div></div>";
	}
	//Теперь они не глобальные =))
	document.getElementById('yes').onclick = function(){
		window.location = _url;
	}
	document.getElementById('no').onclick = function(){
	document.getElementById('popUp').style.display = 'none';
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
	myPopUp.id = "popUp";
	myPopUp.innerHTML = "<div id=\"tt\"><p>\""+title+"\"</p><p>\""+message+"\"</p><form><input type = \"button\" value = \"Да\" id = \"yes\"/><input type = \"button\" value = \"Нет\" id = \"no\"/></form></div>"
	return myPopUp;
}