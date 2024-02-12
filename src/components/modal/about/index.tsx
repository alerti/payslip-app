import React, { useState } from 'react';
import { WorkerProfile } from '../../../types/Profile';
import AboutInfomationListing from '../../common/menu/aboutInformation';
import { Plugins, Capacitor } from '@capacitor/core';
import { FaAngleRight } from "react-icons/fa6";
import { GoDash } from "react-icons/go";
import { Filesystem, Directory } from '@capacitor/filesystem';




const AboutModal: React.FunctionComponent<WorkerProfile> = (profile: WorkerProfile) => {
  const payslips = [
    { month: 'January',file: '/Volumes/Data/Webstorm/payslip-app/assets/sample.pdf' },
    { month: 'February', file: 'payslip2.pdf' },
  ];

  const [selectedMonth, setSelectedMonth] = useState(payslips[0].month);
  const [isPayslipsCollapsed, setPayslipsCollapsed] = useState(true);

  const { Modals, Filesystem, Share } = Plugins;

  const openPayslip = async (file: string) => {
    try {
      if (Capacitor.getPlatform() === 'web') {
        console.error('Modals not available in web environment.');
        return;
      }

      const payslipContent = await Filesystem.readFile({
        path: file,
        directory: Filesystem.Directory.External,
        encoding: Filesystem.Encoding.UTF8,
      });

      const modalResult = await Modals.alert({
        title: 'View Payslip',
        message: payslipContent.data,
        buttonTitle: 'Close',
      });

      if (modalResult.value) {
      
      }

    } catch (error) {
      console.error('Error reading payslip file:', error);
    }
  };

  const downloadPayslip = async () => {
    try {
      const payslipContent = await Filesystem.readFile({
        path: "/Volumes/Data/Webstorm/payslip-app/assets/sample.pdf",
        directory: Directory.Documents,
        encoding: Filesystem.Encoding.UTF8,
      });

      const blob = new Blob([payslipContent.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'payslip.pdf';
      document.body.appendChild(link);

      link.click();

      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading payslip file:', error);
    }
  };

  const sharePayslip = async (file: string) => {
    try {
      const payslipContent = await Filesystem.readFile({
        path: file,
        directory: Filesystem.Directory.External,
        encoding: Filesystem.Encoding.UTF8,
      });

      await Share.share({
        title: 'Share Payslip',
        text: 'Check out my payslip!',
        dialogTitle: 'Share Payslip',
        files: [{
          name: 'payslip.pdf',
          data: payslipContent.data,
          mimeType: 'application/pdf',
        }],
      });

    } catch (error) {
      console.error('Error sharing payslip file:', error);
    }
  };

  return (
    <div className="p-6 rounded shadow-lg m-6">
      <div>
        <h2 className="p-6 text-lg text-semibold ">About</h2>
        <div className='sm:grid-cols-2  grid-col-2 wrap'>
          <AboutInfomationListing value={"Title"} description={profile.personalInformation.contactDetails.title}/>
          <AboutInfomationListing value={"Department"} description={profile.personalInformation.contactDetails.department} />
          <AboutInfomationListing value={"Manager"} description={profile.personalInformation.employmentDetails.myTeam.manager.firstName} />
          <AboutInfomationListing value={"Email"} description={profile.personalInformation.contactDetails.email} />
          <AboutInfomationListing value={"Location"} description={profile.about.location} />
          <AboutInfomationListing value={"Work phone"} description={profile.personalInformation.contactDetails.workPhone} />
          <AboutInfomationListing value={"Work mobile phone"} description={profile.about.workMobilePhone} />
          <AboutInfomationListing value={"Nickname"} description={profile.personalInformation.contactDetails.nickname} />
        </div>
      </div>
      <h2 className="py-1 text-lg text-semibold">Payslips
        <GoDash />
        <button className = "bold" onClick={() => setPayslipsCollapsed(!isPayslipsCollapsed)}>
            {isPayslipsCollapsed ? 'Show Payslips' : 'Hide Payslips'}
          </button> 
        </h2>
      <div className=" ">
       
        <div className=''>
         
          {!isPayslipsCollapsed && (
            <>
              
              <table >
                <tbody>
  {payslips.map((payslip, index) => (
    <tr key={index} className="border-y border-greyborder">
      <td>{payslip.month}</td>
      <td>
        <button className= "pl-2 pr-2 sm:pl-1 sm:pr-1 m-1" style={{border: '2px solid #B172DB', borderRadius: '5px', color: '#4F52BD'}} onClick={() => openPayslip(payslip.file)}>View</button>
        <button className= "pl-3 pr-3 sm:pl-1 sm:pr-1 m-1" style={{border: '2px solid #B172DB', borderRadius: '5px', color: '#4F52BD'}} onClick={() => sharePayslip(payslip.file)}>Share</button>
        <button className= "pl-3 pr-3 sm:pl-1 sm:pr-1 m-1" style={{border: '2px solid #B172DB', borderRadius: '5px', color: '#4F52BD'}} onClick={downloadPayslip}>Download</button>
      </td>
    </tr>
  ))}
</tbody>
              </table>
            </>
          )}
        </div>
      </div>
      <div className="border-y border-greyborder">
        <h2 className="py-8 text-lg text-semibold">Contact details</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
        </div>
      </div>
      <div className="border-y border-greyborder">
        <h2 className="py-8 text-lg text-semibold">Employment details</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
        </div>
      </div>
    </div>
  );
};








export default AboutModal;
