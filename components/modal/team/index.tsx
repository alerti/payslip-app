import React from "react";
import {WorkerProfile} from "../../../types/Profile";
import ProfileListing from "../../common/menu/profileListing";

const WorkTeamModal: React.FunctionComponent<WorkerProfile> = (profile: WorkerProfile) => {
    return (
        <div className="p-6 rounded shadow-lg m-6">
            <div>
                <h2 className="p-6 text-lg text-semibold">My Team</h2>
                <div className='grid grid-cols-1'>
                    <ProfileListing {...profile.personalInformation.employmentDetails.myTeam.manager}/>
                </div>
            </div>
            <div className="border-y border-greyborder">
                <h2 className="py-6 text-lg text-semibold">Direct reports</h2>
                <div className='grid grid-cols-1'>
                    {profile.personalInformation.employmentDetails.myTeam.directReports.map(reportProfile => (
                        <ProfileListing {...reportProfile}/>
                    ))
                    }
                </div>
            </div>
            <div className="border-y border-greyborder">
                <h2 className="py-6 text-lg text-semibold">Coworkers</h2>
                <div className='grid grid-cols-1'>
                    {profile.personalInformation.employmentDetails.coworkers.map(coworker => (
                        <ProfileListing {...coworker}/>
                    ))
                    }
                </div>
            </div>
            <div className="border-y border-greyborder">
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                </div>
            </div>
        </div>
    )
}


export default WorkTeamModal;
