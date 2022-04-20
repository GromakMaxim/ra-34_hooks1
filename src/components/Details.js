import React from "react";

export default function Details(props) {
    if (props.profileData !== undefined && props.profileData !== null) {
        return (

            <div className='profile flex-col b1'>
                <img className='profile-pic' src={props.profileData.avatar}/>
                <div className='profile-name'>{props.profileData.name}</div>
                <div className='profile-city'>{props.profileData.details.city}</div>
                <div className='profile-company'>{props.profileData.details.company}</div>
                <div className='profile-position'>{props.profileData.details.position}</div>
            </div>
        );
    }
    return null;

}
