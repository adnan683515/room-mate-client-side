import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { Bounce, toast } from 'react-toastify';



const Login = () => {


    const [show, setShow] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { login, googleSingin, mode } = useContext(AuthContext)
    useEffect(() => {
        document.getElementById('titles').innerText = "Login Page"
    }, [])

    const handleLoginFrom = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        setError('')
        login(email, password)
            .then(() => {

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
                navigate('/')
            })
            .catch(() => {
                setError('password or email invalid!')
            })
    }

    const handleLogingoogle = () => {

        googleSingin()
            .then(() => {

                navigate('/')
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
        <div className='py-10 -mb-13'>
            <div className='flex lg:justify-around lg:flex-row flex-col'>
                <div className='flex justify-center  items-center'>
                    <div style={{

                        backgroundImage: "url(https://i.ibb.co/bgCqDkbT/Caitye-Davis.jpg)"
                    }} className={`relative bg-cover hover:scale-95 duration-1000 rounded-bl-4xl rounded-tr-4xl bg-center w-[90%] h-[70vh] sm:h-[70vh] md:h-[55vh] mb-5 sm:mb-0  text-white`}>



                        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Find Your <span className=''>Perfect</span>  Roommate</h1>
                            <p className="text-base sm:text-lg md:text-xl max-w-xl">
                                Discover chill people to share your space with. No drama, just good vibes.
                            </p>
                        </div>
                    </div>

                </div>

                <div className={`sm:w-[80%] md:w-[35%] w-[98%] mx-auto sm:mt-0 mt-10 hover:scale-95 duration-700  border border-teal-200 p-8 rounded-tl-4xl space-y-3 rounded-br-4xl ${mode ? "bg-black" : "bg-gray-200 "} dark:text-gray-800 `}>
                    <h1 className="text-2xl font-bold text-center text-teal-600">Login</h1>
                    <p className='text-red-500 my-1'> {error ? error : ''} </p>
                    <form onSubmit={handleLoginFrom} className="space-y-6 sm:mt-0 mt-10  ">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block dark:text-gray-600">Your Email</label>
                            <input required type="email" name="email" id="email" placeholder="Your Email" className={`
                                w-full px-4 py-3 rounded-md dark:border-gray-300 bg-white ${mode ? "text-black" : "text-black"} focus:dark:border-fuchsia-600`} />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                            <input required type={show ? 'text' : 'password'} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 bg-white text-black focus:dark:border-fuchsia-600" />
                            <div className="flex justify-end text-xs dark:text-gray-600">
                                <Link to={'/passwordForget'} rel="noopener noreferrer" href="#">Forgot Password?</Link>
                            </div>
                            <div className='flex gap-1'>
                                <input onClick={() => setShow(!show)} type="checkbox" name="" id="" />
                                <span>show password</span>
                            </div>
                        </div>
                        <button className={`block w-full p-3 text-center rounded-sm dark:text-gray-50 ${mode ? "bg-teal-600 text-white" : "bg-white"} text-teal-600 font-semibold`}>Sign in</button>
                    </form>

                    <div className="flex  justify-center ">
                        <button onClick={handleLogingoogle} className="btn w-full  bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>


                    </div>
                    <p className="text-xs text-center sm:px-6 dark:text-gray-600">Don't have an account?
                        <Link to={'/singup'} rel="noopener noreferrer" className="underline dark:text-gray-800">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;