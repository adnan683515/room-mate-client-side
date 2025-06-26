import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import DisplayMylisting from './DisplayMylisting';
import { AuthContext } from '../Provider/AuthContext';
import axios from 'axios';
import DisplayRoomMatesPost from './DisplayRoomMatesPost';
import { motion } from 'framer-motion';

const Mylisting = () => {

    const [laod, setLoad] = useState(true)
    const [alldata, setAlldata] = useState([])
    const { user, mode } = useContext(AuthContext)



    useEffect(() => {
        axios.get(`https://roomate-server-side.vercel.app/mylisting/${user?.email}`, {
            headers: {
                authorization: `Bearer ${user?.accessToken}`
            }
        })
            .then((res) => {
                setLoad(false)
                setAlldata(res?.data)
            })
            .catch((err) => {
                setLoad(false)
                console.log(err)
            })


    }, [alldata, user])
    useEffect(() => {
        document.getElementById('titles').innerText = "Mylisting page"
    }, [])
    return (
        <div className=''>
            <div className="container  p-2 mx-auto sm:p-4 dark:text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight"> My Posts </h2>

                {
                    laod ? <div className="flex mt-20 justify-center items-center">
                        <span className="loading loading-spinner text-teal-600"></span>
                    </div> : <div>
                        <div


                            className='grid relative overflow-hidden grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                            {
                                alldata?.map((item, index) => {
                                    return <motion.div
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }} // 👈 অর্থাৎ ২০% ভিউতে আসলেই animate হবে
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.15, // 👈 delay একটু কম রাখলে বেশি smooth লাগবে
                                        type: "spring",
                                        stiffness: 40, // 👈 spring কতটা bounce করবে
                                        damping: 15,    // 👈 smoothness control করে
                                    }}

                                    >
                                        <DisplayRoomMatesPost


                                            roommates={item} mode={mode} key={item?._id} ></DisplayRoomMatesPost>
                                    </motion.div>
                                })
                            }

                        </div>

                        <div>
                            {
                                alldata?.length === 0 && <div className="flex w-[100%] mx-auto  flex-col items-center justify-center py-10">
                                    {/* Empty Image from web */}
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
                                        alt="Empty State"
                                        className="w-32 h-32 mb-4 opacity-80"
                                    />

                                    {/* Teal Text */}
                                    <p className="text-teal-500 text-lg text-center  font-medium">
                                        No roommates found yet. Try adding someone!
                                    </p>
                                    <div className='mt-4'>
                                        <Link to={'/addtoroommate'} className='px-3 py-2  bg-teal-600 text-white mt-1'> Add Post </Link>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }

            </div>
        </div>
    );
};

export default Mylisting;