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
