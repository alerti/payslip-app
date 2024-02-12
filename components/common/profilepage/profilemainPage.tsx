import React from 'react';
import { IconContext } from "react-icons";
import { FaChevronRight } from "react-icons/fa";

import ButtonFactory from "./components/buttonFactory"
import ProfileImageFactory from "./components/profileImageFactory"

const ProfilePage = () => {
    const BannerImage = () => {
        return (
            <div className= "w-full object-cover border-1  border-opacity-5 h-0.5">
                <img className=" h-[230px] w-full max-w-full object-stretch p-1 content-center justify-center object-center absolute"
                     src= 'https://i.imgur.com/qCFDxcy.png'
                     alt="profile" />
            </div>
        )
    }


    return (
        <div className="shadow-lg w-full">
            <div className=" p-2 pl-10 pr-10 flex ">
                <div className="p-5">Home</div> <div className="p-6">  <FaChevronRight /> </div> <div className="p-5">Profile </div>
            </div>
            <div  className="w-full h-[285px] justify-evenly ">
                <BannerImage />
            </div>
            <div className= "w-full  h-auto flex p-10">
                <div><ProfileImageFactory
                    src="https://i.imgur.com/HhfN2Il.png"
                    alt="profile image"
                    size={100} />
                </div>

                <div className="  relative flex  flex-row justify-evenly ">
                <div>
                    <p>John Doe</p>
                    <p>Senior, Software Engineer</p>
                </div>
                <div className="flex    relative ">
                    <ButtonFactory
                        text="View Org Chart"
                        onClick={() => {/*click handle*/}}
                        style={{ border: '2px solid #B172DB', borderRadius: '5px', color: '#4F52BD', padding: '10px' +
                                ' 20px', fontSize: '16px', fontWeight: 'bold', position:"absolute"}}/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;