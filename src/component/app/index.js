import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import appStoreCreate from '../../lib/app-store-create';
import Dashboard from '../dashboard';

const store = appStoreCreate();

const App = () => (
  <div className="app">
    <Provider store={store}>
      <BrowserRouter>
        <main>
          <h1> Users </h1>
          <Route exact path="/" component={Dashboard} />
        </main>
      </BrowserRouter>
    </Provider>
  </div>
);

export default App;
