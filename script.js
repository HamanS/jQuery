

var Fcalc = document.getElementById("calc");
var Currents = 0;
var FlagNewNum = false;
var PendingOp = "";

function NumPressed (Num) {
		if (FlagNewNum) {
			$("#displ").val(Num);
			FlagNewNum = false;
		}else {
			if ($("#displ").val() == "0")
				$("#displ").val(Num);
			else
				$("#displ").val($("#displ").val() + Num);
		}
}

function Operation (Op) {
		var Readout = $("#displ").val();
		if (FlagNewNum && PendingOp != "="){
			$("#displ").val(Currents);
		}else {
			FlagNewNum = true;
			if ( '+' == PendingOp )
				Currents += parseFloat(Readout);
			else if ( '-' == PendingOp )
				Currents -= parseFloat(Readout);
			else if ( '/' == PendingOp )
				Currents /= parseFloat(Readout);
			else if ( '*' == PendingOp )
				Currents *= parseFloat(Readout);
			else
				Currents = parseFloat(Readout);
			$("#displ").val(Currents);
			PendingOp = Op;
		}
}

function Decimal () {
		var curdispl = $("#displ").val();
		if (FlagNewNum) {
			curdispl = "0.";
			FlagNewNum = false;
		}else {
			if (curdispl.indexOf(".") == -1)
				curdispl += ".";
		}
		$("#displ").val(curdispl);
}
	
function Clear () {
		Currents = 0;
		PendingOp = "";
		$("#displ").val("0");
		FlagNewNum = true;

}

function Neg () {
		$("#displ").val(parseFloat($("#displ").val()) * -1);
} 


function res () {
	var res1 = $('input[name=test1]:checked').val(),
	res2 = $('input[name=test2]:checked').val(),
	res3 = $('input[name=test3]:checked').val(),
	res4 = [],
	res5 = [];
	$("input:checkbox[name=test4]:checked").each(function(){
		res4.push($(this).val());
	});
	$("input:checkbox[name=test5]:checked").each(function(){
		res5.push($(this).val());
	});
	if(res1 != undefined && res2 != undefined && res3 != undefined && res4 != "" && res5 != "" ) {
		var result = 0;
		if (res1 == "a") {
			result += 1;
		}
		if (res2 == "ol") {
			result += 1;
		}
		if (res3 == "meta") {
			result += 1;
		}
		var resultRes4 = 0;
		for (var i=0; i < res4.length;i++) {
			if (res4[i] == "col" || res4[i] == "td") {
				resultRes4 += 0.5;
			} else {
				resultRes4 -= 0.5;
			}
		}
		if (resultRes4 > 0) {
			result += resultRes4;
		}
		var resultRes5 = 0;
		for (var i=0; i < res5.length;i++) {
			if (res5[i] == "autocomplete" || res5[i] == "action") {
				resultRes5 += 0.5;
			} else {
				resultRes5 -= 0.5;
			}
		}
		if (resultRes5 > 0) {
			result += resultRes5;
		}			
		alert("Ваш результат: " + result);
		
	} else {
		alert("Вы не заполнили все чекбоксы");
	}
}


	