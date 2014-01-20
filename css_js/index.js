function we(){
	document.getElementById('nav1').className ='navhide';
}
function design(){
	document.getElementById('nav2').className ='navhide';
}
function procedure(){
	document.getElementById('nav3').className ='navhide';
	document.getElementById('board').className ='boarddrop';
	document.getElementById('sboard').className ='sboxani';
	document.getElementById('poofboard').className ='spoofboard';
	setTimeout(function(){
			$("#procedure").show();
			},1000);
}
function detail(){
	document.getElementById('nav4').className ='navhide';
	document.getElementById('telbox').className ='teldrop';
	document.getElementById('pooftelbox').className ='spooftelbox';
	document.getElementById('sbox').className ='sboxani';
	setTimeout(function(){
			$("#detail").show();
			},1000);
}