// 조건문
let age = 16;

if (age < 18) {
  console.log('미성년자입니다.');
} else {
  console.log('성인입니다.');
}
// if, else if, else
let x = 10;
if (x > 0) {
  console.log('양수');
} else if (x < 0) {
  console.log('음수');
} else {
  console.log('0');
}

if (x > 0) {
  console.log('양수');
} else {
  if (x < 0) {
    console.log('음수');
  } else {
    console.log('0');
  }
}

// 삼항연산자
// (조건식) ? (조건이 true일 경우 선택할 값) : (조건이 false일 경우 선택할 값)
let ageCategory = age < 18 ? '미성년자입니다.' : '성인입니다.';
console.log(`ageCategory = age < 18 ? '미성년자입니다.' : '성인입니다.' = ${ageCategory}`);

let today = new Date();
console.log(`today = ${today}`);
console.log(`today.getDate() = ${today.getDate()}`); // 현지 시간 기준 일 반환
console.log(`today.getDay() = ${today.getDay()}`); // 현지 시간 기준 요일 반환

// switch-case
// break를 만날 때까지 실행
// case, default는 실행 문장이 아닌 labeling 용도
switch (today.getDay()) {
  case 0:
    console.log('일요일');
    break;
  case 1:
    console.log('월요일');
    break;
  case 2:
    console.log('화요일');
    break;
  case 3:
    console.log('수요일');
    break;
  case 4:
    console.log('목요일');
    break;
  case 5:
    console.log('금요일');
    break;
  default:
    console.log('토요일');
    break;
}

let num = '1'; // 문자열
// switch-case는 비교할 때 === (값 & 타입 비교)을 사용한다.
switch (num) {
  case 0:
    console.log('num = 0');
    break;
  case 1:
    console.log(`num = 1`);
    break;
  case '1':
    console.log(`num = '1'`);
    break;
  default:
    console.log(`num = '?'`);
    break;
}

// 반복문
// for, for in, for of
const array = [10, 20, 30];
for (let index = 0; index < array.length; index++) {
  //   const element = array[index];
  //   console.log(element);
  console.log(`array[${index}] = ${array[index]}`);
}

// for문으로 무한 루프 돌리기
// for (;;) {
//   console.log('Hello!');
// }

// for-in
// 배열의 인덱스를 순회(Iteration)
for (const i in array) {
  console.log(`index = ${i}, array[${i}] = ${array[i]}`);
}

// for-of
// 배열의 원소를 순회
for (const element of array) {
  console.log(`element = ${element}`);
}

// while
let number = 1;
while (number < 6) {
  console.log(`number = ${number++}`);
}
console.log(number);

// do-while
// 무조건 do 안의 문장을 1번 실행 후 while 조건 검사
number = 1;
do {
  console.log(`do! number = ${number++}`);
} while (number > 6);

// 반복문에서 break와 continue
// break는 break가 포함된 가장 가까운 반복문을 종료
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(`if i === 3 then break; => i = ${i}`);
}

// continue는 continue 이후 코드를 무시하고 다음 iteration을 계속 함
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(`if i === 3 then continue; => i = ${i}`);
}
