import React, { useState, useReducer } from "react";

// 현재상태와 업데이트를 위해 필요한 정보를 담은 액션 값을 전달 받아 새로운 상태 반환

// → 불변성 지키기

// useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트 할 수 있음

// 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다는 장점이 있음

// reducer란 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수

// `function reducer(state, action) { return {...}; }`

// `const [state, dispatch] = useReducer(reducer, initialArg, init);`

// `{ type: 'INCREMENT', }` → 액션값

// 리덕스에서 사용하는 액션 객체는 type 필드가 필수이지만,

// useReducer에서 사용하는 액션 객체는 type필드가 필수가 아니며, 문자열이나 숫자도 가능

// const Counter = () => {
//   const [value, setValue] = useState(0); // 기본값 0

//   return (
//     <div>
//       <p>
//         현재 카운터 값: <b>{value}</b>
//       </p>
//       <button onClick={() => setValue(value + 1)}>+1</button>
//       <button onClick={() => setValue(value - 1)}>-1</button>
//     </div>
//   );
// };

// export default Counter;

function reducer(state, action) {
  // action.type에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;
