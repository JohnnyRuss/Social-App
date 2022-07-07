import * as sagas from './root';

export const initSagas = (sagaMidleware) =>
  Object.values(sagas).map((saga) => sagaMidleware.run(saga));
