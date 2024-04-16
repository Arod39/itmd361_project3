

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

google.maps.event.addEventListener(window, 'load', initMap);


*/

async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const myLatlng = { lat: -25.363, lng: 131.044 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatlng,
    mapId: "DEMO_MAP_ID",
  });
  const marker = new google.maps.marker.AdvancedMarkerElement({
    position: myLatlng,
    map,
    title: "Click to zoom",
  });

  map.addListener("center_changed", () => {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(() => {
      map.panTo(marker.position);
    }, 3000);
  });
  marker.addListener("click", () => {
    map.setZoom(8);
    map.setCenter(marker.position);
  });
}

//Javascript for Image Slider on Anime Page//

document.querySelectorAll(".image_container").forEach((image_container) => {
  const items = image_container.querySelectorAll(".slider_img");
  const buttonsHTML = Array.from(items, () => {
    return `<span class="image_button"></span>`;
  });
  
  image_container.insertAdjacentHTML(
  "beforeend", 
  `
    <div class="image_nav">
      ${buttonsHTML.join("")}
    </div>
  `
 );
    
  const buttons = image_container.querySelectorAll(".image_button");
  
  buttons.forEach((button, i) => {
    button.addEventListener("click",() => {
     //un-select all the items
     items.forEach((item) => item.classList.remove("slider_img--selected"));
     buttons.forEach((button) => button.classList.remove("image_button--selected"));
     
     items[i].classList.add("slider_img--selected");
     button.classList.add("image_button--selected");
    });
  });
  
  // Select the first item on page load
  items[0].classList.add("slider_img--selected");
  buttons[0].classList.add("image_button--selected");
});