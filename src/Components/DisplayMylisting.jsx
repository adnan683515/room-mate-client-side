import React, { useContext } from 'react';
import { FaPenToSquare } from 'react-icons/fa6';
import { FcFullTrash } from 'react-icons/fc';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthContext';
const DisplayMylisting = ({ listdata, alldata, setAlldata }) => {

    const {mode} =  useContext(AuthContext)
    // https://roomate-server-side.vercel.app/roommate/682da1f85da4ce1102665eaa

    const handleDelete = (id) => {



        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });

                fetch(`https://roomate-server-side.vercel.app/roommate/${id}`, {
                    method: "DELETE"
                })
                    .then((res) => res.json())
                    .then(() => {

                        const reminigData = alldata.filter((item) => item?._id !== id)
                        setAlldata(reminigData)
                        // deletedCount
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        });


    }

    const { title, location, roomtype, rent, like } = listdata
    return (
        <tr className={`border-b  ${mode ? "text-white":"text-black"} border-opacity-20`}>
            <td className="p-3">
                <p> {title.slice(0, 20)}</p>
            </td>
            <td className="p-3">
                <p>{location}</p>
            </td>
            <td className="p-3">

                <p className=""> {roomtype} </p>
            </td>
            <td className="p-3">

                <p className=""> {rent} </p>
            </td>
            <td className="p-3 text-right">
                <p > {like && like} Likes </p>
            </td>
            <td className="p-3 text-right">
                <div className="px-3 py-1 flex font-semibold rounded-md  ">
                    <Link to={`/updateroomMate/${listdata?._id}`}> <FaPenToSquare size={30} />   </Link>
                    <span> <FcFullTrash onClick={() => handleDelete(listdata?._id)} size={30} /> </span>
                </div>
            </td>
        </tr>
    );
};

export default DisplayMylisting;