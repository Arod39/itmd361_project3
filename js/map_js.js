function init(){
	//alert('it works');
	var el = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(50.8260, 4.3802);
	var mapOptions = {
		center: myLocation,
		zoom: 17,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	var myMap = new google.maps.Map(el, mapOptions);

	var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
		animation: google.maps.Animation.DROP,
		icon: 'rsz_maps_icon1.png',
	});

	var contentString = '<h1>Brusells, Belgium</h1><p>Brussels is Belgium’s capital and home to the European Union headquarters. The Grand-Place square at the heart of the city has shops and cafes inside ornate 17th-century guildhouses, and the intricate Gothic Hôtel de Ville (town hall) with a distinctive bell tower. The 19th-century Maison du Roi houses the Musée de la Ville de Bruxelles city-history museum, including costumes for the city’s famed Manneken Pis statue.</p>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});
  
}
google.maps.event.addDomListener(window, 'load', init);