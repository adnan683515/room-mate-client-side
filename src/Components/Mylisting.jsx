import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import DisplayMylisting from './DisplayMylisting';

const Mylisting = () => {

    const data = useLoaderData()
    const [alldata, setAlldata] = useState([])
    useEffect(() => {
        setAlldata(data)
    }, [data])
    useEffect(()=>{
        document.getElementById('titles').innerText="Mylisting page"
    },[])
    return (
        <div>
            <div className="container  p-2 mx-auto sm:p-4 dark:text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight"> My Posts </h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="bg-teal-600 ">
                            <tr className="text-left">
                                <th className="p-3">Title</th>
                                <th className="p-3">Location</th>
                                <th className="p-3">Room Type</th>
                                <th className="p-3"> Rent Amount </th>
                                <th className="p-3 text-right">Likes</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {alldata.map((item) => (
                                <DisplayMylisting
                                    key={item?._id}
                                    listdata={item}
                                    alldata={alldata}
                                    setAlldata={setAlldata}
                                />
                            ))}


                        </tbody>

                    </table>
                </div>

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
    );
};

export default Mylisting;