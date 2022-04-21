import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyles } from './styled/Global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <>
      <GlobalStyles/>
      <App />
    </>
);
