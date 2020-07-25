// # var 키워드의 비동기 함수 문제
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000 * i);
}
// 1초마다 3을 3번 출력

for (var i = 0; i < 3; i++) {
  ((i) => {
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
  })(i);
}
// 함수로 한 번 감싸고, 사용할 변수를 전달해서 사용
// 1초마다 0,1,2를 차례로 출력


// ES6의 let으로 해결
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000 * i);
}
// 1초마다 0, 1, 2를 차례로 출력
// ES6를 ES5로 변환해주는 바벨 등의 모듈은 let키워드를 단순히 var키워드로 치환해준다.
// 따라서 이처럼 setInterval(), setTimeout() 함수 등의 비동기 함수를 사용했을 때,
// 문제가 발생할 수 있으므로 기억할 것!
