let container = document.createElement('div'); //container
container.setAttribute('class', 'container');
container.classList.add('my-5');
//for input field
let row0 = document.createElement('div');
row0.setAttribute('class', 'row ');
let col0 = document.createElement('div');
col0.setAttribute('class', 'col-12');
let inputdiv = document.createElement('div');
inputdiv.setAttribute('class', 'input-group');
inputdiv.classList.add('mb-5');
let input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('class', 'form-control');
input.setAttribute('id', 'input1');
// input.onkeypress = inputhandler;
inputdiv.append(input);
col0.append(inputdiv);
row0.append(col0);
container.append(row0);
// 2input
let row2nd = document.createElement('div');
row2nd.setAttribute('class', 'row ');
let col2nd = document.createElement('div');
col2nd.setAttribute('class', 'col-12');
let inputdiv2 = document.createElement('div');
inputdiv2.setAttribute('class', 'input-group');
inputdiv2.classList.add('mb-5');
let input2nd = document.createElement('input');
input2nd.setAttribute('type', 'text');
input2nd.setAttribute('class', 'form-control');
input2nd.setAttribute('id', 'input2');
// input.onkeypress = inputhandler;
inputdiv2.append(input2nd);
col2nd.append(inputdiv2);
row2nd.append(col2nd);
container.append(row2nd);
//answer
let ansdiv = document.createElement('div');
ansdiv.setAttribute('class', 'my-3 ');
let ansp = document.createElement('p');
ansp.setAttribute('class', 'fs-3 fw-bold');
ansp.id = 'answer';
ansdiv.append(ansp);
container.append(ansdiv);

// //end of input field
// //row 1
let row1 = document.createElement('div');
row1.setAttribute('class', 'row my-5');
let row2 = document.createElement('div');
row2.setAttribute('class', 'row my-5');
let row3 = document.createElement('div');
row3.setAttribute('class', 'row my-5');
let row4 = document.createElement('div');
row4.setAttribute('class', 'row my-5');
// //cols for row 1
let col9 = document.createElement('div');
let col8 = document.createElement('div');
let col7 = document.createElement('div');
let col6 = document.createElement('div');
let colno9 = document.createElement('div');
let colno8 = document.createElement('div');
let colno7 = document.createElement('div');
let colno6 = document.createElement('div');
let colno5 = document.createElement('div');
let colno4 = document.createElement('div');
let colno3 = document.createElement('div');
let colno2 = document.createElement('div');
let colno1 = document.createElement('div');
let clear = document.createElement('div');
let zeroes = document.createElement('div');
let equals = document.createElement('div');

// //number buttons
let clearb = document.createElement('button');
clearb.setAttribute('class', 'btn btn-info');
clearb.classList.add('w-25', 'fs-2');
clearb.id = 'clear';
clearb.innerText = 'clr';
let zeroesb = document.createElement('button');
zeroesb.setAttribute('class', 'btn btn-info');
zeroesb.classList.add('w-25', 'fs-2');
zeroesb.innerText = '0';
let equalsb = document.createElement('button');
equalsb.setAttribute('class', 'btn btn-info');
equalsb.classList.add('w-25', 'fs-2');
equalsb.id = 'equals';
equalsb.innerText = '=';
//
let no9 = document.createElement('button');
no9.setAttribute('class', 'btn btn-info');
no9.classList.add('w-25', 'fs-2');
no9.innerText = '9';
let no8 = document.createElement('button');
no8.setAttribute('class', 'btn btn-info');
no8.classList.add('w-25', 'fs-2');
no8.innerText = '8';
let no7 = document.createElement('button');
no7.setAttribute('class', 'btn btn-info');
no7.classList.add('w-25', 'fs-2');
no7.innerText = '7';
let no6 = document.createElement('button');
no6.setAttribute('class', 'btn btn-info');
no6.classList.add('w-25', 'fs-2');
no6.innerText = '6';

let no5 = document.createElement('button');
no5.setAttribute('class', 'btn btn-info');
no5.classList.add('w-25', 'fs-2');
no5.innerText = '5';
let no4 = document.createElement('button');
no4.setAttribute('class', 'btn btn-info');
no4.classList.add('w-25', 'fs-2');
no4.innerText = '4';
let no3 = document.createElement('button');
no3.setAttribute('class', 'btn btn-info');
no3.classList.add('w-25', 'fs-2');
no3.innerText = '3';

let no2 = document.createElement('button');
no2.setAttribute('class', 'btn btn-info');
no2.classList.add('w-25', 'fs-2');
no2.innerText = '2';
let no1 = document.createElement('button');
no1.setAttribute('class', 'btn btn-info');
no1.classList.add('w-25', 'fs-2');
no1.innerText = '1';

// //button for operations
let add = document.createElement('button');
add.setAttribute('class', 'btn btn-info');

add.id = 'addbutton';
add.classList.add('w-25', 'fs-2');
// add.onclick = addfunctions(2);
add.innerText = '+';
let sub = document.createElement('button');
sub.setAttribute('class', 'btn btn-info');
sub.id = 'subbutton';
sub.classList.add('w-25', 'fs-2');
// sub.onclick = subfunctions;
sub.innerText = '-';
let mul = document.createElement('button');
mul.setAttribute('class', 'btn btn-info');
mul.id = 'mulbutton';
mul.classList.add('w-25', 'fs-2');
// mul.onclick = mulfunctions;
mul.innerText = '*';
let divison = document.createElement('button');
divison.setAttribute('class', 'btn btn-info');
divison.id = 'divisionbutton';
// division.onclick = divfunctions;
divison.classList.add('w-25', 'fs-2');
divison.innerText = '/';

