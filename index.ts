import { Calculator } from "./class/calculator";

console.log(Calculator.add(1, 1));
console.log(Calculator.sub(1, 1));
console.log(Calculator.mul(5, 2));

const http = require('http');

const server = http.createServer((req:any, res:any) => {
    res.end('Voilà la réponse du serveur !');
});

server.listen(process.env.PORT || 3000);