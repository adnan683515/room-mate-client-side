

import { useParams } from "react-router";
import { AiTwotoneLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";




export const Details = () => {

    const params = useParams()

    const [like, setLike] = useState(false)
    const [detailsData, setDetailsDta] = useState({})
    const { user, loading } = useContext(AuthContext)

    const { photo, title, des, location, rent, roomtype, life, Availability, _id, number, email ,username } = detailsData

    console.log(user?.email, email)

    useEffect(() => {
        document.getElementById('titles').innerText = "Details Page"
    }, [])

    useEffect(() => {
        fetch(`http://localhost:4000/allMatess/${params?.id}`)
            .then((res) => res.json())
            .then((data) => {
                setDetailsDta(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [like])
    useEffect(() => {
        fetch(`http://localhost:4000/likes/${params?.id}/${user?.email}`)
            .then((res) => res.json())
            .then((result) => {
                console.log(result)

            })
            .catch((error) => {
                console.log(error)
            })
    }, [])





    const handleUpdateLike = (id) => {
        const updateData = detailsData
        fetch(`http://localhost:4000/roommate/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(updateData)
        })
            .then((res) => {
                if (res.ok) {
                    res.json()
                    setLike(!like)
                }
            })
            .then((data) => {
                if (data?.modifiedCount) {
                    setLike(!like)
                    // const email = user?.email
                    // const likeinfo = { roommate_id: id, email }
                    // fetch('http://localhost:4000/likes', {
                    //     method: "POST",
                    //     headers: {
                    //         "Content-type": "application/json"
                    //     },
                    //     body: JSON.stringify(likeinfo)
                    // })
                    //     .then((respon) => respon.json())
                    //     .then(() => {

                    //     })
                    //     .catch((error) => {
                    //         console.log(error)
                    //     })
                }


            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            {title}
                            <br className="hidden md:block" />


                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            {des}
                        </p>
                    </div>
                    <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                        <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                            <div className="h-full p-5 border border-l-0 rounded-r">
                                <h6 className="mb-2 font-semibold leading-5">
                                    Location: {location}
                                </h6>
                                <p className="text-sm text-gray-900">
                                    Rent Amount: {rent}
                                </p>
                                <p className="text-sm text-gray-900">
                                    Room Type: {roomtype}
                                </p>
                            </div>
                        </div>
                        <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                            <div className="h-full p-5 border border-l-0 rounded-r">
                                <h6 className="mb-2 font-semibold leading-5">
                                   username: {username}
                                </h6>
                                <p className="text-sm text-gray-900">
                                    Life Style: {life}
                                </p>
                                <p className="text-sm my-2 rounded-md  bg-green-500 px-2 py-2">
                                    Availability: <span className="text-white">{Availability}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 flex gap-2 ">

                        {
                            loading ? "asdfasfsda" : user?.email !== email && <AiTwotoneLike onClick={() => handleUpdateLike(_id)} className="cursor-pointer" size={40} ></AiTwotoneLike>
                        }

                        <div className="flex justify-center items-center">
                            <h1>  <span className="">Total Likes</span> : {detailsData?.like} </h1>
                        </div>
                    </div>
                    <div className="mt-2">
                        {
                            like && `Contact Number : ${number}`
                        }
                    </div>
                </div>
                <div>
                    <img
                        className="object-cover rounded-bl-4xl rounded-tr-4xl w-full h-56  shadow-lg sm:h-96"
                        src={photo}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};