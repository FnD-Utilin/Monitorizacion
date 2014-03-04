/*
El objetivo es crear una herramienta de línea de comandos que nos informe de la suma de bytes ocupada por los archivos presentes en la carpeta que 
se indica como primer parámetro.
Para ello se utilizarán los métodos readdir/readdirSync y stat/statSync del módulo File System.
Puntos extras:

Se utilizan operaciones asíncronas en lugar de síncronas.
Se calcula el espacio total ocupado por los archivos existentes en la carpeta indicada más todos los archivos de su subcarpetas.
*/

console.log('Iniciant módul');


var os = require('os'),
    http = require('http'),
	fs = require ('fs');

var pes = 0;
var path = process.argv[1];
	spath = String(path) - 'disco.js';
	
	console.log(spath);
 var files = fs.readdir('C:', function (err,list){
	var complet=0;
	
	for (var i = 0 ; i < list.length ; i++ ){
		console.log('*' + list[i]);
		
		fs.stat(list[i], function(err,stats){
			console.log('tamany de ' + list[i] + ': ' + stats.size);
			pes = pes + stats.size;
			complet ++;
		 
			if (complet >= list.length ) {
				console.log(pes);
		 
			}
		
		});
		
	}

	});
	
