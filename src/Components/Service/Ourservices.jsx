import { useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../../Provider/AuthContext";


export const Ourservices = () => {
    const { mode } = useContext(AuthContext);

    const textColor = mode ? "text-white" : "text-gray-900";
    const subTextColor = mode ? "text-gray-300" : "text-gray-600";
    const bgBadge = mode ? "bg-purple-700 text-white" : "bg-purple-100 text-purple-800";
    const bgcolour = mode ? 'bg-neutral-800 ' : 'bg-neutral-100'

    const services = [
        {
            icon: "🏠",
            title: "Roommate Matching",
            description: "Get matched with roommates that fit your preferences, lifestyle, and budget seamlessly.",
        },
        {
            icon: "📍",
            title: "Verified Listings",
            description: "Browse only verified rooms and apartments so you don’t waste time on fake listings.",
        },
        {
            icon: "🛡️",
            title: "Secure Messaging",
            description: "Chat safely with potential roommates before making a decision. No need to share personal info.",
        },
        {
            icon: "📅",
            title: "Availability Tracking",
            description: "See real-time availability of rooms and roommates so you never miss an opportunity.",
        },
        {
            icon: "📞",
            title: "Direct Contact Info",
            description: "Access phone numbers and emails after mutual interest to speed up your search process.",
        },
        {
            icon: "📊",
            title: "Lifestyle Compatibility Score",
            description: "Check lifestyle matching scores based on habits, sleep schedules, and cleanliness levels.",
        },
    ];


    return (
        <div className="w-[96%] mx-auto py-20   lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-center mb-12"
            >
                <p className={`inline-block px-4 py-1 mb-4 text-xs font-semibold uppercase rounded-full ${bgBadge}`}>
                    Our Services
                </p>
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textColor}`}>
                    Designed to make your roommate journey smooth 🧳
                </h2>
                <p className={`text-md md:text-lg ${subTextColor}`}>
                    Explore what we offer to make your housing search easy, safe, and effective.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, type: "spring", stiffness: 70 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className={`p-6 rounded-sm ${bgcolour} shadow-lg`}
                    >
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>{service.title}</h3>
                        <p className={`text-sm ${subTextColor}`}>{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
