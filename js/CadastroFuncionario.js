
window.onload = function() {

    var mobile = getMobile();
    console.log("--------");
    console.log(getFormMode());
    console.log(getWKNumState());
    console.log(getWKUser());
    console.log(getWKNumProces());
    console.log(getWKUserLocale());
    console.log(getWKCardId());
    console.log("--mobile--");
    console.log(mobile);
    console.log("--------");

    dados();
    
    $('#mobile').val(mobile);
    $('[data-toggle="tooltip"]').tooltip();

};

function cadastro() {
    $("#menu_nav").removeClass('active');
    $("#menu_nav").addClass('nav-close');
    
    $("#cadastro_nav").removeClass('nav-close');
    $("#cadastro_nav").addClass('active');
};

function view() {
    $("#menu_nav").removeClass('active');
    $("#menu_nav").addClass('nav-close');
    
    $("#empresas_nav").removeClass('nav-close');
    $("#empresas_nav").addClass('active');
};

function back() {
    $("#cadastro_nav").removeClass();
    $("#empresas_nav").removeClass();
    $("#cadastro_nav").addClass('container tab-pane nav-close');
    $("#empresas_nav").addClass('container tab-pane nav-close');

    $("#menu_nav").addClass('active');
    $("#menu_nav").removeClass('nav-close');  
};

function header() {
    var cabecalho = [];
    
    //1ª tabela
    cabecalho.push("<b>Funcionário</b>"); 
    cabecalho.push("<b>Matrícula</b>"); 
    cabecalho.push("<b>Empresa</b>"); 
    cabecalho.push("<b>Cargo</b>"); 
    cabecalho.push("<b>CPF</b>"); 
    cabecalho.push("<b>Horário de Trabalho</b>"); 
     
    
    var table = document.getElementById("tb_func");
	
	var numOfRows = table.rows.length;
	
	var numOfCols = 6;
	
	var newRow = table.insertRow(numOfRows);
	
	for (var i = 0; i < numOfCols; i++) {
	
		newCell = newRow.insertCell(i);
		
		newCell.innerHTML = cabecalho[i];
	}
};

function dados() {
    clearTable('tb_func');
    header();
    var clickCR = 0;

    var dataset = DatasetFactory.getDataset("DSFormulariodeCadastrodeFuncionario", null, null, null);

    var nRow = dataset.values.length;

    for (var i = 0; i < nRow; i++) {
        clickCR++;
        var aTb = [];
        var table = document.getElementById("tb_func");

        var d1 = dataset.values[i].name_func;
        var d2 = dataset.values[i].matricula;
        var d3 = dataset.values[i].empresa;
        var d4 = dataset.values[i].funcao;
        var d5 = dataset.values[i].cpf;
        var d6 = dataset.values[i].hrs_trab;

        aTb.push(d1);
        aTb.push(d2);
        aTb.push(d3);
        aTb.push(d4);
        aTb.push(d5);
        aTb.push(d6);

        var table = document.getElementById("tb_func");
	
        var numOfRows = table.rows.length;
        
        var numOfCols = 6;
        
        var newRow = table.insertRow(numOfRows);
        
        for (var j = 0; j < numOfCols; j++) {
        
            newCell = newRow.insertCell(j);
            
            newCell.innerHTML = aTb[j];
        }
    }
};

function clearTable(tb) {

    $('#'+tb+' tr').remove();
};

/*function printDiv(divName) {

    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    
    document.body.innerHTML = printContents;
    
    window.print();
    
    document.body.innerHTML = originalContents;
    
};*/

function printDiv(divId) {

    var title = 'Relatório de Funcionários Cadastrados'
  
    var style = "<style>";
    style = style + "table {width: 100%;font: 20px Calibri;margin-bottom: 30px;font-size: 12px}";
    style = style + "table, th, td {border: solid 1px #000000; border-collapse: collapse;";
    style = style + "padding: 2px 3px;text-align: center;}";
    style = style + "</style>";
  
    let mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');
  
    mywindow.document.write(`<html><head><title>${title}</title>`);
    mywindow.document.write(style);
    mywindow.document.write('</head><body >');
    mywindow.document.write(document.getElementById(divId).innerHTML);
    mywindow.document.write('</body></html>');
  
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/
  
    mywindow.print();
    mywindow.close();
  
    return true;
  }	