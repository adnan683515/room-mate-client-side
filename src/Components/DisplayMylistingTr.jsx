import React from 'react';
import { Link } from 'react-router';

const DisplayMylistingTr = ({item, index, mode ,handleDelete}) => {

    return (
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
                    to={`/deshboard/updateroomMate/${item._id}`}
                    className="text-sm text-white bg-teal-600 hover:bg-teal-700 px-3 py-1 rounded"
                >
                    Edit
                </Link>
                <button onClick={() => handleDelete(item?._id)}
                    className="text-sm text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default DisplayMylistingTr;