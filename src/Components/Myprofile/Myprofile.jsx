import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthContext';

const Myprofile = () => {
    const { user, mode } = useContext(AuthContext);

    // Theme based classes
    const isDark = mode === true;

    const containerBg = " py-10 px-4";
    const cardBg = isDark ? "bg-teal-900 text-white" : "bg-orange-100 text-orange-400";
    const buttonClass = isDark
        ? "bg-white text-teal-400 hover:bg-teal-200"
        : "bg-orange-600 text-white hover:bg-orange-400";

    return (
        <div className={containerBg}>
            {/* Title & Description */}
            <div className="text-center mb-10">
                <h1 className={`text-4xl font-bold mb-2 ${isDark ? "text-teal-500" : "text-orange-500"}`}>
                    👤 User Profile
                </h1>
                <p className={`text-base md:text-lg ${isDark ? "text-orange-500" : "text-black"}`}>
                    Welcome to your profile page! Here you can see your account information and manage your settings.
                </p>
            </div>

            {/* Profile Card */}
            <div className={`max-w-md mx-auto rounded-xl shadow-lg p-6 md:p-8 ${cardBg}`}>
                {/* Profile Image */}
                <div className="flex justify-center mb-5">
                    <img
                        src={user?.photoURL || "https://i.ibb.co/sPHXjyc/avatar.png"}
                        alt="User"
                        className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md"
                    />
                </div>

                {/* User Info */}
                <div className="text-center space-y-1">
                    <h2 className="text-2xl font-semibold">{user?.displayName || "Anonymous User"}</h2>
                    <p className="text-sm">{user?.email || "Email not available"}</p>
                </div>

                {/* Button */}
                <div className="mt-6 flex justify-center">
                    <button className={`px-5 py-2 rounded-lg font-medium transition ${buttonClass}`}>
                        Forgot Password
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Myprofile;
