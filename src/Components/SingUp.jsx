import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { Bounce, toast } from 'react-toastify';



const SingUp = () => {


    const [show, setShow] = useState(false)

    const Navigate = useNavigate()
    const [error, setError] = useState('')
    const { handleRegister, updateProfileUser, setUser, googleSingin ,mode } = useContext(AuthContext)

    useEffect(() => {
        document.getElementById('titles').innerText = "Singup Page"
    }, [])
    const handleSingUpFrom = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const info = Object.fromEntries(formData.entries())
        const { email, password, photo, name } = info
        setError('')

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!regex.test(password)) {
            setError("Be at least 8 characters. Contain at least one uppercase letter,Contain at least one lowercase letter,Contain at least one digit. Contain at least one special character (like @, #, $, %, etc.)")
            return
        }

        handleRegister(email, password)
            .then((data) => {

                updateProfileUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...data, displayName: name, photoURL: photo })

                        Navigate('/')
                        toast.success('Account Created Successfully!', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            transition: Bounce,
                        });

                    })
                    .catch((error) => {
                        setError(error.message)
                        setUser(data)
                    })
            })
            .catch((error) => {
                setError(error.message)
            })


    }

    const handleGoolgleLogin = () => {

        googleSingin()
            .then(() => {

                Navigate('/')
                toast.success('Login Successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return (
        <div className='py-10'>
            <div className={`sm:w-[60%] md:w-[35%] w-[90%] mx-auto sm:mt-0 mt-10 hover:scale-95 duration-700  border border-teal-200 p-8 rounded-tl-4xl space-y-3 rounded-br-4xl ${mode ? "bg-netural-800" : "bg-gray-200 "} `}>
                <h1 className="text-2xl font-bold text-center text-teal-600">Sign up</h1>
                <p className='text-red-500 my-1'> {error ? error : ''} </p>
                <form onSubmit={handleSingUpFrom} noValidate="" action="" className="space-y-6">

                    <div className="space-y-1 text-sm">
                        <label htmlFor="name" className="block dark:text-gray-600">Username</label>
                        <input required type="text" name="name" id="name" placeholder="Your username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 bg-white  text-black focus:dark:border-fuchsia-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                        <input required type="email" name="email" id="email" placeholder="Your Valid Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 bg-white text-black focus:dark:border-fuchsia-600" />

                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="photo" className="block dark:text-gray-600">Your Photo</label>
                        <input required type="text" name="photo" id="photo" placeholder="your photo url" className="w-full px-4 py-3 rounded-md dark:border-gray-300 bg-white text-black focus:dark:border-fuchsia-600" />

                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                        <input required type={show ? 'text' : 'password'} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 bg-white text-black focus:dark:border-fuchsia-600" />

                    </div>

                    <div className='space-y-1 text-sm'>
                        <input onClick={() => setShow(!show)} type="checkbox" id="" /> <span>show password</span>
                    </div>
                    <button className={`block w-full p-3 text-center rounded-sm dark:text-gray-50 ${mode? "bg-teal-600 text-white":"bg-white text-teal-600"} font-semibold`}>Sign up</button>
                </form>

                <div className="flex  justify-center ">
                    <button onClick={handleGoolgleLogin} className="btn w-full  bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>


                </div>
                <p className="text-xs text-center sm:px-6 dark:text-gray-600">Already create Account?
                    <Link to={'/login'} rel="noopener noreferrer" className="underline dark:text-gray-800">login</Link>
                </p>

            </div>
        </div>
    );
};

export default SingUp;