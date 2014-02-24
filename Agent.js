
var os = require('os');
 
var estadistica = function (){
	console.log('Mostra ' + 'FreeMem:' + os.freemem() + ' ' + 'TotalMem:' + os.totalmem() );
	var fecha = new Date();
	this.timestamp = fecha.getTime();
	this.memlibre = os.freemem();
	this.TempsCPU = this._TimeCPU();
	this.TempsCPUIdle = this._TimeCPUIdle();

};


var estActual = new estadistica ();

var Agente = function (id){
	console.log('Agent Initiated: ' + this.id);
	this.id = id;
	this.totalmem = os.totalmem();
	this.dadesestadistiques = [];
	
}

Agente.prototype._TimeCPU = function() {
	 
	 var segonstotals=0;
	 
	dadesCPU = os.cpus();
	
	for (var i = 0 ; dadescpu.length > i ; i++){
	 var CPUactual = dadesCPU[i];
		segonstotals = CPUactual.user + CPUactual.nice + CPUactual.sys + CPUactual.idle + CPUactual.irq; 
		};	
	return segonstotals;
};

Agente.prototype.TempsCPUIdle = function () {
	 
	 var segonstotals=0;
	 
	dadesCPU = os.cpus();
	
	for (var i = 0 ; dadescpu.length > i ; i++){
	 var CPUactual = dadesCPU[i];
		segonstotalsidle = CPUactual.idle; 
		};	
	return segonstotalsidle;
};

Agente.prototype._agregarestadistica = function (){
	var estadisticactual = new estadistica();
	this.dadesestadistiques.push (estadisticactual);
	
	if (this.dadesestadistiques.length > 59){
	var TCPUtotal = this.dadesestadistiques[59].TempsCPU - this.dadesestadistiques[0].TempsCPU;
	var TCPUIdle = this.dadesestadistiques[59].TempsCPUIdle - this.dadesestadistiques[0].TempsCPUIdle;
	var CPUUsed = 1 - (TempsCPUIdle/TCPUtotal);
	
	console.log('Cpu used: ' + CPUUsed );
	
	this.dadesestadistiques.shift();
	
	console.log('Borrat' + this.id);
	
	};

};

if (process.argv.length < 3 ){
	console.warn('Número de argumentos insuficientes')
}else{
	var nomAgent = process.argv[2];
	var miAgentet = new Agente ('nomAgent');
}

Agente.prototype.activar = function(){
	 
	 var self = this;

	setInterval (function() {
				self._agregarestadistica();
				},1000);
	
};


miAgente._agregarestadistica ();
miAgente._agregarestadistica ();
miAgente._agregarestadistica ();

console.log(JSON.stringify(miAgente));

miAgente.activar();