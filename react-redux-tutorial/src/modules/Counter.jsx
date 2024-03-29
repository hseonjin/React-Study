// 액션 타입 정의
// 대문자로 정의, '모듈이름/액션이름' 형태
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 생성
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 모듈 초기 상태 및 리듀서 함수 생성
const initialState = {
  number: 0,
};

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
