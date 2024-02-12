import React, { useState } from "react";
import { WorkerPayslip } from "../../../types/Profile";
import AboutInfomationListing from "../../common/menu/aboutInformation";
import { Plugins } from '@capacitor/core';

const PayslipPage: React.FunctionComponent<WorkerPayslip> = (profile: WorkerPayslip) => {
  const payslips = [
    { month: 'January', file: "/Volumes/Data/Webstorm/payslip-app/assets/sample.pdf" },
    { month: 'February', file: 'payslip2.pdf' },
  ];

  const [selectedMonth, setSelectedMonth] = useState(payslips[0].month);

  const { Browser } = Plugins;

  const openPayslip = async (file: string) => {
    if (Browser) {
      await Browser.open({ url: file });
    } else {
      console.error('Browser plugin is not available.');
    }
  };

  return (
    <div className="p-6 rounded shadow-lg m-6">
      <h2 className="p-6 text-lg text-semibold">Payslip Page</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
          {payslips.map((payslip, index) => (
            <option key={index} value={payslip.month}>{payslip.month}</option>
          ))}
        </select>
        <button onClick={() => openPayslip(payslips.find(p => p.month === selectedMonth)?.file || '')}>
          View Payslip
        </button>
      </div>
    </div>
  );
}

export default PayslipPage;
