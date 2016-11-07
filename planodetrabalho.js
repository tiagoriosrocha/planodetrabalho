function Horario(){
	this.dia;
	this.horaInicio;
	this.horaTermino;
}


function Atividade(){
	this.descricao;
	this.curso;
	this.cargaHoraria;
	this.periodo;
	this.portaria;
	this.horarios;
}


function PlanoDeTrabalho() {
	this.nomeCompleto;
	this.areaConhecimento;
	this.categoria;
	this.regimeTrabalho;
	this.carreira;
	this.ativAulas;
	this.ativPesquisa;
	this.ativExtensao;
	this.ativEnsino;
	this.ativAdministrativas;
	
	this.verificarTotalHoras = function () {
        var total=0;
        
        this.ativAulas.forEach(function(ativ){
        	total += ativ.totalhoras;
        }
        
        this.ativPesquisa.forEach(function(ativ){
        	total += ativ.totalhoras;
        }
        
        this.ativExtensao.forEach(function(ativ){
        	total += ativ.totalhoras;
        }
        
        this.ativEnsino.forEach(function(ativ){
        	total += ativ.totalhoras;
        }
        
        this.ativAdministrativas.forEach(function(ativ){
        	total += ativ.totalhoras;
        }
        
        if(total <= this.regimeTrabalho)
	        return true;
        else
    	    return false;
    };
    
    this.verificarConflitoHorasPresenciais = function () {
    
    };
    
    this.exportarDados = function (caminho) {
		var file = new File(caminho,"write");

		log("abrindo arquivo...");
   		file.open(); 

   		log("escrevendo...");
   		dados = JSON.stringify(this);
   		file.writeline(dados);

   		file.close();
   		log("dados salvos");
    };
    
    this.importarDados = function (arquivo) {
    	
    };
    
    this.gerarRelatorio = function (){
    	console.log(this);
    	alert(this);
    };
}




var p = new PlanoDeTrabalho();

p.nomeCompleto = "Tiago Rios da Rocha";
p.areaConhecimento = "Informática";
p.categoria = "Magistério EBTT";
p.regimeTrabalho = 40;
p.carreira = "temporário";

var a1 = new Atividade();
a1.descricao = "Introdução à Computação";
a1.curso = "Técnico em Informática";
a1.cargaHoraria = 1.4;
a1.horarios = new ;
