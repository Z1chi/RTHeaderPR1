let myMap;
ymaps.ready(init); // Ожидание загрузки API с сервера Яндекса
function init () {
	myMap = new ymaps.Map("map", {
		center: [48, 37.80], // Координаты центра карты
		zoom: 15 // Zoom
	});
}
