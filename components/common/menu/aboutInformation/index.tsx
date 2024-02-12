import React from "react";
import {
    FaBriefcase,
    FaCircleUser,
    FaEnvelope,
    FaSitemap,
    FaLocationArrow,
    FaPhone,
    FaAddressCard
} from "react-icons/fa6";

const AboutInfomationListing: React.FunctionComponent<{value: string,  description: string}> = ({value  , description}: {value: string,  description: string}) => {
    return (
        <div className="flex items-center gap-2 text-secondary py-3">
            <div className="w-12 h-12 flex items-center justify-center text-xl my-2">
                {(() => {
                    switch (value) {
                        case 'Title':
                            return <FaBriefcase/>
                        case 'Department':
                            return <FaSitemap />
                        case 'Manager':
                            return <FaCircleUser />
                        case 'Email':
                            return <FaEnvelope />
                        case 'Location':
                            return <FaLocationArrow/>
                        case 'Work phone':
                            return <FaPhone />
                        case 'Work mobile phone':
                            return <FaPhone />
                        case 'Nickname':
                            return <FaAddressCard />
                        default:
                            return null
                    }
                })()}
            </div>
            <div>
                <h2 className="text-grey text-semibold leading-5 text-sm">{value}
                </h2>
                {!!description && description !== ""
                    ? value == "Email"
                        ? <p className="text-primary leading-6 text-base">{description}</p>
                        : <p className="text-black leading-6 text-base">{description}</p>
                    : <p className="text-grey leading-6 text-base">(Empty)</p>
                }
            </div>
        </div>
    )
}


export default AboutInfomationListing;
