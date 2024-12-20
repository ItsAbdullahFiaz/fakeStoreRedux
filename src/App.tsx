import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Navigation from './navigation/Navigation';

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;