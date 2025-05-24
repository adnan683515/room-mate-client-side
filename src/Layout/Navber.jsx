import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { Bounce, toast } from 'react-toastify';


const Navber = () => {

    const { user, loading, setUser, handleLogout,mode,setMode } = useContext(AuthContext)
    const naviagte = useNavigate()

    


    const logut = () => {
        handleLogout()
            .then(() => {
                naviagte('/login'),
                    setUser(null),
                    toast.error('Logout Successfull!', {
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
    }

 




    const links = <>

        <NavLink className={'block md:hidden'} to={'/'} >Home</NavLink>
        <NavLink to={'/addtoroommate'} >Add to Find Roommate </NavLink>
        <NavLink to={'/browseListing'} >Browse Listing</NavLink>
        <NavLink to={`/mylisting/${user?.email}`} >My Listings</NavLink>

    </>
    return (
        <div>
            <div id='nv' className={`navbar ${mode ? 'bg-black text-white':'bg-white text-black' } bg-base-100 shadow-sm`}>
                <div className="navbar-start">
                    <Link to={'/'} className='lg:block hidden'> <span className='text-xl font-semibold text-teal-600'>H</span>om<span className='text-xl font-semibold text-teal-600'>e</span> </Link>
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                </div>
                <div className="navbar-center lg:block md:block hidden">
                    <div className='flex gap-4'>
                        {
                            links
                        }
                    </div>
                </div>
                <div className="navbar-end ">


                    <button onClick={()=>setMode(!mode)}  className='bg-black text-white mx-3'>click</button>
                    {
                        loading ? <div className='flex justify-center items-center'>
                            <span className="loading loading-spinner text-success"></span>
                        </div> : user ? <div className='flex '>
                            <div className='flex justify-center items-center'>
                                <div data-tip={user?.displayName} className="avatar   tooltip tooltip-bottom">
                                    <div className="ring-success ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                                        {
                                            loading ? <div className='flex justify-center items-center'>
                                                <span className="loading loading-spinner text-success"></span>
                                            </div> : loading ? <p>Loading....</p> : <img src={user?.photoURL} />
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <button onClick={logut} className="lg:px-4 px-2 cursor-pointer bg-gray-200  py-2 text-teal-600  ml-2 font-semibold rounded-md ">
                                    Logout
                                </button>
                            </div>
                        </div> : <div>
                            <Link to={'/login'} className="bg-teal-600 cursor-pointer  lg:px-4 px-3 py-2 font-semibold rounded-md  text-white">
                                Login
                            </Link>
                            <Link to={'/singup'} className="lg:px-4 px-2 cursor-pointer bg-gray-200  py-2 text-teal-600  ml-2 font-semibold rounded-md ">
                                Sing Up
                            </Link>
                        </div>
                    }


                </div>
            </div>
        </div >
    );
};

export default Navber;