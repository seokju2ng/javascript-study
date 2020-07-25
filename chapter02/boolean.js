console.log(Boolean(0));        //false
console.log(Boolean(NaN));      //false
console.log(Boolean(''));       //false
console.log(Boolean(null));     //false
console.log(Boolean(undefined));//false

console.log(Boolean(-1));   //true
console.log(Boolean('1'));  //true
console.log(Boolean({}));   //true
console.log(Boolean([]));   //true

console.log(!!0);     //false
console.log(!!NaN);   //false
console.log(!!null);  //false
console.log(!!'');    //false

// 비교연산자 == (자동형변환 일어남)
console.log('' == false); // true
console.log('' == 0);     // true
console.log(0 == false);  // true
console.log('273' == 273);// true

// 일치연산자 ===  (타입과 값이 일치해아함)
console.log('' === false); // false
console.log('' === 0);     // false
console.log(0 === false);  // false
console.log('273' === 273);// false
