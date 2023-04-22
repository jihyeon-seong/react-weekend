# 2023-04-22 토요일 4주차 수업

명령어 글자 긴 거는 — 대쉬 두 개

한 글자는 - 하나

npx는 npm을 이용한 명령어

scoop update → scoop 을 업데이트

scoop update \* → scoop 으로 설치한 모든 어플리케이션 업데이트

npx create-react-app lab03 → 패키지 다운로드 받고 명령어를 실행시킴. lab03에 프로젝트를 생성

node_modules : react 앱을 실행시키기 위해서 필요한 노드 라이브러리

public : 배포할 때

src : 소스 코드 작성할 곳. 실행할 때 여기 코드가 실행

package.json 이 있는 위치에서 npm start를 해야함

리액트 프로젝트의 구조

package.json : 리액트 프로젝트에서 필요한 라이브러리들을 정리. 명령어 정리돼 있는 파일

dependencies : 리액트 프로젝트에서 필요한 라이브러리

scripts : npm start → react-script start

종료할 때는 터미널에서 ctrl + c

github에 push할 때 node_modules는 제외함

npm i (install) 로 package.json을 보고 node_modules를 다운로드

index.html 에서 실행되는 js : index.js

ReactDOM.createRoot : react에서 html dom element 를 만드는 메소드

render 메소드

jsx : javascript xml <App />

리액트에서만 사용하는 문법

React.StrictMode : [https://react.dev/reference/react/StrictMode](https://react.dev/reference/react/StrictMode)

<StrictMode>를 사용하면 개발 중에 컴포넌트에서 흔히 발생하는 버그를 조기에 발견할 수 있습니다.

<App/>은 컴포넌트. App.js

함수형 컴포넌트

컴포넌트는 함수형 컴포넌트, 클래스형 컴포넌트들이 있음

컴포넌트들을 만들어서 재활용

XML은 엄격하기 때문에 닫는 태그 제대로 써줘야 함

JSX는 표현식이 들어감

---

JSX class 를 className 으로 쓰는 이유는 javascript 에 class 키워드가 있기 때문에

대부분 html랑 같지만 js 키워드랑 겹치는 거는 이름 다름

리액트에서 <br>은 꼭 닫는 태그 <br/>

최상위 묶는 태그가 있어야 한다.

리액트 컴포넌트의 특징 : 2개 이상의 요소가 있을 경우 반드시 전체를 감싸는 root element가 있어야 한다.

가상 dom을 사용하기 때문에 화면을 렌더링 하는 속도가 빠름

하나의 컴포넌트는 하나의 트리구조를 갖고 있어햐 하기 때문에 하나의 element로 묶어야 한다.

root로부터 시작해서 child 가 생기는 트리구조

div가 너무 많이 들어가니까 리액트에서 프레그먼트를 도입함

<Fragment>

javascript expression

---

확장자 js, jsx 일수도

컴포넌트를 만들 땐 가장 간단한 건 함수를 만들기~

함수 안에서 뭘 만들던 상관 없고 return 을 꼭 해야함. 화면에 렌더링할 jsx을 return

css는 inline 보다 css 파일 만들어서 하기

js와 css 파일 이름 맞춰주는 경우가 있지만 꼭 맞출 필요는 없다

app.js 하위에 자식 컴포넌트들을 생성

클래스형 컴포넌트를 만들 땐

메소드의 이름은 반드시~!! render라고 해야함

함수형 컴포넌트를 만들 땐 그냥 return ~

---

컴포넌트 파일과 컴포넌트 함수는 대문자로 시작

기능 별로 컴포넌트를 만들어서 관리

npm i prop-types

프로젝트 하위에서 npm install 해야함

다음 주 : state, event handling
