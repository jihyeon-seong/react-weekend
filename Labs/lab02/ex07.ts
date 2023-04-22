// 타입스크립트
// ts는 변수를 선언할 때 타입 주석(type annotation)을 사용

/**
 * ts 실행하기
 *
 * 1. tsc ex07.ts 하면 js 파일이 생성 -> 생성된 js 파일을 node로 실행
 * 2. ts-node 로 실행 -> 변환과 실행을 동시에 함 (js 파일 생성 x)
 */

let x: number = 1;
console.log(`x : ${x}`);
// x = '1'; // error 다른 타입 값 재할당 불가능

let y = 'hello'; // 타입 추론. 할당하는 값을 보고 변수의 타입을 결정
console.log(y);
// y = 1; // error

// 함수 파라미터의 타입은 추론X. 생략할 수 없다. return 타입은 생략 가능
const plusOne = (x: number) => x + 1;
console.log(plusOne(10));

// object 타입 추론 O
const user = {
  id: 1,
  name: 'guest',
};

// const showUser = (user: { id: any; name: any }) => {
//   console.log(`id: ${user.id}, name: ${user.name}`);
// };

// 객체가 갖는 프로퍼티들의 타입을 선언 - 객체의 모양 선언
interface User {
  id: number;
  name: string;
}

function showUser(user: User) {
  console.log(`id: ${user.id}, name: ${user.name}`);
}
showUser(user);

// Union(합집합) 기능을 사용해서 간단한 타입들을 조합한 새로운 타입을 선언 가능
type LockState = 'locked' | 'unlocked';
let isLocked: LockState = 'locked'; // locked, unlocked 중 하나만 사용 가능. java의 enum과 같은
console.log(isLocked);

// Union(합집합) 기능을 함수 파라미터 타입 주석에서도 활용
function getLength(x: string | string[]) {
  return x.length;
}
console.log(getLength('hello'));
console.log(getLength(['hello', 'world']));

/**
 * 변수의 타입 알아내기
 * typeof x === 'string'
 * typeof x === 'number'
 * typeof x === 'undefined'
 * typeof x === 'function'
 * 배열인 경우에는 Array.isArray(x) 함수를 이용
 */

function wrap(x: string | string[]) {
  if (typeof x === 'string') {
    return [x];
  }
  return x;
}

console.log(wrap('hello'));
console.log(wrap(['hello', 'world']));

export {};
