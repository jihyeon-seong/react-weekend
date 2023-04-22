// 2023-04-08
// ESNext / ES2015 이후 기능들

// spread operator (전개 연산자)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
const arr1 = [1, 2];
const arr2 = [3, 4, 5];

const combinedArray = [...arr1, ...arr2];
console.log(combinedArray);

// 구조 분해 할당
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const [one, two, ...others] = combinedArray;
console.log(`one : ${one}, two: ${two}, others : ${others}`);

// function에서 구조 분해 할당 이용하기
function f1(...args) {
  const [first, ...others] = args;
  return `first : ${first}, others : ${others}`;
}

console.log(f1(1, 2, 3));

// 객체에서 사용하는 전개 연산자
const obj1 = {
  hana: 1,
  dul: 2,
  zero: 0,
};

const obj2 = {
  zero: '0.0', // 같은 키는 나중 것으로 덮어써짐
  three: 3,
  four: 4,
};

// 객체에서는 중복된 키 값은 마지막에 사용된 값으로 덮어씀
const combinedObject = { ...obj1, ...obj2 };
const combinedObject2 = { ...obj2, ...obj1 };

console.log(combinedObject);
console.log(combinedObject2);

// 객체의 구조 분해 할당
const { hana, dul, ...otherObj } = combinedObject;
console.log(`hana: ${hana}, dul: ${dul}, otherObj: ${otherObj}`);

const employee = {
  empId: 100,
  empName: '성지현',
  salary: 777,
};

function desplayEmployee(emp) {
  console.log(
    `기존 방식 -> 사번 :${emp.empId}, 이름 : ${emp.empName}, 급여 : ${emp.salary}`,
  );
}
desplayEmployee(employee);

// 구조 분해 할당을 이용한 함수 arg 선언
function desplayEmployee2({ empId, empName, salary }) {
  console.log(`id : ${empId}, name : ${empName}, salary: ${salary}`);
}
desplayEmployee2(employee);
