import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import axios from 'axios';

const Mylisting = () => {
    const [laod, setLoad] = useState(true);
    const [alldata, setAlldata] = useState([]);
    const { user, mode } = useContext(AuthContext);

    useEffect(() => {
        axios
            .get(`https://roomate-server-side.vercel.app/mylisting/${user?.email}`, {
                headers: {
                    authorization: `Bearer ${user?.accessToken}`,
                },
            })
            .then((res) => {
                setLoad(false);
                setAlldata(res?.data);
            })
            .catch((err) => {
                setLoad(false);
                console.log(err);
            });
    }, [user]);

    useEffect(() => {
        document.getElementById('titles').innerText = 'Mylisting page';
    }, []);

    return (
        <div className="container p-4 mx-auto">
            <h2 className="text-2xl font-semibold mb-6">My Posts</h2>

            {laod ? (
                <div className="flex justify-center mt-20">
                    <span className="loading loading-spinner loading-lg text-teal-600"></span>
                </div>
            ) : alldata.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
                        alt="Empty State"
                        className="w-32 h-32 mb-4 opacity-80"
                    />
                    <p className="text-teal-500 text-lg text-center font-medium">
                        No roommates found yet. Try adding someone!
                    </p>
                    <Link
                        to="/addtoroommate"
                        className="mt-4 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded"
                    >
                        Add Post
                    </Link>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table
                        className={`min-w-full table-auto border ${mode ? "border-gray-700" : "border-teal-500"
                            } rounded`}
                    >
                        <thead className={`${mode ? "bg-orange-400 text-white" : "bg-teal-600 text-white"}`}>
                            <tr>
                                <th className="py-3 px-4 text-left">Title</th>
                                <th className="py-3 px-4 text-left">Location</th>
                                <th className="py-3 px-4 text-left">Rent</th>
                                <th className="py-3 px-4 text-center">Room Type</th>
                                <th className="py-3 px-4 text-start">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alldata?.map((item, index) => (
                                <tr
                                    key={item._id}
                                    className={`${mode
                                            ? index % 2 === 0
                                                ? "bg-gray-900"
                                                : "bg-gray-800"
                                            : index % 2 === 0
                                                ? "bg-teal-50"
                                                : "bg-white"
                                        } hover:${mode ? "bg-gray-700" : "bg-teal-100"
                                        } transition`}
                                >
                                    <td className="py-3 px-4">{item?.title || "N/A"}</td>
                                    <td className="py-3 px-4">{item?.location || "N/A"}</td>
                                    <td className="py-3 px-4">${item?.rent || "N/A"}</td>
                                    <td className="py-3 px-4 text-center">{item?.roomtype || "N/A"}</td>
                                    <td className="py-3 px-4 text-center flex flex-col sm:flex-row gap-2">
                                        <Link
                                            to={`/edit/${item._id}`}
                                            className="text-sm text-white bg-teal-600 hover:bg-teal-700 px-3 py-1 rounded"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            className="text-sm text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            )}
        </div>
    );
};

export default Mylisting;
