import React from 'react';
import { Link } from 'react-router';

const DisplayRoomMatesPost = ({ roommates, mode }) => {
    const { title, roomtype, location, photo } = roommates

    return (
        <div className=''>
            <div className={`mx-auto rounded-2xl shadow-lg overflow-hidden transition-shadow duration-300 
    ${mode ? "bg-neutral-800 text-white" : "bg-neutral-200 text-black"} hover:shadow-2xl`}>

                <div className="flex flex-col p-6 space-y-4">
                    <div className="flex justify-center">
                        <img
                            className="w-28 h-28 object-cover rounded-full border-4 border-teal-500 shadow-md"
                            src={photo !== 'Htt' ? photo : `https://i.ibb.co/Psm6XvND/images-3.png`}
                            alt="Profile"
                        />
                    </div>

                    <div className="space-y-1">
                        <h2 className="text-md font-semibold">
                            🏷️ Title:
                            <span className={`${mode ? 'text-white' : 'text-black'}`}> {title.slice(0,20)}...</span>
                        </h2>
                        <h2 className="text-base">
                            🛏️ Room Type:
                            <span className={`${mode ? 'text-gray-300' : 'text-gray-600'}`}>{roomtype.slice(0,10)}</span>
                        </h2>
                        <h2 className="text-base">
                            📍 Location:
                            <span className={`${mode ? 'text-gray-300' : 'text-gray-600'}`}>{location}</span>
                        </h2>
                    </div>


                    <div className="flex  justify-center pt-2">
                        <Link
                            to={`/details/${roommates?._id}`}
                            className="px-5 py-2 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-600 transition-all duration-200"
                        >
                            See More
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DisplayRoomMatesPost;