import React          from 'react';
import { Provider }   from 'react-redux';
import {store}        from "./redux/store/store";
import PayslipList    from './components/PayslipList';
import PayslipDetails from './components/PayslipDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const App: React.FC = () => {
  return (
      <Router>
    <Provider store={store}>
      <PayslipList />
      <PayslipDetails />
    </Provider>
      </Router>
  );
};

export default App;


