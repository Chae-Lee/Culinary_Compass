import React from "react";
import teamprofile from "../teamprofile.json";
import { Link } from "react-router-dom";

// Meet The Team page.
function MeetTheTeam() {
    return (
        <div className="bg-white py-24 sm:py-12 .p-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-center text-4xl font-bold leading-8 text-gray-900 sm:leading-9">Meet the team</h2>
                    <p className="max-w-fit flex items-center mt-6 mb-20 text-lg leading-8 text-gray-600">We are a team of front end web developers with a diverse skillset and an appetite for solving problems etc etc</p>
                </div>
            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                {teamprofile.map((person) => (
                    <li key={person.id}>
                        <div className="flex items-center gap-x-6">
                            <img className="h-60 w-60 rounded-2xl" src={person.image} alt="" />
                            <div>
                            <h3 className="text-base font-semibold leading-7 text-gray-900">{person.name}</h3>
                            <p className="text-sm font-semibold leading-6 text-gray-600  mb-8">{person.occupation}</p>
                            <p className="text-sm leading-6 text-gray-600">{person.description}</p>
                            <p className="text-sm leading-6 text-green-600"><Link to={person.github} target="_blank">GitHub symbol here</Link>   -   <Link to={person.linkedin} target="_blank">LinkedIn symbol here</Link></p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    )
};

export default MeetTheTeam;