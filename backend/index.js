const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const database = require('./database')

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/memos', async (req, res) => {
    const result = await database.run("SELECT * FROM memos");
    res.send(result);
});

app.post('/api/memos', async (req, res) => {
    await database.run(`INSERT INTO memos (content) VALUES (?)`, [req.body.content]);
    const result = await database.run("SELECT * FROM memos");
    res.send(result);
});

app.put('/api/memos/:id', async (req, res) => {
    await database.run(`UPDATE memos SET content = ? WHERE id = ?`, [req.body.content, req.params.id]);
    const result = await database.run("SELECT * FROM memos");
    res.send(result);
});

app.delete('/api/memos/:id', async (req, res) => {
    await database.run(`DELETE FROM memos WHERE id = ?`, [req.params.id]);
    const result = await database.run("SELECT * FROM memos");
    res.send(result);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});