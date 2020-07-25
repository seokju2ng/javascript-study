// plus
console.log('52 + 273');  // 52 + 273
console.log(52 + 273);    // 325
console.log('52' + 273);  // 52273
console.log(52 + '273');  // 52273
console.log('52' + '273');// 52273

// multi
console.log('52 * 273');  // 52 * 273
console.log(52 * 273);    // 14196
console.log('52' * 273);  // 14196
console.log(52 * '273');  // 14196
console.log('52' * '273');// 14196

// Number() String()
console.log(Number('273'));
console.log(typeof(Number('273')));
console.log(String(273));
console.log(typeof(String(273)));

// Number(), NaN : 자바스크립트에서 숫자로 표현 불가한 경우
// var input = prompt('숫자를 입력해주세요', '숫자');
// var numberInput = Number(input);
// console.log(typeof(numberInput) + ':' + numberInput); // 숫자로 변환이 안되면 NaN

// 복소수 NaN
var number = Math.sqrt(-3);
console.log(number);
