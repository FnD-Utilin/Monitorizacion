var http = require ('http'),
	url = require ('url');

var procesador = function (request, response){
	response.writeHead (200, {
	'Content-Type' : 'text/html'
	});
	response.write('<meta charset="utf-8">');
	response.write ('<h1>SNOOP<h1>');
	response.write('<p>Método: '+ request.method + '</p>');
	response.write('<p>URL: '+ request.url + '</p>');
	urlParsed = url.parse (request.url, true);
	response.write('<p>URL: '+ request.url + '</p>');
	
	var parametros = urlParsed.query;
	
	response.write ('<h2>Paràmetres</h2>')
	response.write('<ul>')
	for (var nomProp in parametros){
		response.write ('<li>' + nomProp + '=' + parametros[nomProp] + '</li>');
	
	
	}
	
	response.end();
}


var server = http.createServer(procesador);
server.listen(80);

// GET /hola.html