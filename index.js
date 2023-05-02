"use strict";
exports.__esModule = true;
var calculator_1 = require("./class/calculator");
console.log(calculator_1.Calculator.add(1, 1));
console.log(calculator_1.Calculator.sub(1, 1));
console.log(calculator_1.Calculator.mul(5, 2));
var http = require('http');
var server = http.createServer(function (req, res) {
    res.end('Voilà la réponse du serveur !');
});
server.listen(process.env.PORT || 3000);
