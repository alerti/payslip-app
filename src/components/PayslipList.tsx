import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Payslip } from '../types/Payslip';
import {selectPayslip} from '../redux/actions/actions';
import Navbar          from "./common/navbar/Navbar";
import ProfileListing from "./common/menu/profileListing";
import ProfilePage from "./common/profilepage/profilemainPage";
import {AppStore} from "../redux/reducers/reducers";

const PayslipList: React.FC = () => {
  const dispatch = useDispatch();
  const payslips = useSelector((state: any) => state.payslips);
  const profiles = useSelector((state: AppStore) => state.profiles);

  return (
      <>
    <div>
        <Navbar />

      <ProfilePage />


      <ProfileListing {...profiles[0].personalInformation.contactDetails} />

      {payslips.map((payslip: Payslip) => (
        <div key={payslip.id} onClick={() => dispatch(selectPayslip(payslip))}>
          {payslip.fromDate} - {payslip.toDate}
        </div>
      ))}
    </div>
      </>
  );
};

export default PayslipList;