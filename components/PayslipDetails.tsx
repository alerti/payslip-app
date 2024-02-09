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

//https://www.figma.com/file/RSI2Uhh1YEkkVMyEsIhx3a/Payslip-app?type=design&node-id=1258-21454&mode=design&t=3VGUP9ZriFFGdHVB-0

