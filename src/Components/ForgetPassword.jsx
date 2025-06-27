import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthContext';

export default function ForgetPassword() {


    const { handlePassword, mode } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState("")
    // Swal.fire({
    //             icon: "error",
    //             title: "Password Doesn't Match!",
    //             text: "Something went wrong!",
    //             footer: '<a href="#">Why do I have this issue?</a>'
    //         });

    const handleUpdate = (e) => {
        e.preventDefault()
        setError("")
        setSuccess("")


        const email = e.target.email.value

        handlePassword(email)
            .then(() => {
                setSuccess("Check Your Email please")
            })
            .catch((error) => {
                setError(error.message)
            })


    };

    return (
        <div className='pb-30 -mb-15 flex justify-center items-center'>
            <form onSubmit={handleUpdate} className={`max-w-sm mx-auto w-[80%]  p-6  shadow-md rounded-xl border ${mode ? "bg-netural-800" : "bg-white "} border-teal-300`}>
                <h2 className="text-2xl font-bold text-teal-700 mb-4">Update Password</h2>
                <p className='text-red-500 py-2'> {
                    error && error
                }</p>

                <p className='text-green-500 py-2'> {
                    success && success
                }</p>
                <div className="mb-6">
                    <label className="block text-teal-700 font-medium mb-2" htmlFor="confirm-password">
                        Your Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        required
                        name='email'
                        placeholder='Enter Your Email'
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                </div>

                <button

                    className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-200"
                >
                    send email
                </button>
            </form>
        </div>
    );
}
