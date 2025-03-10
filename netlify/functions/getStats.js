exports.handler = async function(event) {
    const API_KEY = process.env.PUBG_API_KEY; // Securely access API key
    const playerName = event.queryStringParameters.name;

    if (!playerName) {
        return { statusCode: 400, body: JSON.stringify({ error: "Player name is required" }) };
    }

    const url = `https://api.pubg.com/shards/steam/players?filter[playerNames]=${playerName}`;
    const headers = {
        "Authorization": `Bearer ${API_KEY}`,
        "Accept": "application/vnd.api+json"
    };

    try {
        const response = await fetch(url, { headers });
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const data = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
