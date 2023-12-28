import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    // ...
  },

  // (에러)A non-serializable value was detected in an action...
  // state, action에 직렬화가 불가능한 값을 전달할 수 없기 때문에 발생한 에러
  // 아래의 미들웨어 코드를 입력하여 해결
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// 애플리케이션에서 사용할 유형화된 버전의 후크를 생성(타입스크립트)
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
