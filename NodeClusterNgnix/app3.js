/*jshine esversion:6 */
const express = require('express');
const fs = require('fs');
const path = require('path');

const appName = 'Express App 3 - Ultron';

const app = express();

const getDataTime = () => {
    var date = new Date();
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`;
};

app.use(express.static(path.join(__dirname, 'images')));
app.use('statics', express.static(path.join(__dirname, 'statics')));

const sendPath = path.join(__dirname + '/statics/test.html');

app.get('/', (req, res) => {

    let msg = `\n${getDataTime()} - Request recieved on app ${appName}`;
    //fs.appendFile('requestInfo.log', msg, (err) => {});
    //console.log(msg);
    //res.send(msg);
    res.sendFile(sendPath);
});

process.env.App3Port = 3000;

const AppPort = process.env.App3Port == null ? 3001 : process.env.App3Port;

app.listen(AppPort, () => {
    console.log('\x1Bc');
    console.log(`Example app ${appName} listening on port ${AppPort}!`);
});

//Run app, then load http://localhost:3000 in a browser to see the output.