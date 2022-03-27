import { render } from 'react-dom';
import App from './App';

const rootEl = document.getElementById('root') || document.createElement('div');

render(<App />, rootEl);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
