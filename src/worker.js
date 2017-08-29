const http = require('http');
const port = process.env.PORT || 3000;
const chalk = require('chalk');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if (req.url === '/break') {
        console.log(chalk.magenta('Oops, breaking...'));
        process.exit(1);

        // console.log(chalk.black.bgGreen(`Bug patched, from ${process.pid}`));
        // res.end(`Bug fixed, from ${process.pid}\n`);
    } else if (req.url === '/up') {
        process.send( { tune: 'up' });
        res.end(`Process ${process.pid} called for more workers\n`);
    } else if (req.url === '/down') {
        process.send( { tune: 'down' });
        res.end(`Process ${process.pid} called for less workers\n`);
    } else {
        res.end(`Hello world, from ${process.pid}\n`);
    }
}).listen(port);
