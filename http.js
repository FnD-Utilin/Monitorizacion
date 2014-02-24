var http = require ('http'),
	url = require ('url');

var procesador = function (request, response){
	response.writeHead (200, {
	'Content-Type' : 'text/html'
	});
	response.write('<meta charset="utf-8">');
		if (request.method == 'GET'){
			var urlParsed = url.parse (request.url, true);
		
			if (urlParsed.pathname == '/registrar'){
					if (urlParsed.query.instancia){
						response.write ('<p>instancia = ' + urlParsed.query.instancia +' registered'+'</p>');
						response.end();
					}else{
					response.writeHead(404);
						response.write ('<h1>GRAN BADABUM</h1>');
						response.end();
					}
				}else{
						response.write ('<h1>GET Not registered</h1>');
						response.end();
					}
		}
	response.end();
}


var server = http.createServer(procesador);
server.listen(80);

// GET /hola.html
var procesarEstadistica = function (request,response){
	if (request.method == 'POST'){
		var datos= '';
		
		request.on('data', function (novesDades){
			dades=dades + novesDades.toString();
		});
		request.on ('end', function(){
			/*!!!*/
			response.writeHead
			
		})
	}



}