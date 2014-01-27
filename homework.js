	window.onload =  function () {
	  var links =  document.getElementsByClassName('popup-link');
	  for (var i=0, max = links.length; i < max; i ++)
	  	links[i].onclick = function(){
	  		openPopupFromLink(_onMouseClick(this));
	  		return false;
	  	};
}
function _onMouseClick(e) {
 var links = new Object();
 links._url = e.attributes[0].nodeValue;
 links.message = e.attributes[3].nodeValue;
 links.title = e.attributes[2].nodeValue;
 //alert(links);
 return links;
}

function openPopupFromLink(links) {
	var _url = links._url;
	var message = links.message;
	var title = links.title;
	message = message.replace("\'%s\'",_url);
var myPopUp = document.createElement('div');
myPopUp.id = "popUp";
myPopUp.innerHTML = "<div id=\"tt\"><p>\""+title+"\"</p><p>\""+message+"\"</p><form><input type = \"button\" value = \"Да\" id = \"yes\" onclick = \"go('"+_url+"');\"/><input type = \"button\" value = \"Нет\" id = \"no\" onclick=\"del()\"/></form></div>"
document.body.appendChild(myPopUp);}

function go(_url){
window.location = _url;
}

function del(){
	 var b = document.getElementById('popUp')
	 var c = document.body.removeChild(b);
}