// console.log를 터미널에서 출력하기
// node ex01.js 로 실행
console.log('hello world');

// 변수 선언과 할당
var x = 1; // 한 줄씩 실행을 하고 이 라인에서 x가 숫자형 타입이 된다.
x = 'hello'; // 다른 타입으로 재할당 가능 (스크립트 언어의 특징)

// 과거에는 var만 사용했으나 문제가 많아서 ES2015(ES6)부터 let(변수), const(상수) 제공됨
console.log(`var x = ${x}`);
var x = 100; // 같은 이름으로 변수를 두 번 선언한 것처럼 보이지만, 실제로는 한 번만 선언된 것이고 재할당된 것
// *변수 호이스팅* 알아보세요.

var x;
console.log(`var x = ${x}`); // 100이 출력됨

let y = 1;
// let y = 'hello'; // error (let은 같은 이름으로 두 번 선언할 수 없다.)
y = 'hello'; // let은 재할당 가능
// let으로 선언된 변수는 선언한 블록(scope) 안에서만 사용 가능. var는 전역으로 사용 가능함

console.log(`let y = ${y}`);

const pi = 3.14;
// pi = "파이"; // 코드 실행 시 error (const는 재할당할 수 없다.)

console.log(`const pi = ${pi}`);
// const로 배열을 선언하면 배열 참조값이 상수임. 배열의 element들이 상수인 것이 아니기 때문에 배열 추가, 삭제 등 배열 변경은 가능함

// 문자열 템플릿
let myName = '성지현';
let age = 30;
let hello = '안녕하세요';

console.log(hello + '! 저는 ' + myName + '입니다. 저는 ' + age + '살 입니다.'); // 옛날 버전
console.log(`${hello}! 저는 ${myName}입니다. 저는 ${age}살 입니다.`); // 문자열 템플릿 사용

// 연산자
// 기본적인 건 다들 아시니까 pass,,,
// 비교 연산자 ==, === 의 차이점만 알려드릴게요.
let a = 1; // 숫자 타입 1
let b = '1'; // 문자 타입 1

console.log(`a == b = ${a == b}`); // true -> js에서 자동으로 숫자를 문자로 바꿔서 비교함
console.log(`a === b = ${a === b}`); // false -> 값과 타입이 모두 같은지 비교
