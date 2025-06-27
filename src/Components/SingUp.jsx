import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { Bounce, toast } from 'react-toastify';

const SingUp = () => {
    const [show, setShow] = useState(false);
    const Navigate = useNavigate();
    const [error, setError] = useState('');
    const { handleRegister, updateProfileUser, setUser, googleSingin, mode } = useContext(AuthContext);

    useEffect(() => {
        document.getElementById('titles').innerText = 'Signup Page';
    }, []);

    const handleSingUpFrom = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const info = Object.fromEntries(formData.entries());
        const { email, password, photo, name } = info;
        setError('');

        const regex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!regex.test(password)) {
            setError(
                'Be at least 8 characters. Contain at least one uppercase, lowercase, number, and special character.'
            );
            return;
        }

        handleRegister(email, password)
            .then((data) => {
                updateProfileUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...data, displayName: name, photoURL: photo });
                        Navigate('/');
                        toast.success('Account Created Successfully!', {
                            position: 'top-right',
                            autoClose: 5000,
                            theme: 'dark',
                            transition: Bounce,
                        });
                    })
                    .catch((error) => {
                        setError(error.message);
                        setUser(data);
                    });
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const handleGoolgleLogin = () => {
        googleSingin()
            .then(() => {
                Navigate('/');
                toast.success('Login Successfully!', {
                    position: 'top-right',
                    autoClose: 5000,
                    theme: 'dark',
                    transition: Bounce,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className={`w-full px-4 pt-12 pb-30 -mb-15 ${mode ? 'bg-black text-white' : 'bg-gray-100 text-gray-800'}`}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                {/* Left Text Content */}
                <div className="space-y-6 px-4">
                    <h1 className="text-4xl font-bold text-teal-500">👯‍♂️ Roommates Registration</h1>
                    <p className="text-lg leading-relaxed">
                        Create your account to find like-minded roommates, share spaces, and live in harmony.
                        Our platform helps you match with the best roommates based on preferences like lifestyle,
                        budget, and location.
                    </p>
                    <p className="text-base text-teal-600 font-medium">
                        It's fast, secure, and 100% free to get started!
                    </p>
                </div>

                {/* Signup Form */}
                <div
                    className={`duration-700 border border-teal-200 p-8 rounded-sm w-full ${mode ? 'bg-neutral-800' : 'bg-gray-200'
                        }`}
                >
                    <h1 className="text-2xl font-bold text-center text-teal-600">Sign up</h1>
                    <p className="text-red-500 my-2">{error}</p>

                    <form onSubmit={handleSingUpFrom} className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="name" className="block">Username</label>
                            <input
                                required
                                type="text"
                                name="name"
                                placeholder="Your username"
                                className="w-full px-4 py-3 rounded-md bg-white text-black"
                            />
                        </div>

                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block">Email</label>
                            <input
                                required
                                type="email"
                                name="email"
                                placeholder="Your valid email"
                                className="w-full px-4 py-3 rounded-md bg-white text-black"
                            />
                        </div>

                        <div className="space-y-1 text-sm">
                            <label htmlFor="photo" className="block">Photo URL</label>
                            <input
                                required
                                type="text"
                                name="photo"
                                placeholder="Your photo URL"
                                className="w-full px-4 py-3 rounded-md bg-white text-black"
                            />
                        </div>

                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block">Password</label>
                            <input
                                required
                                type={show ? 'text' : 'password'}
                                name="password"
                                placeholder="Password"
                                className="w-full px-4 py-3 rounded-md bg-white text-black"
                            />
                        </div>

                        <div className="text-sm">
                            <input onClick={() => setShow(!show)} type="checkbox" className="mr-2" />
                            <span>Show Password</span>
                        </div>

                        <button
                            className={`block w-full p-3 text-center rounded-sm font-semibold ${mode ? 'bg-teal-600 text-white' : 'bg-white text-teal-600'
                                }`}
                        >
                            Sign up
                        </button>
                    </form>

                    <div className="mt-6 flex justify-center">
                        <button
                            onClick={handleGoolgleLogin}
                            className="btn w-full bg-white text-black border border-gray-300"
                        >
                            <svg
                                aria-label="Google logo"
                                width="16"
                                height="16"
                                viewBox="0 0 512 512"
                            >
                                <g>
                                    <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                                    <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                                    <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                                    <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                                </g>
                            </svg>
                            <span className="ml-2">Login with Google</span>
                        </button>
                    </div>

                    <p className="text-xs text-center mt-4">
                        Already have an account?{' '}
                        <Link to="/login" className="underline text-teal-600">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingUp;
