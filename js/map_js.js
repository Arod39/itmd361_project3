//Javascript for Maps API//
/*

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

google.maps.event.addDomListener(window, 'load', initMap);
*/

//Javascript for Image Slider on Anime Page//

document.querySelectorAll(".image_container").forEach(image_container => {
  const items = image_container.querySelectorAll("slider_img");
