import ReactDom from 'react-dom/client';
import App from './App';
import './styles/global.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistore } from './store';

import { DOMProvider } from './store/context/DOMContext';

ReactDom.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistore} loading={null}>
        <DOMProvider>
          <App />
        </DOMProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
