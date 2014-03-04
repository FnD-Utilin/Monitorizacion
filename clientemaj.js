
var http = require('http'),
	fs = require ('fs');

console.log('iniciant');
	
var envia = function(){  
	var paraula =// process.stdin//
    clearinterval (inter);
	var enviaParaula =	function(paraula) {
		console.log('enviant paraula');
		var serialParaula = JSON.stringify(paraula);
		var len = Buffer.byteLength(serialParaula);
		var opciones =  { host: '127.0.0.1',
	                  port : 80,
					  path : '/paraula',
					  method : 'POST',
					  headers : {
						'Content-Type' : 'application/json',
						'Content-Length' : len
					  }
	};
    var peticion = http.request(opciones);
	peticion.write(serialParaula);
	peticion.end();
	}
		document.write(retorn);
		document.write ('Una altra paraula?')
		var inter = setInterval(function () {envia()},3000);

}
 
envia();
