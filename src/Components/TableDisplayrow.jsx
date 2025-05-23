import React from 'react';
import { Link } from 'react-router';

const TableDisplayrow = ({ mates }) => {

    const { title, location, roomtype, Availability ,username } = mates
    return (
        <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
            <tr>
                <td className="px-3  font-medium dark:text-gray-600"> {username}  </td>
                <td className="px-3 py-2">
                    <p>{title}</p>
                </td>
                <td className="px-3 py-2">
                    <span>{location}</span>

                </td>

                <td className="px-3 py-2">
                    <p> {roomtype} </p>
                </td>
                <td className="px-3 py-2 flex  items-center">

                    <p className="dark:text-gray-600  mt-2"> {Availability == "available" ? <span className='bg-green-500 px-2 py-2 text-white'>available</span> : <span className='bg-red-500 px-2 py-2 text-white'>not available</span>} </p>
                </td>
                <td >
                    <Link to={`/details/${mates?._id}`} className='bg-teal-600  mt-2 rounded-br-xl rounded-tl-xl px-3 py-2 text-white' >see more</Link>
                </td>
            </tr>
            <tr>
                <td className="px-3 text-2xl font-medium dark:text-gray-600"></td>

                <td className="px-3 py-3">


                </td>


                <td className="px-3 py-3">


                </td>

            </tr>
        </tbody>
    );
};

export default TableDisplayrow;