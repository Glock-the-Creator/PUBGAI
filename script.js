async function fetchPlayerStats() {
    const playerName = document.getElementById("playerName").value;
    if (!playerName) {
        document.getElementById("output").innerText = "Please enter a player name.";
        return;
    }

    // Instead of calling the PUBG API directly, call your Netlify Function
    const url = `/.netlify/functions/getStats?name=${playerName}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const data = await response.json();
        document.getElementById("output").innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById("output").innerText = `Error fetching data: ${error.message}`;
    }
}
