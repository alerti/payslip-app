import React, {useEffect, useState} from 'react';
import { Profile } from "../../../types/Profile";

export interface Avatar {
    firstName: string;
    lastName: string;
}

const AvatarIcon: React.FunctionComponent<Profile> = (profile: Profile) => {
    const [avatar, setAvatar] = useState<Avatar>({firstName: "", lastName: ""})
    const [initials, setInitials] = useState<string>("");

    useEffect(() => {
        let avatar = {firstName: profile.firstName, lastName: profile.lastName};
        setAvatar(avatar);
    }, [profile])

    useEffect(() => {
        let avatarProfile = avatar;
        if (avatarProfile.firstName === "") {
            avatarProfile.firstName = "Unknown";
        }
        if (avatarProfile.lastName === "") {
            avatarProfile.lastName = "Profile";
        }
        setInitials(avatarProfile.firstName.charAt(0).toUpperCase() + avatarProfile.lastName.charAt(0).toUpperCase());
    },[avatar])

    return (
        <div className="w-12 h-12 border-customgray border-2 rounded-full flex items-center justify-center">
            <div className="font-semibold text-2xl">
                {initials}
            </div>
        </div>
    )
}


export default AvatarIcon;
