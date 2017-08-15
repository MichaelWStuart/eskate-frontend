import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import appStoreCreate from '../../lib/app-store-create';
import AdminDashboard from '../admin-component/admin-dashboard';
import Storeview from '../frontend-component';

const store = appStoreCreate();

const App = () => (
  <div className="app">
    <Provider store={store}>
      <BrowserRouter>
        <main>
          <Route exact path="/admin" component={AdminDashboard} />
          <Route exact path="/" component={Storeview} />
        </main>
      </BrowserRouter>
    </Provider>
  </div>
);

export default App;
