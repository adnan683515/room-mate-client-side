import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import TableDisplayrow from './TableDisplayrow';

const BrowseListing = () => {

    const [data, setData] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [error,setError] = useState("")
    const result = useLoaderData()
    useEffect(() => {
        setData(result)
        document.getElementById('titles').innerText = "BroweListing Page"
    }, [result])

    const handlesearch = () => {
        setError("")
        fetch(`https://roomate-server-side.vercel.app/allMates/${searchValue}`)
            .then((res) => res.json())
            .then((found) => {
                setData(found)
            })
            .catch((error) => {
                setError(error.message)
            }
            )
    }

    return (
        <div>
            <p className='text-red-500'> {error && error} </p>
            <div className="container p-2 mx-auto sm:p-4 ">
                <div className='sm:flex mt-4 sm:mt-0 justify-between'>
                    <h2 className="mb-4 sm:text-2xl text-xl sm:text-start text-center font-semibold leading-tight">All Post showing</h2>
                    <div className='flex flex-col sm:flex-row  gap-2 my-2 sm:my-0'>
                        <div className='flex justify-center items-center'>
                            <input onChange={(e) => setSearchValue(e.target.value)} className='px-2 py-1 rounded-tl-xl rounded-br-xl border  border-teal-500' placeholder='search by location' type="text" name="search" id="" />
                        </div>
                        <div className='flex justify-center items-center'>
                            <button onClick={handlesearch} className='px-2 rounded-bl-xl rounded-tr-xl py-1 bg-teal-600 text-white'>search</button>
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full p-6  text-xs text-left whitespace-nowrap">
                        <colgroup>
                            <col className="w-5" />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-5" />
                        </colgroup>
                        <thead>
                            <tr className="bg-teal-600 ">

                                <th className="p-3">Name</th>
                                <th className="p-3">title</th>
                                <th className="p-3">Location</th>
                                <th className="p-3">Room type</th>
                                <th className="p-3">Available</th>
                                <th className="p-3">Action</th>

                            </tr>
                        </thead>

                        {
                            data.map((item) => <TableDisplayrow mates={item} key={item?._id} ></TableDisplayrow>)
                        }




                    </table>
                </div>
                {
                    data?.length === 0 && <div className="flex w-[100%] mx-auto  flex-col items-center justify-center py-10">
                        {/* Empty Image from web */}
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
                            alt="Empty State"
                            className="w-32 h-32 mb-4 opacity-80"
                        />

                        {/* Teal Text */}
                        <p className="text-teal-500 text-lg font-medium">
                            No roommates found yet. Try adding someone!
                        </p>
                    </div>
                }
            </div>
        </div>
    );
};

export default BrowseListing;