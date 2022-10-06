import React, { StrictMode} from 'react';
import * as ReactDOMClient from 'react-dom/client'; 
import './index.css';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
  );

serviceWorker.unregister();
