import React, { useState, useEffect, useReducer } from "react";
import useInputs from "./useInputs";

// const Info = () => {
//   const [name, setName] = useState("");
//   const [nickname, setNickname] = useState("");

//   useEffect(() => {
//     // console.log("렌더링 완료");
//     // console.log({ name, nickname });
//     // });

//     // 마운팅될 때만 실행하는 경우
//     // console.log("마운트될 때만 실행");
//     // }, []);

//     // 특정 값(name)이 업데이트될 때만 실행하는 경우
//     // console.log(name);
//     // }, [name]);

//     // 뒷정리 함수
//     console.log("effect");
//     console.log(name);
//     return () => {
//       console.log("cleanup");
//       console.log(name);
//     };
//   });

//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };

//   const onChangeNickname = (e) => {
//     setNickname(e.target.value);
//   };

//   return (
//     <div>
//       <div>
//         <input value={name} onChange={onChangeName} />
//         <input value={nickname} onChange={onChangeNickname} />
//       </div>
//       <div>
//         <div>
//           <b>이름: </b> {name}
//         </div>
//         <div>
//           <b>닉네임: </b> {nickname}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Info;

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  // const [state, dispatch] = useReducer(reducer, {
  //   name: "",
  //   nickname: "",
  // });
  // const { name, nickname } = state;
  // const onChange = (e) => {
  //   dispatch(e.target);
  // };

  // custom hooks -> useInputs.js
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <b>이름: </b> {name}
      </div>
      <div>
        <b>닉네임: </b> {nickname}
      </div>
    </div>
  );
};

export default Info;
