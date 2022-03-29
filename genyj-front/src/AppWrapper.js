import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './app/store';
import App from './App';

function AppWrapper() {
  return (
    <>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </>
  );
}

export default AppWrapper;

if (document.getElementById('app')) {
  ReactDOM.render(<AppWrapper />, document.getElementById('app'));
}
