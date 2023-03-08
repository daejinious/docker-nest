import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import commonReducer from '../store/common';
import { all } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

function* saga() {
  yield all([]);
}

export const configuration = {
  reducer: {
    common: commonReducer,
  },
};

export const store = configureStore({
  ...configuration,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
