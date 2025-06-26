import { useContext } from "react";
import { AuthContext } from "./../Provider/AuthContext";
import { motion } from 'framer-motion';

export const ExtraFeature = () => {
    const { mode } = useContext(AuthContext);

    const textColor = mode ? "text-white" : "text-gray-900";
    const subTextColor = mode ? "text-gray-300" : "text-gray-700";
    const bgBadge = mode ? "bg-teal-700 text-white" : "bg-teal-100 text-teal-800";
    const bgcolour = mode ? 'bg-neutral-800 ' : 'bg-neutral-100'
    return (
        <div className="py-16 relative  overflow-hidden w-[96%]  mx-auto  lg:px-8 lg:py-20">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    duration: .5,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 80,
                }}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-12 text-center"
            >
                <p className={`inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase rounded-full ${bgBadge}`}>
                    Our Best Platform
                </p>
                <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${textColor}`}>
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-200 sm:block"
                        >
                            <defs>
                                <pattern id="dots" x="0" y="0" width=".135" height=".30">
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect fill="url(#dots)" width="52" height="24" />
                        </svg>
                        <span className="relative z-10">Our</span>
                    </span>{" "}
                    Support Team’s got your back — anytime, anywhere 💬
                </h2>
                <p className={`md:text-lg ${subTextColor}`}>
                    We're here to help — your{" "}
                    <span className="text-2xl font-semibold text-teal-600">roommate</span>{" "}
                    journey matters to us 💚
                </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-6 items-start">
                {/* 🟩 Left Side with Animation from Left */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="lg:w-1/2  space-y-6"
                >
                    {[
                        {
                            icon: "👨‍💻",
                            title: "Meet Our Support Team",
                            desc: "Our support team is here to make your experience smooth and stress-free. Whether you’re facing a tech hiccup, have a question, or just need a little guidance, we’ve got your back.",
                        },
                        {
                            icon: "💬",
                            title: "Friendly & Fast Support",
                            desc: "Need help? Our awesome support team is always just a message away. We’re real humans (no bots!) and we actually care. Whether it’s a question, issue, or feedback — hit us up.",
                        },
                        {
                            icon: "📞",
                            title: "Always Within Reach",
                            desc: "Got questions? Our support team is ready 24/7 to help you out. Fast replies, real solutions, and good energy only. Let us handle the stress so you can focus on what matters.",
                        },
                    ].map((item, i) => (
                        <div key={i} className={`flex shadow-lg ${bgcolour} p-3 rounded-sm `}>
                            <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-full bg-teal-100">
                                <span className="text-xl">{item.icon}</span>
                            </div>
                            <div>
                                <h6 className={`mb-2 font-semibold text-lg ${textColor}`}>{item.title}</h6>
                                <p className={`text-sm ${subTextColor}`}>{item.desc}</p>
                                {i !== 2 && <hr className="my-4 border-gray-300" />}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* 🟦 Right Side with Animation from Right */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="grid grid-cols-2  gap-4 sm:w-full lg:w-1/2 "
                >
                    <img
                        src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                        alt=""
                        className="object-cover sm:col-span-2 border w-full h-56 col-span-2 rounded-lg shadow-md"
                    />
                    <img
                        src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
                        alt=""
                        className="object-cover w-full h-48 rounded-lg shadow-md"
                    />
                    <img
                        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                        alt=""
                        className="object-cover w-full h-48 rounded-lg shadow-md"
                    />
                </motion.div>
            </div>
        </div>
    );
};
