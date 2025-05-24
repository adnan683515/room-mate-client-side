import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import Swal from 'sweetalert2';


const AddToRoomMate = () => {


    const { user,mode } = useContext(AuthContext)

    useEffect(() => {
        document.getElementById('titles').innerText = "AddToRoomMate Page"
    }, [])


    const handleAddtoFindForm = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const info = Object.fromEntries(formData.entries())
        const obj = { ...info, email: user?.email, username: user?.displayName, photo: user?.photoURL, like: 0 }




        fetch('https://roomate-server-side.vercel.app/roommate', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.insertedId) {
                    //
                    Swal.fire({
                        title: "congreess! Your Post successfully Done!",
                        icon: "success",
                        draggable: true
                    });
                    e.target.reset()
                }
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: error?.message,
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            })
    }

    return (
        <div>


            <section className="py-15 sm:w-[70%]   mx-auto -mb-13  ">
                <form  onSubmit={handleAddtoFindForm} className={`container rounded-bl-4xl rounded-tr-4xl w-full  ${mode ? "bg-neutral-800 text-white": "bg-gray-200"}  flex flex-col mx-auto space-y-12`}>
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Your Inormation</p>
                            <p className="text-xs">We’ll use your preferences to help match you with the perfect roommate. Stay tuned — your future bestie might be just around the corner 👀✨</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="title" className="text-sm">Title </label>
                                <input required name='title' id="title" type="text" placeholder="Enter the title" className="w-full bg-white text-black rounded-md  px-2 py-2 focus:ring focus:ring-opacity-75 " />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="location" className="text-sm">Location</label>
                                <input required name='location' id="location" type="text" placeholder="location your place" className="w-full text-black rounded-md focus:ring bg-white px-2 py-2 focus:ring-opacity-75   " />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="rent" className="text-sm">Rent Ammount</label>
                                <input required name='rent' id="rent" type="text" placeholder="Rent ammount of room" className="w-full text-black rounded-md focus:ring bg-white px-2 py-2 focus:ring-opacity-75 " />
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="rtype" className="text-sm">Room Type</label>
                                <select required name='roomtype' defaultValue="Pick a Runtime" className="select w-full text-black">
                                    <option selected disabled={true}>Select Your Room Type</option>
                                    <option value={"Single"} >Single</option>
                                    <option value={"Double Room"} >Double Room</option>
                                    <option value={"Twin Room"} >Twin Room</option>
                                    <option value={"Family Room"} >Family Room </option>
                                    <option value={"Triple Room"} >Triple Room</option>
                                </select>
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="life" className="text-sm">Life Styles</label>
                                <select required name='life' defaultValue="Pick a Runtime" className="select w-full text-black">
                                    <option disabled={true}>Select Your Life Styles</option>
                                    <option value={"🐱 Cat lover"} >🐱 Cat lover</option>
                                    <option value={"Non-smoker"} >Non-smoker</option>
                                    <option value={"Smoker"} >Smoker</option>
                                    <option value={"⚡Flexible sleeper (no specific routine)"} >⚡ Flexible sleeper (no specific routine) </option>
                                    <option value={"📖 Study Lover "} >📖 Study Lover </option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="life" className="text-sm">Availability </label>
                                <select required name='Availability' defaultValue="Pick a Runtime" className="select w-full text-black ">
                                    <option disabled={true}>Select Your room  space Availability </option>
                                    <option value={"available"} >available</option>


                                    <option value={"not available"} >not available</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="number" className="text-sm">Contact Number</label>
                                <input required name='number' id="rent" type="text" placeholder="your contact number" className="w-full rounded-md focus:ring bg-white px-2 py-2 focus:ring-opacity-75  " />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="des" className="text-sm">Description</label>
                                <textarea required name='des' id="des" type="text" placeholder="Your description" className="w-full text-black rounded-md focus:ring bg-white px-2 py-2 focus:ring-opacity-75  " />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Email</label>
                                <input value={user?.email} id="email" type="email" placeholder="Email" className="w-full text-black rounded-md focus:ring px-2 py-2 bg-white focus:ring-opacity-75  " />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="username" className="text-sm">username</label>
                                <input required value={user?.displayName} id="username" type="text" placeholder="" className="w-full text-black rounded-md  bg-white px-2 py-2 focus:ring focus:ring-opacity-75  " />
                            </div>


                            <div className="col-span-full ">
                                <button className='bg-teal-600 text-white py-2 rounded-l-full rounded-r-full cursor-pointer w-full'> Submit </button>
                            </div>


                        </div>
                    </fieldset>

                </form>
            </section>
        </div>
    );
};

export default AddToRoomMate;