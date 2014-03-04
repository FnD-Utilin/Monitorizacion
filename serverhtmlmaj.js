var http = require('http'),
	fs = require ('fs');

var procesador = function(request, response) {
	var urlParseada = url.parse(request.url, true);
	
	function yellIt(string) {
  string = string.toUpperCase()
  return makeMoreExciting(string)
}

	
	if (urlParseada.pathname == '/registrar') {
		procesarRegistrar(request, response, urlParseada);
	} else if (urlParseada.pathname = '/estadistica') {
		procesarEstadistica(request, response);
	} else {
		response.writeHead(404);
		response.end();
	}
}

var server = http.createServer(procesador);
server.listen(80);