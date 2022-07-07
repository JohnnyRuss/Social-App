import { configureStore } from '@reduxjs/toolkit';
import createSagaMidleware from 'redux-saga';
import { persistStore, FLUSH, REGISTER, PAUSE, PERSIST, PURGE, REHYDRATE } from 'redux-persist';
import { rootReducer } from './reducers';
import { initSagas } from './sagas/initSagas';

const sagaMidleware = createSagaMidleware();

const midlewares = [sagaMidleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REGISTER, PAUSE, PURGE, PERSIST, REHYDRATE],
      },
    }).concat(midlewares),
});

initSagas(sagaMidleware);

export const persistore = persistStore(store);
