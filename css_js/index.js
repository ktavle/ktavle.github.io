function we(){
	document.getElementById('nav1').className ='navhide';
	document.getElementById('weare').className ='wedrop';
	document.getElementById('swe').className ='sboxani';
	document.getElementById('poofwe').className ='spooftelbox';
	setTimeout(function(){
			$("#we").show();
			},700);
}
function design(){
	document.getElementById('nav2').className ='navhide';
	document.getElementById('box').className ='boxdrop';
	document.getElementById('sbox').className ='sboxani';
	document.getElementById('poofbox').className ='spoofboard';
	setTimeout(function(){
			$("#design").show();
			},700);
}
function procedure(){
	document.getElementById('nav3').className ='navhide';
	document.getElementById('board').className ='boarddrop';
	document.getElementById('sboard').className ='sboxani';
	document.getElementById('poofboard').className ='spoofboard';
	setTimeout(function(){
			$("#procedure").show();
			},700);
}
function detail(){
	document.getElementById('nav4').className ='navhide';
	document.getElementById('telbox').className ='teldrop';
	document.getElementById('pooftelbox').className ='spooftelbox';
	document.getElementById('stelbox').className ='sboxani';
	setTimeout(function(){
			$("#detail").show();
			},700);
	document.getElementById('social').className ='socialdrop';
	document.getElementById('poofsocial').className ='spoofboard';
	document.getElementById('ssocial').className ='sboxani';
	setTimeout(function(){
			$("#soc").show();
			},700);
}
function zoomsocial(){
	document.getElementById('flip').className ='flipact';
	setTimeout(function(){
			$("#flip").hide();
			},600);
	document.getElementById('flipup').className ='flipupact';
	setTimeout(function(){
			$("#flipup").show();
			},600);
	setTimeout(function(){
			$("#luncur").show();
			},6500);
}
