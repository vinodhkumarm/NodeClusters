const express = require('express');
const cluster = require('express-cluster');

cluster((worker) => {

    const app = express();

    app.get('/', (req, res) => {
        let msg = `Hello World! # ${worker.id}`;
        console.log(msg);
        res.send(msg);
    });

    const port = 3000;
    return app.listen(port, () => {
        console.log(`Listening on port ${port}!`);
    });

}, {
    count: 5
});