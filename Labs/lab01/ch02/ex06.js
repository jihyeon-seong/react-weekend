/**
 * 객체(Object), 클래스(Class)
 */

// 객체
const x = 1;
const y = 2;

// ES6 이전 객체 선언 방법
const obj = {
  x: x,
  y: y,
  // method : 객체가 가지고 있는 함수
  log: function () {
    console.log(`x : ${x}, y : ${y}`);
  },
};

console.log(obj);
obj.log();

// ES6 이후
const obj2 = {
  x,
  y,
  log() {
    console.log(`x : ${x}, y : ${y}`);
  },
};

console.log(obj2);
obj2.log();

// class 키워드 도입 전에 생성자 함수를 이용함
function Book(title, author, publisher, price) {
  // properties
  this.title = title;
  this.author = author;
  this.publisher = publisher;
  this.price = price;

  // method
  this.discount = function (ratio = 0.1) {
    return this.price * (1 - ratio);
  };
}

const book1 = new Book('title1', 'author1', 'pub1', 10000);
console.log(book1);
console.log(book1.discount());

// class
// 클래스에서 변수를 선언할 때 var, let, const 등의 키워드를 사용하지 않음
// 메서드를 선언할 대 function 키워드를 사용하지 않음
class Book1 {
  // 생성자 함수
  // class 안의 생성자는 property만 가짐
  // properties
  // 인스턴스 변수 : 객체가 생성된 후 사용할 수 있는 속성(변수)들
  constructor(title, author, publisher, price) {
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.price = price;
  }

  // method는 별도로 생성
  discount(ratio = 0.1) {
    return this.price * (1 - ratio);
  }
}

// class를 사용했을 때 클래스 이름으로 호출한다
const book2 = new Book1('title2', 'author2', 'pub2', 22_000);
console.log(book2);
console.log(book2.discount(0.5));

// static 알아보세용

// 상속, override
class Shape {
  constructor(x, y) {
    this.move(x, y);
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }

  area() {
    return 0;
  }
}

// Shape 부모(상위) 타입, Circle 자식(하위) 타입
class Circle extends Shape {
  constructor(x, y, radius) {
    super(x, y); // 부모 클래스의 생성자 호출
    this.radius = radius;
  }

  // override
  area() {
    return 3.14 * this.radius * this.radius;
  }
}

const circle = new Circle(0, 0, 10);
console.log(circle);
circle.move(1, 2); // 상속받은 메서드 사용
console.log(circle);
console.log(circle.area()); // 재정의한 메서드 사용
