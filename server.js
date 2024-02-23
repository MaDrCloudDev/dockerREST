const express = require('express');
const pool = require('./db');
const port = 1337;

const app = express();
app.use(express.json());

// routes
app.get('/', async (req, res) => {
	res.sendStatus(200);
});

app.post('/', async (req, res) => {
	const { name, location } = req.body;

	// Add logging to inspect req.body
	console.log(req.body);

	res.status(200).send({
		message: `Your keys were ${name} and ${location}!`,
	});
});

app.get('/setup', async (req, res) => {
	try {
		await pool.query(
			'CREATE TABLE IF NOT EXISTS schools (id SERIAL PRIMARY KEY, name VARCHAR(100), address VARCHAR(100)'
		);
	} catch (err) {
		console.error(err.message);
		res.sendStatus(500);
	}
});

app.listen(port, () =>
	console.log(`Server is running on port ${port}`)
);
