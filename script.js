const map = L.map('map').setView([40.7128, -74.0060], 13); // Default view (change if needed)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

async function fetchPlayers() {
    try {
        const response = await fetch('https://example.com/erlc-api/players'); // Replace with actual API
        const data = await response.json();

        data.players.forEach(player => {
            L.marker([player.lat, player.lng])
                .addTo(map)
                .bindPopup(`<b>${player.name}</b><br>Speed: ${player.speed} MPH`);
        });
    } catch (error) {
        console.error("Error fetching player data:", error);
    }
}

fetchPlayers();
setInterval(fetchPlayers, 5000); // Refresh every 5 seconds
