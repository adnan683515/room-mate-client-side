import React, { useContext, useState } from 'react';
import DisplayRoomMatesPost from '../DisplayRoomMatesPost';
import { AuthContext } from '../../Provider/AuthContext';
import { motion } from 'framer-motion';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import FilterByPrice from '../FilterByPrice/FilterByPrice';
import LifeStyle from '../FilterLifeStyle/LifeStyle';


const All_room_matesLayout = ({ handleLifeStyleOnchange, data, load, handleRoomtype, handleAccendingOrder }) => {
    const { mode } = useContext(AuthContext);
    const cngmode = mode ? 'bg-neutral-800 text-white' : 'bg-neutral-200 text-black'
    const textClass = mode ? "text-white" : "text-black";

    console.log("data,",data)
    return (
        <div className='flex flex-col md:flex-row  '>

            {/* Sidebar */}
            <div className={`w-full mt-1 mb-4 sm:mb-0 rounded-sm   md:w-1/4 ${cngmode} rounded-sm  p-4`}>
                <div className=' space-y-4  '>
                    <div className="p-4 rounded-xl mb-6  ">
                        <h1 className={`mb-7 font-bold ${textClass}`}>Filters Applied:</h1>
                        <h1 className={textClass}>🐱 Life Style: Cat lover</h1>
                        <h1 className={textClass}>🏠 Room Type: Single</h1>
                        <h1 className={textClass}>💸 Max Rent: 5000</h1>
                        <h1 className={textClass}>⭐ Minimum Rating: 4</h1>
                        <h1 className={textClass}>📍 Location Search: Dhaka</h1>
                    </div>

                    {/* <div>
                        <div>

                            Rating:
                            <Stack spacing={1}>
                                <Rating onChange={(e) => handleRating(e.target.value)} name="size-large" size="large" />
                            </Stack>
                        </div>
                    </div> */}

                    <div className="w-full  max-w-md mx-auto my-7">
                        <label
                            className={`block mb-2 text-sm font-medium ${mode ? 'text-white' : 'text-gray-800'}`}
                            htmlFor="roomType"
                        >
                            Select Your Room Type
                        </label>
                        <select required
                            onChange={(e) => handleRoomtype(e.target.value)}
                            id="roomType"
                            className={`
                    w-full p-3 rounded-lg border outline-none transition duration-300
                    ${mode
                                    ? 'bg-gray-800 text-white border-gray-600 placeholder-gray-400'
                                    : 'bg-white text-gray-900 border-gray-300'}
                    focus:ring-2 focus:ring-orange-400
                `}
                            defaultValue=""
                        >
                            <option value="" disabled>Select Your Room Type</option>
                            <option value="Single">Single</option>
                            <option value="Double Room">Double Room</option>
                            <option value="Twin Room">Twin Room</option>
                            <option value="Family Room">Family Room</option>
                            <option value="Triple Room">Triple Room</option>
                        </select>
                    </div>


                    <div className=''>
                        <h1>Filter By LifeStyle </h1>
                        <LifeStyle handleLifeStyleOnchange={handleLifeStyleOnchange} mode={mode}></LifeStyle>
                    </div>

                    <div className="w-full mb-4">
                        <label
                            htmlFor="sort"
                            className={`block mb-2 font-semibold ${mode ? 'text-white' : 'text-gray-800'}`}
                        >
                            Sort by Order
                        </label>

                        <select
                            id="sort"
                            onChange={(e) => handleAccendingOrder(e.target.value)}
                            className={`w-full px-4 py-2 rounded-sm outline-none transition-all duration-300
        ${mode
                                    ? 'bg-black text-orange-400 border border-orange-500'
                                    : 'bg-white text-teal-600 border border-teal-500'}
        `}
                        >
                            <option value="">Select an option</option>
                            <option value="accending">⬆ Ascending</option>
                            <option value="decendding">⬇ Descending</option>
                        </select>
                    </div>
                </div>

            </div>


            {/* Main Content */}
            <div className='w-full md:w-3/4 pl-2 '>

                {
                    load ? <div className="flex mt-20 justify-center items-center">
                        <span className="loading loading-spinner text-success"></span>
                    </div> : <div className="grid relative overflow-hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {
                            data?.length ? data?.map((roommate, index) => {

                                return <motion.div
                                    initial={{ opacity: 0, y: 70 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.1 }} // 👈 অর্থাৎ ২০% ভিউতে আসলেই animate হবে
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.10, // 👈 delay একটু কম রাখলে বেশি smooth লাগবে
                                        type: "spring",
                                        stiffness: 40, // 👈 spring কতটা bounce করবে
                                        damping: 15,    // 👈 smoothness control করে
                                    }}
                                >
                                    <DisplayRoomMatesPost
                                        key={index}
                                        roommates={roommate}
                                        mode={mode}
                                    />
                                </motion.div>
                            }) : <div
                                className={`flex  col-span-3 flex-col items-center justify-center text-center h-[60vh] p-6 rounded-xl
            ${mode ? ' text-white' : 'bg-white text-gray-800'}`}
                            >
                                {/* Sad Emoji Image */}
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/742/742751.png"
                                    alt="No Room"
                                    className="w-24 h-24 mb-4 opacity-80"
                                />

                                {/* Title */}
                                <h2 className="text-2xl font-bold mb-2">
                                    <span className="text-orange-400">Oops!</span> No Room Found
                                </h2>

                                {/* Suggestion */}
                                <p className="text-sm max-w-md">
                                    Let’s try something different — maybe use the{' '}
                                    <span className="text-teal-600 font-semibold">filters</span> or check back later!
                                </p>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default All_room_matesLayout;
