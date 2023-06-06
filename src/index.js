import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
// import { ThemeProvider } from '@emotion/react';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

