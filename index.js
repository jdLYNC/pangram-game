const express = require('express');
const bodyParser = require('body-parser');
const Entry = require('./Entry');
const Scoreboard = require('./Scoreboard');

const scoreboard = new Scoreboard();

const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/api/getScores', (req, res) => {
	const topScores = scoreboard.getTopScores(5);
	return res.status(200).json(topScores);
});

app.post('/api/submitEntry', ({ body }, res) => {
	const entry = new Entry(body);
	scoreboard.push(entry)
	return res.status(200).json({ points: entry.points });
});

const port = 3000;
app.listen(port, () => {
	console.log('Server', process.pid, 'listening on port', port);
});