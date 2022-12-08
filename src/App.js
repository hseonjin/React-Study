import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import MyComponent from './MyComponent';
// import Counter from './Counter';
// import Say from './Say';
// import { Fragment } from 'react';
import EventPractice from './EventPractice';

// const App = () => {
//   return (
//     <MyComponent name="React" favoriteNumber={7}>
//       리액트
//     </MyComponent>
//   );
// };

// export default App;

const App = () => {
  return <EventPractice />;
};

export default App;

// -----------------------
// 1-2장

// JSX code
// function Keyword -> create component 'App'
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// function App() {
//   const name = "리액트";
//   return (
//     <>
//       <h1>{name} 안녕!</h1>
//       <h2>작동</h2>
//     </>
//   );
// }

// export default App;

// 조건부 연산자 &&: false인 경우 null과 같은 결과
// function App() {
//   const name = '리액트';

//   return (
//     <div>
//       {name === '리액트' &&
//         <h1>리액트입니다.</h1>}
//     </div>
//   );
// }

// export default App;

// 인라인 스타일링
// function App() {
//   const name = '리액트';
//   const style = { backgroundColor: 'black',
//                   color : 'aqua',
//                   fontSize : '48px',
//                   fontWeight : 'bold',
//                   padding : 16  };

//   return <div style = {style}>{name}</div>;
// }

// export default App;

// css file -> className 지정
// function App() {
//   const name = '리액트';

//   return <div className="react">{name}</div>;
// }

// export default App;

// class형 component
// class App extends Comment {
//   render() {
//     const name = 'react';
//     return <div className="react">{name}</div>;
//   }
// }
