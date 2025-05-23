import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import { useLoaderData } from 'react-router';
import DisplayRoomMatesPost from './DisplayRoomMatesPost';
import { ExtraFeature } from './ExtraFeature';
import VoteComponents from './VoteComponents';

const Home = () => {

    const data = useLoaderData()

    const [roommates, setRoommates] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [error, setError] = useState("")

    useEffect(() => {
        setRoommates(data)
    }, [data])

    useEffect(() => {
        document.getElementById('titles').innerText = "Home Page"
    }, [])

    const handlesearch = () => {

        setError("")
        fetch(`http://localhost:4000/allMates/${searchValue}`)
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
        <div>

            <Hero></Hero>
            <p className='text-red-500'>
                {error && error}
            </p>
            <div className='sm:w-[70%] w-[95%]  mx-auto my-4 p-2 flex scale-105 '>
                <input onChange={(e) => setSearchValue(e.target.value)} placeholder='search roommate by location' type="text" name="search roomate" className='border w-full px-5 sm:py-4 py-2 rounded-l-full border-teal-300' id="" />
                <button onClick={() => handlesearch()} className='bg-teal-600 sm:px-10 px-4 cursor-pointer text-white font-semibold  rounded-r-full'>search</button>
            </div>
            <div className='my-10  w-[98%] mx-auto grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-2'>
                {
                    roommates.length ? roommates?.map((post) => <DisplayRoomMatesPost key={post?._id} roommates={post} ></DisplayRoomMatesPost>) : <div className="flex w-[100% col-span-4 mx-auto  flex-col items-center justify-center text-center py-20">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                            alt="Not Found"
                            className="w-32 h-32 mb-6 opacity-80"
                        />
                        <h2 className="text-xl font-semibold text-teal-600"> <span className='text-red-600 text-2xl'>Sorry!</span> Empty Post</h2>
                    </div>
                }
            </div>

            <ExtraFeature></ExtraFeature>
            <VoteComponents></VoteComponents>
        </div>
    );
};

export default Home;