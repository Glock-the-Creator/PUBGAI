const API_KEY = "YOUR_PUBG_API_KEY";  // Replace this with your actual API key
const BASE_URL = "https://api.pubg.com/shards/steam";

async function fetchPlayerStats() {
    const playerName = document.getElementById("playerName").value;
    if (!playerName) {
        document.getElementById("output").innerText = "Please enter a player name.";
        return;
    }

    const url = `${BASE_URL}/players?filter[playerNames]=${playerName}`;
    const headers = {
        "Authorization": `Bearer ${API_KEY}`,
        "Accept": "application/vnd.api+json"
    };

    try {
        const response = await fetch(url, { headers });
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const data = await response.json();
        document.getElementById("output").innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById("output").innerText = `Error fetching data: ${error.message}`;
    }
}
