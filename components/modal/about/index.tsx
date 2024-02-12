import React from "react";
import { WorkerProfile} from "../../../types/Profile";
import AboutInfomationListing from "../../common/menu/aboutInformation";

const AboutModal: React.FunctionComponent<WorkerProfile> = (profile: WorkerProfile) => {
    return (
        <div className="p-6 rounded shadow-lg m-6">
            <div>
                <h2 className="p-6 text-lg text-semibold">About</h2>
                <div  className='grid grid-cols-1 sm:grid-cols-2'>
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
            <div className="border-y border-greyborder">
                <h2 className="py-8 text-lg text-semibold">Personal information</h2>
                <div  className='grid grid-cols-1 sm:grid-cols-2'>
                </div>
            </div>
            <div className="border-y border-greyborder">
                <h2 className="py-8 text-lg text-semibold">Contact details</h2>
                <div  className='grid grid-cols-1 sm:grid-cols-2'>
                </div>
            </div>
            <div className="border-y border-greyborder">
                <h2 className="py-8 text-lg text-semibold">Employment details</h2>
                <div  className='grid grid-cols-1 sm:grid-cols-2'>
                </div>
            </div>
        </div>
    )
}


export default AboutModal;
