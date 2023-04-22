/**
 * 상속
 */

class Component {
  // 생성자
  constructor(props) {
    this.props = props;
  }
}

const comp1 = new Component();
console.log(`comp1.props = ${comp1.props}`); // comp1.props = undefined

const comp2 = new Component({ name: '성이름', age: 77 });
console.log(
  `comp2.props = name : ${comp2.props.name}, age : ${comp2.props.age}`,
); // comp2.props = name : 성이름, age : 77

// Component(상위클래스, 부모클래스)를 상속받는 클래스 생성 (하위클래스, 자식클래스)
class MyComponent extends Component {
  constructor(props, canFly) {
    super(props); // 상위클래스의 생성자를 명시적으로 호출하는 방법
    this.canFly = canFly;
  }

  render() {
    return `Hello, My Name is ${this.props.name}. Im ${
      this.props.age
    } years old. ${this.canFly ? 'I believe I can Fly~~' : 'I cant fly...'}`;
  }
}

const comp3 = new MyComponent({ name: '비둘기', age: 3 }, true);
// 상속받은 props 사용 가능
console.log(comp3.render());
// -> Hello, My Name is 비둘기. Im 3 years old. I believe I can Fly~~
