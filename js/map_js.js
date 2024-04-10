function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
center: {lat: 50.8476, lng: 4.3572},
zoom: 8
});
}

google.maps.event.addDomListener(window, 'load', initMap);