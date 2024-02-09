import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Payslip } from '../types/Payslip';
import {selectPayslip} from '../redux/actions/actions';
import EmployeeProfile from "./common/ProfilePage/ProfilePage"
const PayslipList: React.FC = () => {
  const dispatch = useDispatch();
  const payslips = useSelector((state: any) => state.payslips);

  return (
    <div>
        <EmployeeProfile />
      {payslips.map((payslip: Payslip) => (
        <div key={payslip.id} onClick={() => dispatch(selectPayslip(payslip))}>
          {payslip.fromDate} - {payslip.toDate}
        </div>
      ))}
    </div>
  );
};

export default PayslipList;