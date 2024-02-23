const express = require('express');
const pool = require('./db');
const port = 1337;

const app = express();
app.use(express.json());

// routes
app.get('/', (req, res) => {
	res.sendStatus(200);
});

app.post('/', (req, res) => {
	const { name, location } = req.body;

	// Add logging to inspect req.body
	console.log(req.body);

	res.status(200).send({
		message: `Your keys were ${name} and ${location}!`,
	});
});

app.listen(port, () =>
	console.log(`Server is running on port ${port}`)
);
