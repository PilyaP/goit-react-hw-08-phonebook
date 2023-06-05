import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
// import { ThemeProvider } from '@emotion/react';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';

// import { Provider } from 'react-redux';
// import store from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <ThemeProvider theme={theme}> */}
          <App />
        {/* </ThemeProvider> */}
      </PersistGate>
    </Provider>
  </React.StrictMode>);
