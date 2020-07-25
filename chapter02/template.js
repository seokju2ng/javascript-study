// ECMAScript 6 : ES6 부터 표현식 사용 가능 (``)
console.log('표현식 273 + 52의 값은 ' + (273 + 52) + '입니다...!');
console.log("표현식 273 + 52의 값은 " + (273 + 52) + "입니다...!");
console.log(`표현식 273 + 52의 값은 ${273 + 52}입니다...!`);


var variable = 273;

console.log(`변수 variable의 값은 ${variable}입니다.`);


{
  // scope A
  var variable = 273;
}
{
  // scope B
  console.log("scope B > ", variable);
}

// global scope
console.log("global scope > ", variable);
