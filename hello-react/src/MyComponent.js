import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 함수형 컴포넌트
// 화살표 함수 문법: 함수를 파라미터로 전달할 때 유용
// 비구조화 할당(구조 분해 문법)
// const MyComponent = ({ name, favoriteNumber, children }) => {
//   //   const { name, children } = props;
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name} 입니다. <br />
//       children 값은 {children} 입니다. <br />
//       제가 좋아하는 숫자는 {favoriteNumber} 입니다.
//     </div>
//   );
// };

// MyComponent.defaultProps = {
//   name: '기본 이름',
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

// export default MyComponent;

// 클래스형 컴포넌트에서 props 사용
class MyComponent extends Component {
  // 내부에서 defaultProps, propTypes 설정
  static defaultProps = {
    name: '기본 이름',
  };

  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요, 제 이름은 {name} 입니다. <br />
        children 값은 {children} 입니다. <br />
        제가 좋아하는 숫자는 {favoriteNumber} 입니다.
      </div>
    );
  }
}

// MyComponent.defaultProps = {
//   name: '기본 이름',
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

export default MyComponent;
