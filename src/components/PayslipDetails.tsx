import React from 'react';
import { useSelector } from 'react-redux';
import payslipList     from "./PayslipList";
const PayslipDetails: React.FC = () => {
  const selectedPayslip = useSelector((state: any) => state.selectedPayslip);

  const handleDownload = () => {
    // Implement download functionality here use capacitor file system plugin



  };

  return selectedPayslip ? (
    <div>
      <h1>{selectedPayslip.id}</h1>
      <p>{selectedPayslip.fromDate} - {selectedPayslip.toDate}</p>
      <button onClick={handleDownload}>Download Payslip</button>
    </div>
  ) : null;
};

export default PayslipDetails;
