# 수업 1주 차 (2023년 4월 1일)

## 요약

- 학습 환경 구성
  - Windows Package Manager인 **Scoop**을 이용해 **Node.js**와 **Git**을 설치
  - **Visual Studio Code** 설치
  - **Prettier** 확장 설치
- Javascript
  - 변수와 상수 (var, let, const)
  - 제어문
    - 조건문 (if...else, switch)
    - 반복문 (for, for...in, for...of, while, do..while)
  - function (함수 표현식, 익명 함수, 화살표 함수 표현식)

## [React](https://ko.reactjs.org/)

> Javascript로 사용자 인터페이스(view)를 만드는 라이브러리

## [Node.js](https://nodejs.org/ko)

> Javascript 실행 환경

## [Package Manager](https://ko.wikipedia.org/wiki/%ED%8C%A8%ED%82%A4%EC%A7%80_%EA%B4%80%EB%A6%AC%EC%9E%90)

> 패키지 관리자(package manager, 패키지 매니저), 패키지 관리 시스템(package management system)은 컴퓨터의 운영 체제를 위해 일정한 방식으로 컴퓨터 프로그램의 설치, 업그레이드, 구성, 제거 과정을 자동화하는 소프트웨어 도구들의 모임이다.

- Mac의 대표적인 Package Manager : [Homebrew](https://brew.sh/index_ko)

- Windows의 Package Manager
  - [Chocolatey](https://chocolatey.org/)
  - [Scoop](https://scoop.sh/)

---

_학원 컴퓨터는 Windows라 Scoop을 사용해서 node 설치 진행_

> Scoop의 [github README.md](https://github.com/ScoopInstaller/Install#readme)를 따라 설치한다.

학원 컴퓨터 backup(E 드라이브)에 '**react-weekend**'로 폴더를 생성해서 수업 관련 프로그램, 파일은 모두 이 안에 생성한다.

## Scoop 설치하기

1.  PowerShell을 실행한다.

2.  Get-ExecutionPolicy : 파워쉘 실행 정책(권한) 보기 명령어
    - 명령어 실행 결과 : Restricted (권한이 제한된 상태)

```powershell
Get-ExecutionPolicy
```

3.  파워쉘의 권한을 변경한다. (명령어 입력 후 선택 옵션에서 A(모두 예) 입력)

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

4.  `Get-ExecutionPolicy` 명령어를 다시 실행하여 권한이 **RemoteSigned**로 변경된 것을 확인한다.
5.  Scoop을 기본 경로에 설치하지 않고 '**react-weekend**' 폴더로 경로를 설정하기 위해 설치 스크립트를 다운로드해 실행한다.

    1. Scoop 설치 스크립트 다운로드

    ```powershell
    irm get.scoop.sh -outfile 'install.ps1'
    ```

    - 참고 : [ps1 은 파워쉘에서 사용하는 스크립트 파일이다.](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_scripts?view=powershell-7.3)

    2.  인스톨 스크립트 도움말 파일(To see all configurable parameters of the installer)을 다운로드

    ```powershell
    .\install.ps1 -?
    ```

    3.  install.ps1 을 실행해 Scoop을 설치한다.

    ```powershell
    .\install.ps1 -ScoopDir 'E:\react-weekend\Applications\Scoop' -ScoopGlobalDir 'E:\react-weekend\GlobalScoopApps' -NoProxy -RunAsAdmin
    ```

    - -ScoopDir : Scoop의 디렉터리 경로 설정 옵션 (install scoop to a custom directory)
    - -ScoopGlobalDir : Scoop의 글로벌 디렉터리 설정 옵션 (configure scoop to install global programs to a custom directory)
    - -NoProxy : 설치하는 동안 시스템 프록시를 우회 (bypass system proxy while installation)
    - -RunAsAdmin : Windows 관리자 계정일 경우 해당 옵션을 추가해야 에러없이 실행됨

6.  backup(E:) > react-weekend > Applications > Scoop > apps 아래에 scoop 이 설치된 것을 확인한다.

## [Scoop 명령어](https://github.com/ScoopInstaller/Scoop/wiki/Commands)

설치된 Scoop의 버전 확인하기

```powershell
scoop --version
```

Scoop의 명령어 목록 보기

```shell
scoop help
```

install 명령어에 대한 정보 보기

```shell
scoop help install
```

설치된 앱 목록 보기

```shell
scoop list
```

> 선생님 : list 명령어를 실행하면 Source가 있는데 Scoop은 [버킷(Buckets)](https://scoop-docs.vercel.app/docs/concepts/Buckets.html#what-are-buckets)이라는 걸 씁니다. Source는 버킷을 뜻합니다. 대부분 main 버킷에서 소스를 가져와서 설치합니다.

temurin 앱 검색

```shell
scoop search temurin
```

> temurin은 openJDK 종류. 실행 결과를 보면 Source가 java로 되어 있다. java 버킷 안에 temurin이 있는 것이다. main 버킷이 아닌 소스는 해당 버킷을 추가해야 설치할 수 있다.

설치된 버킷 목록을 확인하기

```shell
scoop bucket list
```

java 버킷 추가하기

```shell
scoop bucket add java
```

위 코드를 실행 후 다시 `scoop bucket list` 명령어를 실행하면 java가 추가돼 있다.

java 버킷 삭제하기

```shell
scoop bucket rm java
```

스쿱과 스쿱에서 설치한 앱을 최신 버전으로 업데이트하기

```shell
scoop update
```

## Git 설치하기

```shell
scoop install git
```

위 명령어를 실행하면 7zip이라는 압축 프로그램을 먼저 설치 후에 Git이 설치된다.

설치된 Git 버전 확인하기

```shell
git --version
```

## Node.js 설치하기

Node.js 검색

```shell
scoop search nodejs
```

nodejs-lts ([LTS](https://ko.wikipedia.org/wiki/%EC%9E%A5%EA%B8%B0_%EC%A7%80%EC%9B%90_%EB%B2%84%EC%A0%84) : Long Term Support, 장기 지원 버전)으로 설치한다.

```shell
scoop install nodejs-lts
```

설치된 node의 버전을 확인하기

```shell
node --version
```

[npm(Node Package Manager)](https://docs.npmjs.com/about-npm) 명령어 위치 찾기

```powershell
Get-Command npm
```

- [Get-Command](https://learn.microsoft.com/ko-kr/powershell/module/microsoft.powershell.core/get-command?view=powershell-5.1) : 설치된 모든 명령어를 가져오는 [PowerShell 명령어](https://learn.microsoft.com/ko-kr/powershell/scripting/powershell-commands?view=powershell-7.3) (Linux의 which와 같은 명령어)
- 코드 실행 결과 : npm은 npm.cmd에 설치되어 있다. (Node.js 설치할 때 같이 설치됨)

npm 버전 확인

```shell
npm --version
```

## yarn 활성화하기

yarn 명령어 위치 찾기

```powershell
Get-Command yarn
```

- [Yarn](https://yarnpkg.com/getting-started) : npm과 같은 노드 패키지 매니저 중 하나이다.

- Node 16 버전부터 yarn이 포함돼 있어서 따로 설치할 필요는 없으나, 비활성화되어 있기 때문에 사용하기 위해선 활성화해야 한다.

Node [Corepack](https://nodejs.org/api/corepack.html#corepack) 활성화 하기

```shell
corepack enable
```

활성화 후 다시 `Get-Gommand yarn`을 실행해서 yarn 명령어 위치 확인하기

## npm 명령어

npm 명령어 확인하기

```shell
npm --help
```

설치된 노드 패키지 목록 보기

```shell
npm ll
```

글로벌로 설치한 노드 패키지 목록 보기

```shell
npm ll -g
```

## npm으로 [typescript](https://www.typescriptlang.org/ko/docs/)와 [ts-node](https://typestrong.org/ts-node/)(타입스크립트 실행환경) 설치하기

```shell
npm install -g typescript ts-node
```

- **global로 설치한다.**

설치된 타입스크립트의 버전 확인하기

```shell
tsc --version
```

- [tsc](https://typescript-kr.github.io/pages/compiler-options.html) : 타입스크립트 컴파일러

ts-node 버전 확인하기

```shell
ts-node --version
```

- 타입스크립트 파일을 실행시킬 때 ts-node 명령어를 사용한다.

## Visual Studio Code

### Visual Studio Code 설치하기

다운로드 페이지 : https://code.visualstudio.com/download

react-weekend > Applications 아래에 vs code를 설치한다.

### VS Code 설정 변경하기

설정 메뉴 단축키

- Windows : Ctrl + ,

- Mac : Command + ,

글꼴 변경하기

- Font Familly 맨 앞에 [D2Coding](https://github.com/naver/d2codingfont) 추가 (D2Coding 폰트 다운로드해야 됨)

## Prettier Extension 설치 및 설정

- Vs Code 확장 검색창에서 [Prettier](https://prettier.io/)(Code Formatter)를 검색해서 설치한다.

- Vs Code 설정 메뉴에서 **formatter** 검색

- **Default Formatter** 를 Prettier로 설정

- **Format On Paste**, **Format On Save** 체크하기

<img width="754" alt="Untitled" src="https://user-images.githubusercontent.com/119292125/229295974-382afe22-84d7-4e47-8371-f36726622875.png">

## 프로젝트 생성하기

1. 파일 > 폴더 열기 > react-weekend에 새 폴더 생성(Labs) > Labs 폴더 선택해서 열기

2. **메뉴에서 보기 > 터미널 선택** 또는 **ctrl + `(백틱)** 으로 터미널 열기

3. Labs > lab01 폴더 생성 > ex01.js 파일 생성

<img width="308" alt="Untitled (1)" src="https://user-images.githubusercontent.com/119292125/229296045-076f65ec-8663-4077-b627-c500514d3575.png">

ex01.js 파일 수정

```js
console.log('안녕하세요');
```

터미널에서 ex01.js를 실행하기

```shell
cd .\lab01\
node .\ex01.js
```

## Javascript

- Javascript 수업 내용은 lab01 폴더 아래의 js 파일들을 확인하세요.
  - [let, const, 문자열 템플릿, 비교 연산자 ==와 ===의 차이점](https://github.com/jihyeon-seong/react-weekend/blob/main/Labs/lab01/ex01.js)
  - [if...else, 삼항연산자, switch, for, for...in, for...of, while, do...while, 반복문에서 break와 continue](https://github.com/jihyeon-seong/react-weekend/blob/main/Labs/lab01/ex02.js)
  - [Functions](https://github.com/jihyeon-seong/react-weekend/blob/main/Labs/lab01/ex03.js)

### 더 알아볼만한 내용

- 화살표 함수와 클로저
  - [JavaScript Arrow Functions and Closures](https://vmarchesin.medium.com/javascript-arrow-functions-and-closures-4e53aa30b774)
  - [유용하지만 위험한 화살표함수(=>)
    ](https://joooing.tistory.com/entry/%EC%9C%A0%EC%9A%A9%ED%95%98%EC%A7%80%EB%A7%8C-%EC%9C%84%ED%97%98%ED%95%9C-%ED%99%94%EC%82%B4%ED%91%9C%ED%95%A8%EC%88%98)
  - [화살표 함수](https://poiemaweb.com/es6-arrow-function)

### 그 외 수업 관련 정보

- 학원에서 준 책은 안 갖고 다녀도 됨. 참고서 정도로 생각하기

- 다음 주엔 자바스크립트의 클래스, 타입스크립트 진도 나감. 타입스크립트 학습하고 그다음부터 리액트 프로젝트 생성
