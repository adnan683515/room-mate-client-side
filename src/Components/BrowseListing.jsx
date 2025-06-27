import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import TableDisplayrow from './TableDisplayrow';
import All_room_matesLayout from './All-Room-mates/All_room_matesLayout';
import axios from 'axios';
import { AuthContext } from '../Provider/AuthContext';

const BrowseListing = () => {

    const [data, setData] = useState([])
    const [load, setLoading] = useState(false)
    const [error, setError] = useState("")
    const result = useLoaderData()
    const { mode } = useContext(AuthContext)
    const [price, setPrice] = useState([])
    const [order,setOder] = useState("")

    useEffect(() => {
        setLoading(false)
        setData(result)

        const filterPrice = result?.map((item) => parseInt(item?.rent))
        const max = Math.max(...filterPrice)
        const min = Math.min(...filterPrice)
        const maxMin = [min, max]
        setPrice(maxMin)

        document.getElementById('titles').innerText = "BroweListing Page"
    }, [order])


    const handleAccendingOrder = (value) => {
        if (value === 'accending') {
            const filterAccending = data?.sort((a, b) => parseInt(a.rent) - parseInt(b.rent))
            console.log("accending", filterAccending)
            setOder("accending")
            setData(filterAccending)
        }
        else {
            const filterAccending = data?.sort((a, b) => parseInt(b.rent) - parseInt(a.rent))
            console.log("decendding", filterAccending)
            setOder("decendding")
            setData(filterAccending)
        }
    }

    const handlesearch = (value) => {
        setError("")
        fetch(`https://roomate-server-side.vercel.app/allMatesss?search=${value}`)
            .then((res) => res.json())
            .then((found) => {
                setData(found)
                console.log(found)
            })
            .catch((error) => {
                setError(error.message)
            }
            )
    }

    const handleRating = (value) => {
        axios.get(`https://roomate-server-side.vercel.app/allMatesss?rating=${parseInt(value)}`)
            .then((res) => {
                console.log(res)
            })
            .then((err) => {
                console.log(err)
            })
    }

    const handleRoomtype = (value) => {
        // console.log("handle room type", value)
        axios.get(`https://roomate-server-side.vercel.app/allMatesss?roomType=${value}`)
            .then((res) => {
                setData(res?.data)
            })
            .then((err) => {
                console.log(err)
            })
    }
    const handleprice = (value) => {

        try {
            axios.get(`https://roomate-server-side.vercel.app/allMatesss?price=${value}`)
                .then((res) => {
                    console.log(res)
                })

        }
        catch {
            //
        }

    }
    const handleLifeStyleOnchange = (value) => {
        // console.log(encodeURIComponent(value))
        const encode = encodeURIComponent(value)

        axios.get(`https://roomate-server-side.vercel.app/allMatesss?life=${encode}`)
            .then((res) => {
                setData(res?.data)
                // console.log(res?.data)
            })
            .then((err) => {
                console.log(err)
            })
    }




    return (
        <div className='-mb-14 pb-20 relative overflow-hidden'>

            <div
                className="relative w-[98%] mx-auto h-[60vh] bg-center bg-cover"
                style={{
                    borderRadius: '6px',
                    backgroundImage: `url('https://i.ibb.co/M5CQzr1d/pexels-fauxels-3184419.jpg')`,
                }}
            >
                {/* Overlay */}
                <div className={`absolute inset-0 ${mode ? 'bg-black/60' : 'bg-white/10  '}`}></div>

                {/* Centered Text */}
                <div className="relative overflow-hidden  flex flex-col items-center justify-center text-center h-full px-4 md:px-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-snug">
                        Welcome to the <span className="text-teal-400">All Rooms</span> Page
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg max-w-2xl">
                        Explore different types of rooms and find what suits your preferences. Use the filters and search to narrow down your options.{' '}
                        <span className="text-orange-400 font-semibold">Let’s find your perfect stay!</span>
                    </p>
                </div>
            </div>


            <div className=" p-2 mx-auto sm:p-4 ">
                <div className='sm:flex mt-4 sm:mt-0 justify-between'>
                    <h2 className="mb-4 sm:text-2xl text-xl sm:text-start text-center font-semibold leading-tight">All Post showing</h2>

                    <div className='hidden sm:block'>
                        <div className='flex  gap-2 my-2 sm:my-0'>
                            <div className='flex justify-center items-center'>
                                <input onChange={(e) => handlesearch(e.target.value)} className='px-2 py-1 rounded-tl-xl rounded-br-xl border  border-teal-500' placeholder='search by location' type="text" name="search" id="" />
                            </div>
                            <div className='flex justify-center items-center'>
                                <button onClick={handlesearch} className='px-2 rounded-bl-xl rounded-tr-xl py-1 bg-teal-600 text-white'>search</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>

                </div>

                <div>
                    <All_room_matesLayout handleAccendingOrder={handleAccendingOrder} handleLifeStyleOnchange={handleLifeStyleOnchange} handleprice={handleprice} price={price} handleRoomtype={handleRoomtype} handleRating={handleRating} load={load} data={data}></All_room_matesLayout>
                </div>


            </div>
        </div >
    );
};

export default BrowseListing;