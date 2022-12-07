import React, { Component } from 'react';

class Counter extends Component {
  //   // constructor : 컴포넌트 생성자 메서드, super(props) 호출 필수
  //   constructor(props) {
  //     super(props);
  //     // state 초깃값 설정
  //     this.state = {
  //       number: 0,
  //       fixedNumber: 0,
  //     };
  //   }

  // constructor 선언 없이 state 초깃값 설정
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    // this.state : 현재 state 조회
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        {/* this.setState를 사용하여 state에 새로운 값 삽입 */}
        <button
          onClick={() => {
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            // 위 코드와 아래 코드는 똑같은 기능을 함
            // 아래 코드는 함수에서 바로 객체를 반환한다는 의미
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
