// 10:35 ~
// 배열 filter, map, foreach, reduce ...
// mutable -> 원본 배열이 변경됨
// immutable -> 원본 배열 유지, 새로운 배열 return
// https://dev.to/lassiecoder/javascript-array-mutability-immutability-342a

// mutable
const arr1 = [];
const newArrLength = arr1.push(100); // 배열 끝에 새 요소를 추가하고 배열의 새 길이를 반환합니다.
console.log(`arr1 : ${arr1}`);
console.log(`newArrLength : ${newArrLength}`);

// immutable
// 함수에서 배열을 argument로 전달 받았을 때. 배열을 변경하면 안 될 경우 사용
const arr2 = [];
const newArr = arr2.concat(101).concat(102); // 두 개 이상의 배열을 결합합니다. 이 메서드는 기존 배열을 수정하지 않고 새 배열을 반환합니다.
console.log(arr2);
console.log(newArr);

// pop (mutable)
const arr3 = [1, 2, 3, 4, 5];
console.log(`pop : ${arr3.pop()}`); // 배열에서 마지막 요소를 제거하고 반환합니다. 배열이 비어 있으면, undefined 반환되고 배열은 수정되지 않습니다.
console.log(arr3);

// slice (immutable)
const arr4 = [1, 2, 3, 4, 5];
const sliced = arr4.slice(arr4.length - 1);
console.log(arr4);
console.log(`sliced : ${sliced}`); // 배열의 한 부분의 복사본을 반환합니다. 시작과 끝 모두 음수 인덱스를 사용하여 배열의 끝에서 오프셋을 나타낼 수 있습니다.

// ES6에서 새롭게 추가된 기능들
// foreach, filter, map, reduce
// callback 함수를 이용. argument로 함수를 넘겨줌 (reduce는 다름)
/**
 * forEach, filter, map의 callback 함수 argument들 :
 * - value : 배열에서 반복하면 순서대로 꺼낸느 값
 * - index : 배열의 인덱스
 * - array : 벼앨
 * callback을 작성할 때는 필요한 argument듦나 선언해도 됨
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#parameters
 */
// forEach : 순서대로 반복하면서 수행할 작업
/**
 * arrow function :
 * (param, ...) => {statement; ...}
 * (param, ...) => statement // 함수 바디에 실행문이 하나인 경우
 * (param, ...) => 리턴값 // 함수 바디에 실행문이 하나만 있고, 실행문이 리턴문인 경우
 */
const front = ['HTML', 'CSS', 'JavaScript', 'TypeScript'];
front.forEach((value, index) => console.log(`${index} : ${value}`));

// filter : 순서대로~면서 조건에 맞는 원소를 찾음
const filterdFront = front.filter((value) => value.length >= 5); // filter가 원소를 순회하면서 true면 새로운 배열에 넣음(concat)
console.log(filterdFront);

// map : ~면서 원소를 다른 원소로 변환함
const mapedFront = front.map((value) => value.toLowerCase()); // 배열의 각 요소에 대해 정의된 콜백 함수를 호출하고 결과가 포함된 배열을 반환합니다.
console.log(mapedFront);

// 세 개 같이 쓰기~
front
  .filter((value) => value.length >= 5)
  .map((value) => value.toUpperCase())
  .forEach((value) => console.log(value));

/**
 * reduce(callback, initialValue) : 배열의 모든 원소를 순회해서 값 1개를 리턴
 * callback 함수의 argument들
 * - previousValue : callback 함수에서 이전에 리턴된 값
 * - currentValue : 반복하고 있는 현재 배열의 값
 * - currentIndex : 반복~ 현재 배열의 인덱스
 * - initialValue : previousValue의 초기값으로 사용하기 위함
 */
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, current) => (total += current), 0); // 0이 초기값. 근데 안 넣어도 되는데? -> 초기값이 없을 경우 인덱스 O에 있는 배열 요소가 초기값으로 사용됩니다. 값으로 사용되며 다음 요소(인덱스 0 대신 인덱스 1)부터 반복이 시작됩니다. 아하~
// 참고 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
console.log(`sum : ${sum}`);

// 기존 방식
const sumTotal = numbers.reduce(function (total, current) {
  total += current;
  return total;
}, 0);
console.log(`sumTotal : ${sumTotal}`);

const fact = numbers.reduce((total, current) => (total *= current));
console.log(fact);

// 쿼리스트링을 분석해서 객체로 변환하는 함수 만들기
const queryString = 'apple=10&banana=20&order=ok';

function parse(query) {
  let result = {};
  let temp = query.split('&');

  for (el of temp) {
    // const part = el.split('=');
    // const key = part[0];
    // const value = part[1];
    const [key, value] = el.split('=');
    result[key] = value;
  }

  return result;
}

console.log(parse(queryString));

// forEach로
const parse2 = (query) => {
  let result = {};

  query.split('&').forEach((el) => {
    const [key, value] = el.split('=');
    result[key] = value;
  });

  return result;
};

console.log(parse2(queryString));

// map
const parse3 = (query) => {
  return query.split('&').map((value) => {
    const [k, v] = value.split('=');
    return { k, v };
  });
};

console.log(parse3(queryString));

// map & reduce
const parse4 = (query) => {
  return query
    .split('&')
    .map((value) => {
      const [k, v] = value.split('=');
      return { k, v };
    })
    .reduce((result, obj) => {
      result[obj.k] = obj.v;
      return result;
    }, {});
};

console.log(parse4(queryString));
