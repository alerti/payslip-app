import React from "react";
import AvatarIcon from "../../avatar";
import {Profile} from "../../../../types/Profile";

const ProfileListing: React.FunctionComponent<Profile> = (profile: Profile) => {
    return (
        <div className="flex items-center gap-2 my-3">
            <AvatarIcon {...profile} />
            <div>
                <h2 className="text-primary text-semibold leading-6 text-base">{`${profile.firstName} ${profile.lastName}`}
                    {!!profile.gender && profile.gender !== "" ? ` (${profile.gender})`: ""}
                </h2>
                <p className="leading-5 text-grey text-sm">{`${profile.title}`}</p>
            </div>
        </div>
    )
}


export default ProfileListing;
