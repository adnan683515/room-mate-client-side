import React from 'react';
import { Link } from 'react-router';

const DisplayRoomMatesPost = ({ roommates, mode }) => {
    const { title, roomtype, location, photo } = roommates




    return (
        <div>
            <div className={`max-w-sm mx-auto ${mode ? "bg-neutral-800  text-white " : "bg-white text-black"} rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300`}>
                <div className="flex flex-col  p-6">
                    <div className='flex justify-center items-center'>
                        <img
                            className="w-32 h-32 object-cover rounded-full border-4 border-teal-500 shadow-md"
                            src={photo}
                            alt="Profile"
                        />
                    </div>
                    <h2 className="text-start font-semibold  text-gray-500 mt-2"> Title:  {title}</h2>
                    <h2 className=" text-start  text-gray-500 mt-2">Room: {roomtype}</h2>
                    <h2 className=" text-start  text-gray-500 mt-2">Location: {location}</h2>


                    <div className='flex justify-center items-center'>
                        <Link to={`/details/${roommates?._id}`}

                            className="mt-6 px-4 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors duration-200"
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