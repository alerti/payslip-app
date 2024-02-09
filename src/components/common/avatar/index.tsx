import React, {useEffect, useState} from 'react';

export interface Avatar {
    firstName: string;
    lastName: string;
}

const AvatarIcon: React.FunctionComponent<Avatar> = (avatarProfile: Avatar) => {
    const [avatar, setAvatar] = useState<Avatar>({firstName: "", lastName: ""})
    const [initials, setInitials] = useState<string>("");

    useEffect(() => {
        if (avatarProfile.firstName === "") {
            avatarProfile.firstName = "Unknown";
        }
        if (avatarProfile.lastName === "") {
            avatarProfile.lastName = "Profile";
        }
        setAvatar(avatarProfile);
        setInitials(avatarProfile.firstName.charAt(0).toUpperCase() + avatarProfile.lastName.charAt(0).toUpperCase());
    }, [])
    return (
        <div className="m-4 w-12 h-12 border-customgray border-2 rounded-full flex items-center justify-center">
            <div className="font-semibold text-2xl">
                {initials}
            </div>
        </div>
    )
}


export default AvatarIcon;
