const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/api/getScores', (req, res) => {
	return res.status(200).json([
		{ name: 'John Doe', points: 2 }
	]);
});

app.post('/api/submitEntry', (req, res) => {
	return res.status(200).json({ points: 0 });
});

const port = 3000;
app.listen(port, () => {
	console.log('Server', process.pid, 'listening on port', port);
});