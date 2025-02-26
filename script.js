const map1 = document.getElementById('map1');
const map2 = document.getElementById('map2');
const slider = document.getElementById('map-slider');

// Inicialización de Leaflet
const map1Instance = L.map('map1').setView([40.416775, -3.703790], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map1Instance);

const map2Instance = L.map('map2').setView([40.416775, -3.703790], 13);
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(map2Instance);

// Sincronizar los mapas
map1Instance.sync(map2Instance);
map2Instance.sync(map1Instance);

slider.addEventListener('input', () => {
  map1.style.opacity = slider.value;
  map2.style.opacity = 1 - slider.value;
});