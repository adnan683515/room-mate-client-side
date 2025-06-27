import React, { useContext, useEffect, useRef, useState } from 'react';
import Hero from './Hero';
import { useLoaderData } from 'react-router';
import DisplayRoomMatesPost from './DisplayRoomMatesPost';
import { ExtraFeature } from './ExtraFeature';
import VoteComponents from './VoteComponents';
import { AuthContext } from '../Provider/AuthContext';
import { TypeWriter } from './TypeWriter';
import { motion } from 'framer-motion';
import { Ourservices } from './Service/Ourservices';
import Slider from './Slider/Slider';
import AboutUs from './About/AboutUs';
import PromotionSection from './PromotionSection/PromotionSection';



const Home = () => {

    const data = useLoaderData()


    const [roommates, setRoommates] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [error, setError] = useState("")
    const { mode ,handlePromoitns ,promotions } = useContext(AuthContext)
    const commentRef = useRef(null);

    const scrollToComments = () => {
        commentRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        setRoommates(data)
    }, [data])

    useEffect(() => {
        document.getElementById('titles').innerText = "Home Page"
    }, [])

    const handlesearch = () => {

        setError("")
        fetch(`https://roomate-server-side.vercel.app/allMatesss?search=${searchValue}`)
            .then((res) => res.json())
            .then((data) => {
                setRoommates(data)
            })
            .catch((error) => {
                setError(error.message)
            }
            )
    }

    return (
        <div className={`${mode ? "bg-black text-white" : "bg-white text-black"}`}>




            <div className='mb-2'>
                <Slider onGetStartedClick={scrollToComments}></Slider>
            </div>

            <div className={`sm:w-[70%]  w-[95%]  mx-auto my-4 p-2 flex scale-105`}>
                <input onChange={(e) => setSearchValue(e.target.value)} placeholder='search roommate by location' type="text" name="search roomate" className={`border w-full px-5 sm:py-4 py-2 rounded-l-full border-teal-300 ${mode ? 'bg-gray-900 text-white':'bg-white text-black'}`} id="" />
                <button onClick={() => handlesearch()} className='bg-teal-600 sm:px-10 px-4 cursor-pointer text-white font-semibold  rounded-r-full'>search</button>
            </div>
            <div ref={commentRef} className='my-10 sm:w-[96%]  w-[98%] mx-auto grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-2'>
                {
                    roommates.length ? roommates?.map((post, index) => (
                        <motion.div

                            key={post._id}
                            initial={{ opacity: 0, y: 70 }}
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
                            <DisplayRoomMatesPost mode={mode} roommates={post} />
                        </motion.div>
                    ))



                        : <div className="flex w-[100% col-span-4 mx-auto  flex-col items-center justify-center text-center py-20">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                                alt="Not Found"
                                className="w-32 h-32 mb-6 opacity-80"
                            />
                            <h2 className="text-xl font-semibold text-teal-600"> <span className='text-red-600 text-2xl'>Sorry!</span> Empty Post</h2>
                        </div>
                }
            </div>
            <PromotionSection promotions={promotions}></PromotionSection>
            <Ourservices></Ourservices>

            <ExtraFeature></ExtraFeature>
            <AboutUs></AboutUs>

            {/* <VoteComponents></VoteComponents> */}
        </div>
    );
};

export default Home;