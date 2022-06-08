const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const memos = [];

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/api/memos', (req, res) => {
    res.send(memos)
});

app.post('/api/memos', (req, res) => {

    console.log(req);

    memos.push(req.body.content);
    res.send(memos)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});