import React from "react";
import {WorkerProfile} from "../../../types/Profile";
import AboutModal from "../about";
import WorkTeamModal from "../team";

const StaffProfileModal: React.FunctionComponent<WorkerProfile> = (profile: WorkerProfile) => {
    return (
        <div className="py-6">
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <AboutModal {...profile} />
                <WorkTeamModal {...profile} />
            </div>
        </div>
    )
}


export default StaffProfileModal;
