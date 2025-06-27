import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthContext';


const PromotionSection = () => {
    const { mode } = useContext(AuthContext);

    return (
        <div className={`pt-16 pb-30 -mb-15 px-6  md:px-20 ${mode ? 'bg-gray-900 text-white' : 'bg-orange-50 text-gray-900'}`}>
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* 🖼️ Left: Promo Image */}
                <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                        className="w-full h-full object-cover"
                        src="https://i.ibb.co/hRGnYQG9/start-up-7449194-1280.png"
                        alt="Roommate Promo"
                    />
                </div>

                {/* 🏷️ Right: Offer Content */}
                <div className="space-y-6">
                    <span className="inline-block bg-orange-500 text-white font-bold py-1 px-3 rounded-full text-sm shadow-md">
                        🔥 20% OFF - Limited Time!
                    </span>
                    <h2 className="text-4xl font-bold text-teal-600">Find Your Perfect Roommate & Save Big!</h2>
                    <p className="text-lg leading-relaxed">
                        For a limited time, sign up and get 20% off your premium membership. Unlock verified roommate
                        matches, priority listings, and advanced filters to find your perfect match.
                    </p>
                    <button className={`mt-4 px-6 py-3 rounded-lg font-semibold shadow-md transition-all
            ${mode ? "bg-teal-500 text-white hover:bg-teal-600" : "bg-teal-500 text-white hover:bg-orange-600"}`}>
                        Claim Offer Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PromotionSection;
