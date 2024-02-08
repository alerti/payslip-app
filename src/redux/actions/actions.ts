import { Payslip } from '../../types/Payslip';

export const SELECT_PAYSLIP = 'SELECT_PAYSLIP';

export const selectPayslip = (payslip: Payslip) => ({
  type: SELECT_PAYSLIP,
  payload: payslip,
});