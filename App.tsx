//generate this file based on the currecnt structure of the project, write the full code

import React from 'react';
import { Provider } from 'react-redux';
import {store} from "./src/redux/store/store";
import PayslipList from './src/components/PayslipList';
import PayslipDetails from './src/components/PayslipDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={PayslipList} />
          <Route path="/payslip/:id" component={PayslipDetails} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;