// //end of button for operations
col9.setAttribute('class', 'col-3');
col9.classList.add('text-center');
col9.append(add);
col8.setAttribute('class', 'col-3');
col8.classList.add('text-center');
col8.append(sub);
col7.setAttribute('class', 'col-3');
col7.classList.add('text-center');
col7.append(mul);
col6.setAttribute('class', 'col-3');
col6.classList.add('text-center');
col6.append(divison);
row1.append(col9, col8, col7, col6);
container.append(row1);
// //end of row 1
// //row 2
colno9.setAttribute('class', 'col-3');
colno9.classList.add('text-center');
colno9.append(no9);
colno8.setAttribute('class', 'col-3');
colno8.classList.add('text-center');
colno8.append(no8);
colno7.setAttribute('class', 'col-3');
colno7.classList.add('text-center');
colno7.append(no7);
clear.setAttribute('class', 'col-3');
clear.classList.add('text-center');
clear.append(clearb);

row2.append(colno9, colno8, colno7, clear);
container.append(row2);

// //end of row2
// //row 3
colno6.setAttribute('class', 'col-3');
colno6.classList.add('text-center');
colno6.append(no6);
colno5.setAttribute('class', 'col-3');
colno5.classList.add('text-center');
colno5.append(no5);
colno4.setAttribute('class', 'col-3');
colno4.classList.add('text-center');
colno4.append(no4);
equals.setAttribute('class', 'col-3');
equals.classList.add('text-center');
equals.append(equalsb);

row3.append(colno6, colno5, colno4, equals);
container.append(row3);
// //end of row3
// //row 4
colno3.setAttribute('class', 'col-3');
colno3.classList.add('text-center');
colno3.append(no3);
colno2.setAttribute('class', 'col-3');
colno2.classList.add('text-center');
colno2.append(no2);
colno1.setAttribute('class', 'col-3');
colno1.classList.add('text-center');
colno1.append(no1);
zeroes.setAttribute('class', 'col-3');
zeroes.classList.add('text-center');
zeroes.append(zeroesb);

row4.append(colno3, colno2, colno1, zeroes);
container.append(row4);
// //end of row4
document.body.append(container);

//end of design part
let sum = 0;
let numbertyped = 0;
let addbutton = document.getElementById('addbutton');
let subbutton = document.getElementById('subbutton');
let mulbutton = document.getElementById('mulbutton');
let divbutton = document.getElementById('divisionbutton');
let clearbutton = document.getElementById('clear');
let equalsbutton = document.getElementById('equals');

const addfunctions = () => {
  let number1 = document.getElementById('input1');
  let number2 = document.getElementById('input2');
  let no1value = number1.value;
  let no2value = number2.value;
  if (
    no1value.charCodeAt(0) >= 47 &&
    no1value.charCodeAt(0) <= 57 &&
    no2value.charCodeAt(0) >= 47 &&
    no2value.charCodeAt(0) <= 57
  ) {
    sum = parseInt(no1value) + parseInt(no2value);
    console.log(sum);
    let answer = document.getElementById('answer');
    answer.innerText = `Ans is ${sum}`;
  } else {
    alert('Enter only numbers');
  }
};
addbutton.addEventListener('click', addfunctions);

const subfunctions = () => {
  let number1 = document.getElementById('input1');
  let number2 = document.getElementById('input2');
  let no1value = number1.value;
  let no2value = number2.value;
  if (
    no1value.charCodeAt(0) >= 47 &&
    no1value.charCodeAt(0) <= 57 &&
    no2value.charCodeAt(0) >= 47 &&
    no2value.charCodeAt(0) <= 57
  ) {
    sum = parseInt(no1value) - parseInt(no2value);
    console.log(sum);
    let answer = document.getElementById('answer');
    answer.innerText = `Ans is ${sum}`;
  } else {
    alert('Enter only numbers');
  }
};
subbutton.addEventListener('click', subfunctions);
const mulfunctions = () => {
  let number1 = document.getElementById('input1');
  let number2 = document.getElementById('input2');
  let no1value = number1.value;
  let no2value = number2.value;
  if (
    no1value.charCodeAt(0) >= 47 &&
    no1value.charCodeAt(0) <= 57 &&
    no2value.charCodeAt(0) >= 47 &&
    no2value.charCodeAt(0) <= 57
  ) {
    sum = parseInt(no1value) * parseInt(no2value);
    console.log(sum);
    let answer = document.getElementById('answer');
    answer.innerText = `Ans is ${sum}`;
  } else {
    alert('Enter only numbers');
  }
};
mulbutton.addEventListener('click', mulfunctions);
const divfunctions = () => {
  let number1 = document.getElementById('input1');
  let number2 = document.getElementById('input2');
  let no1value = number1.value;
  let no2value = number2.value;
  if (
    no1value.charCodeAt(0) >= 47 &&
    no1value.charCodeAt(0) <= 57 &&
    no2value.charCodeAt(0) >= 47 &&
    no2value.charCodeAt(0) <= 57
  ) {
    sum = parseInt(no1value) / parseInt(no2value);
    console.log(sum);
    let answer = document.getElementById('answer');
    answer.innerText = `Ans is ${sum}`;
  } else {
    alert('Enter only numbers');
  }
};
divbutton.addEventListener('click', divfunctions);
