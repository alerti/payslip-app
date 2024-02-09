import { Payslip } from '../../types/Payslip';
import { SELECT_PAYSLIP } from '../actions/actions';
import {WorkerProfile} from "../../types/Profile";
export interface AppStore {
  selectedPayslip: Payslip | null;
  profiles: WorkerProfile[];
  payslips: Payslip[];
}

const workerProfile: WorkerProfile = {
  personalInformation: {
    contactDetails: {
      firstName: "John",
      lastName: "Doe",
      title: "Senior, Software Engineer",
      department: "Engineering",
      email: "gale.nolau@servicenow.com",
      workPhone: "",
      nickname: "doe",
      gender: ""
    },
    employmentDetails: {
      myTeam: {
        manager: {
          firstName: "Anita",
          lastName: "Lugomer",
          title: "Director, Product Design",
          department: "",
          email: "",
          workPhone: "",
          nickname: "",
          gender: "She/Her"
        },
        directReports: [
          {
            firstName: "Fred",
            lastName: "Garner",
            title: "Staff Product Designer",
            department: "",
            email: "",
            workPhone: "",
            nickname: "",
            gender: ""
          },
          {
            firstName: "Julie",
            lastName: "Chen",
            title: "Product Designer",
            department: "",
            email: "",
            workPhone: "",
            nickname: "",
            gender: ""
          },
          {
            firstName: "Sam",
            lastName: "Sorokin",
            title: "Sr. Product Designer",
            department: "",
            email: "",
            workPhone: "",
            nickname: "",
            gender: ""
          }
        ]
      },
      coworkers: [
        {
          firstName: "Robert",
          lastName: "Fox",
          title: "Sr. Manager, Product Design",
          department: "",
          email: "",
          workPhone: "",
          nickname: "",
          gender: ""
        }
      ]
    }
  },
  myContacts: [
    {
      firstName: "John",
      lastName: "Done",
      relationship: "Cousin"
    },
    {
      firstName: "John",
      lastName: "Doe",
      relationship: "Sister"
    },
    {
      firstName: "Done",
      lastName: "Doe",
      relationship: "Child"
    }
  ],
  emergencyContact: false,
  about: {
    title: "Senior Software Engineer",
    location: "",
    workMobilePhone: ""
  }
};


const initialState: AppStore = {
  selectedPayslip: null,
  profiles: [ workerProfile ],
  payslips: [
    // Add your mock data here
  ],
};

function rootReducer(state = initialState, action: any) {
  switch (action.type) {
    case SELECT_PAYSLIP:
      return { ...state, selectedPayslip: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
