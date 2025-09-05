var map = L.map('map').setView([4.633748188780134, -74.14291938300677], 13);



L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([4.633748188780134, -74.14291938300677]).addTo(map);
var marker = L.marker([4.635963588933153, -74.13830536224532]).addTo(map);