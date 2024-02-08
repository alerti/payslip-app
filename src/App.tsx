import React          from 'react';
import { Provider }   from 'react-redux';
import {store}        from "./redux/store/store";
import PayslipList    from './components/PayslipList';
import PayslipDetails from './components/PayslipDetails';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      {/* Add your routing logic here */}
      <PayslipList />
      <PayslipDetails />
    </Provider>
  );
};

export default App;