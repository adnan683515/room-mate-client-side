import { useContext } from "react";
import { AuthContext } from './../Provider/AuthContext';

export const ExtraFeature = () => {

    const { mode } = useContext(AuthContext)



    return (
        <div className="px-4 py-16 mx-auto    md:px-24 lg:px-8 lg:py-20">
            <div className=" mb-10 md:mx-auto sm:text-center   md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        our  Best Platfrom
                    </p>
                </div>
                <h2 className={`max-w-lg ${mode ? "text-white" : "text-black"}  mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto`}>
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="3071a3ad-db4a-4cbe-ac9a-47850b69e4b7"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#3071a3ad-db4a-4cbe-ac9a-47850b69e4b7)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">Our</span>
                    </span>{' '}
                    Support Team’s got your back — anytime, anywhere 💬
                </h2>
                <p className={`${mode ? "text-white" : "text-gray-700 "} md:text-lg`}>
                    We're here to help — your <span className="text-3xl font-semibold text-teal-500">roommate</span> journey matters to us 💚
                </p>
            </div>
            <div className="grid  sm:w-[90%] w-full gap-8 lg:grid-cols-2 sm:mx-auto">
                <div className="flex flex-col justify-center">
                    <div className="flex">
                        <div className="mr-4">
                            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-200">
                                <svg
                                    className="w-8 h-8 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-2 font-semibold leading-5">
                                👨‍💻 Meet Our Support Team
                            </h6>
                            <p className="text-sm ">
                                Our support team is here to make your experience smooth and stress-free. Whether you’re facing a tech hiccup, have a question, or just need a little guidance, we’ve got your back. Friendly, fast, and always ready to help — reach out anytime!
                            </p>
                            <hr className="w-full my-6 border-gray-300" />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="mr-4">
                            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-200">
                                <svg
                                    className="w-8 h-8 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-2 font-semibold leading-5">
                                💬 Friendly & Fast Support
                            </h6>
                            <p className="text-sm ">
                                Need help? Our awesome support team is always just a message away. We’re real humans (no bots!) and we actually care. Whether it’s a question, issue, or feedback — hit us up. We’re here for you!
                            </p>
                            <hr className="w-full my-6 border-gray-300" />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="mr-4">
                            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-200">
                                <svg
                                    className="w-8 h-8 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-2 font-semibold leading-5">
                                📞 Always Within Reach
                            </h6>
                            <p className="text-sm ">
                                Got questions? Our support team is ready 24/7 to help you out. Fast replies, real solutions, and good energy only. Let us handle the stress so you can focus on what matters.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <img
                        className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
                        src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt=""
                    />
                    <img
                        className="object-cover w-full h-48 rounded shadow-lg"
                        src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt=""
                    />
                    <img
                        className="object-cover w-full h-48 rounded shadow-lg"
                        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};