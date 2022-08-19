// var submit= document.getElementById('Submit');
// submit.addEventListener('click', displayDetails);

// var row =1;
// function displayDetails(){
// 	var words =document.getElementById('enterwords').value;
// 	var bitperwords= document.getElementById('enterbitperwords').value;
// 	var compilerpartname= document.getElementById('compiler_name').value;

// 	// if (!words){
// 	// 	alert('words and Bpw need to be entered');
// 	// 	return;
// 	// }
// 	var show= document.getElementById('show');
// 	var newrow = show.insertRow(row);
// 	var cell1= newrow.insertCell(0);
// 	var cell2= newrow.insertCell(1);
// 	var cell3 = newrow.insertCell(3);
	
// 	cell1.innerHTML = compilerpartname;
// 	cell2.innerHTML = words;
// 	cell3.innerHTML = bitperwords;

// 	row++;
// }


	
var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];


var n = 1;
var x = 0;

function AddRow(){

	var AddRown = document.getElementById('show');
	var NewRow = AddRown.insertRow(n);
	
	var a = document.getElementById("enterwords").value;
	if(document.getElementById('enterwords').value==""){
		alert('word kon bharega');
		return;
	}
	else{

	list1[x] = document.getElementById("compiler_name").value;
	list2[x] = document.getElementById("enterwords").value;
	list3[x] = document.getElementById("enterbitperwords").value;
	// let btnshow = document.querySelector('#Redundancy');
	// btnshow.addEventListener("click", ()=>{
	// 	let checkbox=document.querySelector('input[type="checkbox"]:checked');
	// 	list5[x] = checkbox.value;
	// });


	var b = document.getElementById("enterbitperwords").value;
	var c= document.getElementById('VT');
	c.addEventListener('click',function(e){
		let checkbox=document.querySelector('input[type="checkbox"]:checked');
		c=checkbox.value;
	})

	list4[x] = document.getElementById("hello").value;
	list5[x] = c.value;
	list6[x] = document.getElementById("pffgB-99-Tm40Ecbest").value;

	var cel1 = NewRow.insertCell(0);
	var cel2 = NewRow.insertCell(1);
	var cel3 = NewRow.insertCell(2);
	var cel4 = NewRow.insertCell(3);
	var cel5 = NewRow.insertCell(4);
	var cel6 = NewRow.insertCell(5);
	var cel7 = NewRow.insertCell(6);


	cel1.innerHTML = list1[x]+a+"x"+b;
	cel2.innerHTML = list2[x];
	cel3.innerHTML = list3[x];
	cel4.innerHTML = list4[x];
	cel5.innerHTML = list5[x];
	cel6.innerHTML = list6[x];
	cel7.innerHTML="<input type='checkbox' id='test'>";
	// cel7.innerHTML="37.0um"
	// cel8.innerHTML="47.0um"
	// cel9.innerHTML="1504.0um2";
	// cel10.innerHTML="11%";
	n++;
	x++;
	
}
}

	
var lis1 = [];
var lis2 = [];
var lis3 = [];
var lis4 = [];
var lis5 = [];
var lis6 = [];


var p = 1;
var x = 0;

function AddRoww(){

	var AddRown = document.getElementById('review');
	var NewRow = AddRown.insertRow(p);
	
	

	lis1[x] = document.getElementById("compiler_name").value;
	lis2[x] = document.getElementById("enterwords").value;
	lis3[x] = document.getElementById("enterbitperwords").value;


	var a = document.getElementById("enterwords").value;
	var b = document.getElementById("enterbitperwords").value;
	var c= document.getElementById('VT');
	c.addEventListener('click',function(e){
		let checkbox=document.querySelector('input[type="checkbox"]:checked');
		c=checkbox.value;
	})

	lis4[x] = document.getElementById("hello").value;
	lis5[x] = c.value;
	lis6[x] = document.getElementById("pffgB-99-Tm40Ecbest").value;

	var cel1 = NewRow.insertCell(0);
	var cel2 = NewRow.insertCell(1);
	var cel3 = NewRow.insertCell(2);
	var cel4 = NewRow.insertCell(3);
	var cel5 = NewRow.insertCell(4);
	var cel6 = NewRow.insertCell(5);
	var cel7 = NewRow.insertCell(6);


	cel1.innerHTML = lis1[x]+a+"x"+b;
	cel2.innerHTML = lis2[x];
	cel3.innerHTML = lis3[x];
	cel4.innerHTML = lis4[x];
	cel5.innerHTML = lis5[x];
	cel6.innerHTML = lis6[x];
	cel7.innerHTML="<input type='checkbox' id='test'>";

	n++;
	x++;
	
}

function checkforblank(){
	if(document.getElementById('enterwords').value==""){
		alert('word kon bharega');
		return;
	}
}