/**
 * 함수
 *
 * js에서 함수를 정의하고 호출하는 방법
 */

/**
 * 함수 정의
 *
 * function name(params) { }
 */
function sum(x, y) {
  console.log(`x = ${x}, y = ${y}`);
  return x + y;
}

// 함수 호출
let sumResult = sum(1, 2);
console.log(`sum(1, 2) = ${sumResult}`);

// js는 argument "타입을 검사하지 않음"
sumResult = sum('abc', 1);
console.log(`sum('abc', 1) = ${sumResult}`);

// js는 argument "개수를 검사하지 않음"
sumResult = sum(1); // 1과 undefiend 가 더해져서 NaN(Not-A-Number(숫자가 아님))이 됨
console.log(`sum(1) = ${sumResult}`);

sumResult = sum(1, 2, 3); // 더 많은 개수를 넘겨도 에러가 나지 않음
console.log(`sum(1, 2, 3) = ${sumResult}`);

/**
 * ES6부터 argument가 없을 때 Default값을 설정할 수 있다.
 *
 * Default parameters 기본 매개변수
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
 */
function sumDefault(x = 0, y = 0) {
  return x + y;
}

console.log(`sumDefault(1, 2) = ${sumDefault(1, 2)}`); // 기본값으로 초기화된 변수를 argument 값으로 재할당함
console.log(`sumDefault() = ${sumDefault()}`);

const myFunc = sumDefault; // 변수에 function을 할당할 수 있음. myFunc는 함수를 호출을 할 수 있는 객체가 됨
console.log(myFunc); // 실행 결과 : [Function: sumDefault]
console.log(myFunc(10, 20)); // 실행 결과 : 0 -> 함수가 실행됨

// 함수 안에서 함수를 얼마든지 생성할 수 있음
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_scope
// js의 함수는 객체기 때문에 변수에 저장하거나 return 값이 될 수 있고, argument 로 전달하는 것도 가능
function plusN(n) {
  let f = function (x) {
    return x + n;
  };

  return f;
}

let plusOne = plusN(1);
console.log(`plusOne = ${plusOne}`); // 실행 결과 : [Function: f]
console.log(`plusOne(100) = ${plusOne(100)}`); // 실행 결과 : plusOne = 101

let plusTen = plusN(10);
console.log(`plusTen(100) = ${plusTen(100)}`);

/**
 * 화살표 함수 (ES6)
 * 파라미터와 리턴 값으로 구현할 수 있는 함수를 간단하게 표현함
 *
 * 참고 링크 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */
const multiply = (x, y) => x * y; // 기존 방식 : const multiply = function (x, y) { return x * y; }

// parameter 없이 return 값만 있는 함수
const returnHello = () => 'Hello';
console.log(`returnHello() = ${returnHello()}`);

/**
 * 화살표 함수로 배열 필터링, 매핑하기
 */
const myFilter = (arr, func) => {
  const result = [];
  for (const element of arr) {
    if (func(element)) {
      // func는 boolean을 return 하는 함수여야 함. return ture일 경우 result에 push
      result.push(element);
    }
  }
  return result;
};

const numbers = [1, -2, -3, 4, 5 - 6];

// 익명 함수를 이용하기
let filteredNumber = myFilter(numbers, function (x) {
  return x > 0;
});
console.log(`filteredNumber with annonymus function = ${filteredNumber}`);

// 화살표 함수를 이용하기
filteredNumber = myFilter(numbers, (x) => x < 0);
console.log(`myFilter(numbers, (x) => x < 0) = ${filteredNumber}`);
