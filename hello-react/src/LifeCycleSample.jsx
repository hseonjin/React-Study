import React, { Component } from 'react';

// 각 메서드 실행 시 콘솔 디버거에 기록
// 부모 컴포넌트에서 props로 색상을 받아 버튼을 누르면
// state.number 값 +1

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;

  // mount_constructor
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  // mount_getDerivedStateFromProps
  // 부모에게서 받은 color 값을 state에 동기화
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  // mount_componentDidMount
  componentDidMount() {
    console.log('componentDidMount');
  }

  // update_shouldComponentUpdate
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    // 다음 state의 수의 마지막 자리가 4면 리렌더링 하지 않음
    return nextState.number % 10 !== 4;
  }

  // unmount_componentWillUnmount() {
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  // 이벤트 임의메서드 생성
  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  // update_getSnapshotBeforeUpdate
  // dom 변화 직전의 색상 속성을 snapshao 값으로 반환하여 componentDidUpdate에서 조회
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  // update_componentDidUpdate
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트 직전 색상: ', snapshot);
    }
  }

  render() {
    console.log('render');

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
