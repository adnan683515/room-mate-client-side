import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthContext';


const AboutUs = () => {
    const { mode } = useContext(AuthContext);

    return (
        <div className={`py-16 w-[94%] mx-auto ${mode ? 'bg-black text-white' : 'bg-gray-100 text-gray-800'}`}>
            <div className=" grid md:grid-cols-2 gap-12 items-start">

                {/* 🟩 Left Column: About Us */}
                <div>
                    <h2 className="text-4xl font-bold text-teal-500 mb-4">🏡 About RoomMateFinder</h2>
                    <p className="text-lg leading-relaxed">
                        RoomMateFinder helps people discover compatible roommates based on preferences, lifestyle,
                        budget, and location. Whether you're looking for a quiet study partner or a fun-loving flatmate,
                        we connect you with the right match.
                    </p>
                </div>

                {/* 🟦 Right Column: 2 inner columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Column 1 */}
                    <div>
                        <h3 className="text-xl font-semibold text-orange-500 mb-2">🎯 Features</h3>
                        <ul className="list-disc ml-5 space-y-2">
                            <li>Personalized roommate matches</li>
                            <li>Profile filters (smoker, study habits)</li>
                            <li>Verified users & ratings</li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="text-xl font-semibold text-orange-500 mb-2">🚀 Benefits</h3>
                        <ul className="list-disc ml-5 space-y-2">
                            <li>Easy sign up and login</li>
                            <li>Location-based search</li>
                            <li>Safe & secure platform</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;
