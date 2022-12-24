# todo-app 만들기

### UI 구성

- TodoTemplate

  - 화면 가운데 정렬
  - 앱 타이틀(일정관리) 표시
  - children으로 내부 jsx를 props로 받아 와서 렌더링

- TodoInsert

  - 새로운 항목 입력, 추가
  - state를 통해 input 상태 관리

- TodoListItem

  - 각각의 할 일 항목에 대한 정보 표시
  - todo 객체를 props로 받아와 상태에 따른 UI 표시

- TodoList
  - todos 배열을 props로 받아오기
  - map을 통해 여러 개의 TodoListItem 컴포넌트로 변환하여 표시

### 기능구현

1. TodoList 화면에 표시하기
   App에서 TodoList에 todos라는 props를 전달
   TodoList에서 todos를 받아 TodoItem으로 변환하여 렌더링
   -> TodoList에서 TodoListItem에 todo라는 props를 전달
   -> map을 사용하여 컴포넌트로 변환하며로 key props 함께 전달

2. todo 항목 추가하기
   TodoInsert에서 input을 관리 -> value state 정의, onChange 함수 작성, useCallback hook 사용
   App 컴포넌트에서 todos 배열에 새로운 객체를 추가하는 onInsert 함수 생성
   -> 새 객체 생성 시 id + 1, useRef로 id값 관리
   -> id 값은 렌더링되는 정보가 아니기 때문
   -> onInsert 함수를 useCallback으로 감싸줌
   -> props로 전달해야 할 함수를 만들 때는 useCallback을 사용하는 것을 습관화하기!

버튼 클릭할 때 onSubmit 이벤트 설정
-> onClick는 enter를 눌렀을 때도 발생하려면 onKeyPress 이벤트를 작성해야 하기때문에, onSubmit을 사용

3. todo 지우기
   filter 함수 사용
   App에서 onRemove 함수 등록하여 TodoList를 거쳐 TodoListItem에 props를 그대로 전달

4. 수정기능
   App에서 onToggle 함수 등록하여 TodoList를 거쳐 TodoListItem에 props로 전달
   map을 사용해 특정 id를 가진 객체의 checked 값을 반전
   -> 불변성을 유지하며 특정 배열 원소 업데이트
