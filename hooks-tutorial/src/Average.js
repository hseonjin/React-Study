import React, { useState, useMemo, useCallback, useRef } from "react";

// ## useMemo
// 함수형 컴포넌트 내부에서 발생하는 연산 최적화
// 메모이제이션된 값을 반환
// 의존성이 변경되었을 때에만 메모이제션된 값을 다시 계산
// 의존성 배열이 없는 경우 매 렌더링 때마다 새 값 계산

// ## useCallback
// useMemo와 유사한 함수
// 렌더링 성능을 최적화해야 하는 상황에서 사용 → 이벤트 핸들러 함수를 필요할 때만 생성할 수 있음
// 위의 useMemo 코드에서 onChange, onInsert 함수는 컴포넌트 리렌더링이 될 때마다 새로 생성됨
// 이를 최적화 할 때 필요한 것이 useCallback
// 첫 번째 파라미터에는 생성하고 싶은 함수
// 두 번째 파라미터에는 배열 → 어떤 값이 바뀔 때 함수를 새로 생성하는지 명시

const getAverage = (numbers) => {
  console.log("평균값 계산");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputEl.current.focus();
  }, [number, list]); // number 혹은 list가 바뀌었을 때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
