import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의
const SAMPLE_ACTION = 'auth/SAMPLE_ACTION';

// 액션 생성 함수
export const sampleAction = createAction(SAMPLE_ACTION);

// 리듀서 함수
const initialState = {}; // 초기상태 설정

const auth = handleActions(
  {
    [SAMPLE_ACTION]: (state, action) => state,
  },
  initialState,
);

export default auth;
