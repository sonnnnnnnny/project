const numberpattern = /^[0-9/*--+^xy]*$/;
let equation = 1;
let equation = document.querySelector('#display'+ equation);
let currentequation = equation.dataset.number;

document.addEventListener('keydown',(e) => {
	console.log('keypress :'+ e.key);
let keypress = e.key;
if (numberpattern.length == 1 && numberpattern.test(e.key)){
	let isnumber = numberpattern.test(e.key);
    console.log(isnumber);
    updatedisplay(keypress);

}
});
const updatedisplay = (number) =>  {
	console.log('display =' + equation
	/ncurrentequation
	);

};
let equation = ('equation ='+ equation); 
const updatingdisplay = () => {

}
