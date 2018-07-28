const restify = require('restify');
const app = restify.createServer();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(4000, () => {
    console.log('Example app listening on port port!');
});