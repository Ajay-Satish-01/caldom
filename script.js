let container = document.createElement('div'); //container
container.setAttribute('class', 'container');
container.classList.add('my-5');
//for input field
let row0 = document.createElement('div');
row0.setAttribute('class', 'row');
let col0 = document.createElement('div');
col0.setAttribute('class', 'col-12');
let inputdiv = document.createElement('div');
inputdiv.setAttribute('class', 'input-group');
inputdiv.classList.add('mb-5');
let input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('class', 'form-control');
inputdiv.append(input);
col0.append(inputdiv);
row0.append(col0);
container.append(row0);

// //end of input field
// //row 1
let row1 = document.createElement('div');
row1.setAttribute('class', 'row');
// let row2 = document.createElement('div');
// row2.setAttribute('class', 'row');
// let row3 = document.createElement('div');
// row3.setAttribute('class', 'row');
// let row4 = document.createElement('div');
// row4.setAttribute('class', 'row');
// //cols for row 1
let col9 = document.createElement('div');
let col8 = document.createElement('div');
let col7 = document.createElement('div');
let col6 = document.createElement('div');
// let colno9 = document.createElement('div');
// let colno9 = document.createElement('div');
// let colno8 = document.createElement('div');
// let colno7 = document.createElement('div');
// let colno6 = document.createElement('div');
// let colno5 = document.createElement('div');
// let colno4 = document.createElement('div');
// let colno3 = document.createElement('div');
// let colno2 = document.createElement('div');
// let colno1 = document.createElement('div');
// // let colno9 = document.createElement('div');
// // let colno9 = document.createElement('div');
// //number buttons
// let no9 = document.createElement('button');
// no9.setAttribute('class', 'btn btn-info');
// no9.classList.add('w-25', 'fs-2');
// no9.innerText = '9';
// let no8 = document.createElement('button');
// no8.setAttribute('class', 'btn btn-info');
// no8.classList.add('w-25', 'fs-2');
// no8.innerText = '8';
// let no7 = document.createElement('button');
// no7.setAttribute('class', 'btn btn-info');
// no7.classList.add('w-25', 'fs-2');
// no7.innerText = '7';
// let no6 = document.createElement('button');
// no6.setAttribute('class', 'btn btn-info');
// no6.classList.add('w-25', 'fs-2');
// no6.innerText='6'

// let no5 = document.createElement('button');
// no5.setAttribute('class', 'btn btn-info');
// no5.classList.add('w-25', 'fs-2');
// no5.innerText='5'
// let no4 = document.createElement('button');
// no4.setAttribute('class', 'btn btn-info');
// no4.classList.add('w-25', 'fs-2');
// no4.innerText='4'
// let no3 = document.createElement('button');
// no3.setAttribute('class', 'btn btn-info');
// no3.classList.add('w-25', 'fs-2');
// no3.innerText='3'

// let no2 = document.createElement('button');
// no2.setAttribute('class', 'btn btn-info');
// no2.classList.add('w-25', 'fs-2');
// no2.innerText='2'
// let no1 = document.createElement('button');
// no1.setAttribute('class', 'btn btn-info');
// no1.classList.add('w-25', 'fs-2');
// no1.innerText='1'

// //button for operations
let add = document.createElement('button');
add.setAttribute('class', 'btn btn-info');
add.classList.add('w-25', 'fs-2');
add.innerText = '+';
let sub = document.createElement('button');
sub.setAttribute('class', 'btn btn-info');
sub.classList.add('w-25', 'fs-2');
sub.innerText = '-';
let mul = document.createElement('button');
mul.setAttribute('class', 'btn btn-info');
mul.classList.add('w-25', 'fs-2');
mul.innerText = '*';
let divison = document.createElement('button');
divison.setAttribute('class', 'btn btn-info');
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
// colno9.setAttribute('class', 'col-4');
// colno9.classList.add('text-center');
// colno9.append(no9);
// colno8.setAttribute('class', 'col-4');
// colno8.classList.add('text-center');
// colno8.append(no8);
// colno7.setAttribute('class', 'col-4');
// colno7.classList.add('text-center');
// colno7.append(no7);

// row2.append(colno9, colno8, colno7);
// container.append(row2);

// //end of row2
// //row 3
// colno6.setAttribute('class', 'col-3');
// colno6.classList.add('text-center');
// colno6.append(no6);
// colno5.setAttribute('class', 'col-3');
// colno5.classList.add('text-center');
// colno5.append(no5);
// colno4.setAttribute('class', 'col-3');
// colno4.classList.add('text-center');
// colno4.append(no4);

// row3.append(colno6, colno5, colno4);
// container.append(row3);
// //end of row3
// //row 4
// colno3.setAttribute('class', 'col-3');
// colno3.classList.add('text-center');
// colno3.append(no3);
// colno2.setAttribute('class', 'col-3');
// colno2.classList.add('text-center');
// colno2.append(no2);
// colno1.setAttribute('class', 'col-3');
// colno1.classList.add('text-center');
// colno1.append(no1);

// row4.append(colno3, colno2, colno1);
// container.append(row4);
// //end of row4
document.body.append(container);
