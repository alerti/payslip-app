import { Payslip } from '../../types/Payslip';
import { SELECT_PAYSLIP } from '../actions/actions';

const initialState = {
  selectedPayslip: null as Payslip | null,
  payslips: [
    // Add your mock data here
  ],
};

function rootReducer(state = initialState, action: any) {
  switch (action.type) {
    case SELECT_PAYSLIP:
      return { ...state, selectedPayslip: action.payload };
    default:
      return state;
  }
}

export default rootReducer;