// pages/api/fetch.js
export default async function handler(req, res) {
    const { page = 1 } = req.query;
    const url = `https://shikimori.one/api/animes?limit=50&page=${page}&order=popularity`;

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'AnimeProxy/1.0',
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to fetch anime' });
    }
}
