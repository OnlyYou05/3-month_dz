//Регулярные выражения
// тут создали шаблон
let patternPhone = /^\+996\s\d{3}\s\d{2}-\d\d-\d{2}/;
let patternPhonRu = /^\+7/
let patternPhonKG = /^\+996/
//наш номер должен начинатся с +996 пробел 3цифра подряд и дальше
//получаем инпут из ДОМ элемента
const phoneInput = document.querySelector('#phone');

const img = document.getElementById('img_flag')
const button = document.querySelector('button');

button.onclick = () => {
	if (patternPhone.test(phoneInput)) {
		console.log('⇚ KG номер ');
	} else {
		console.log('⇚ другой номер');
	}
};
//событие для инпута при изминение нашего инпута
phoneInput.addEventListener('input', e => {
	if (patternPhonRu.test(e.target.value)) {
		img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Flag_of_Russia_%28Kremlin.ru%29.svg')
	} else if (patternPhonKG.test(e.target.value)){
		img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/2560px-Flag_of_Kyrgyzstan.svg.png')
	} else {
		img.removeAttribute('src')
	}
});

let i = 0
function recursion(arr) {
	if (i !== arr.length){
		console.log(arr[i++])
		recursion(arr)
	}
}
recursion([1,2,3])



let arr = [4,5,6]
let arrFull = []

function findMass (arr) {
	let minEl = arr[0]
	for (let i = 1; i < minEl; i++) {
		arrFull.push(i)
	}
	for (let i = minEl; i <= 10 ; i++) {
		arrFull.push(i)
	}
	console.log(arrFull)
}
findMass(arr)

let arr1 = [1,2,3,4,5]
let lastEl = arr1[arr1.length - 1]
console.log(lastEl)


function countChar (text, symbol){
	console.log(`символ ${symbol} присуствует`,text.split(symbol).length -1)
}
countChar('kartt', 't')



