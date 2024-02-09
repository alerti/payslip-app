export interface Profile {
    firstName: string;
    lastName: string;
    title: string;
    department: string;
    email: string;
    workPhone: string;
    nickname: string;
}


export interface MyTeam {
    manager: Profile;
    directReports: Profile[];
}

export interface About {
    title: string;
    location: string;
    workMobilePhone: string;
}

export interface MyContact {
    firstName: string;
    lastName: string;
    relationship: string;
}

export interface Profile {
    personalInformation: {
        contactDetails: Profile;
        employmentDetails: {
            myTeam: MyTeam;
            coworkers: Profile[];
        };
    };
    myContacts: MyContact[];
    emergencyContact: boolean;
    about: About;
}

