import { LogOut, Plus, User, RefreshCcw, List, Menu, ChevronLeft } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import { Link, Outlet, useNavigate } from 'react-router';
import DeshNavber from './DeshNavber';
import { motion } from 'framer-motion';
import { Bounce, toast } from 'react-toastify';

const Dashboard = () => {
    const { user, mode, setMode, handleLogout, setUser } = useContext(AuthContext);
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()
    const toggleSidebar = () => setCollapsed(!collapsed);

    const sidebarWidth = collapsed ? 70 : 200;

    const bgColour = mode ? 'bg-neutral-800 text-white' : 'bg-teal-600 text-white';
    const textVisibility = collapsed ? 'hidden' : 'inline';

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setCollapsed(true);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const logout = () => {
        handleLogout()
            .then(() => {
                navigate('/login');
                setUser(null);
                toast.error('Logout Successful!', {
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
            });
    };


    return (
        <div className="min-h-screen flex">
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-screen p-4 ${bgColour} space-y-4 z-10  transition-all duration-300`}
                style={{ width: `${sidebarWidth}px ` }}
            >
                {/* Toggle Button */}
                <div className="flex justify-end mb-5">
                    <button className='hidden sm:block' onClick={toggleSidebar}>
                        {collapsed ? <Menu size={24} /> : <ChevronLeft size={24} />}
                    </button>
                </div>

                {/* <div className={`avatar ${collapsed ? "hidden" : 'block'}`}>
                    <div className="ring-primary flex justify-center items-center ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                        <img src={user?.photoURL} />
                    </div>
                </div> */}

                <motion.ul className="space-y-3 relative h-full">
                    <li className="flex items-center gap-2 cursor-pointer hover:text-black">
                        <Link to="/" className="flex items-center gap-2">
                            <HomeIcon size={18} /> <span className={`${textVisibility} `}>Home</span>
                        </Link>
                    </li>
                    <li className="flex items-center gap-2 cursor-pointer hover:text-black">
                        <Link to="/deshboard" className="flex items-center gap-2">


                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 20v-1h18v1zm1-2.77V12h2v5.23zm4.654 0V7h2v10.23zm4.673 0V10h2v7.23zm4.673 0V4h2v13.23z" /></svg>
                            <span className={`${textVisibility} `}>Statics</span>
                        </Link>
                    </li>

                    <li className="flex items-center gap-2 cursor-pointer hover:text-black">
                        <Link to="/deshboard/addtoroommate" className="flex gap-2">
                            <Plus size={18} /> <span className={`${textVisibility}`}>Add Post</span>
                        </Link>
                    </li>



                    <li className="flex items-center gap-2 cursor-pointer hover:text-black">
                        <Link
                            to={`/deshboard/mylisting`}
                            className="flex gap-2"
                        >
                            <List size={18} /> <span className={`${textVisibility} text-white`}>My Post</span>
                        </Link>
                    </li>
                    {
                        !collapsed && <li className={`hidden md:block cursor-pointer ${mode ? 'hover:text-white' : 'hover:text-black text-white'} `}>
                            <select onChange={() => setMode(!mode)} className={`w-full  border-none ${mode ? 'bg-neutral-800 text-white' : ' bg-none text-black'}`} name="Theme" id="">
                                <option value="">Light</option>
                                <option value="">Dark</option>

                            </select>

                        </li>
                    }


                    <li className={`flex  absolute ${collapsed ? 'bottom-25 ' : "bottom-25"} items-center gap-2 cursor-pointer hover:text-black`}>
                        <User size={18} /> <span className={` ${textVisibility} text-white`}>Profile</span>
                    </li>
                    <li onClick={logout} className={`flex absolute ${collapsed ? 'bottom-20 ' : "bottom-20"} items-center gap-2 cursor-pointer hover:text-red-500 `}>
                        <LogOut size={18} /> <span className={`  ${textVisibility}`}>Logout</span>

                    </li>
                </motion.ul>
            </aside>

            {/* Main Content */}
            <main
                className={`min-h-screen transition-all duration-300 ${mode ? 'bg-black text-white' : 'bg-neutral-200'}`}
                style={{
                    marginLeft: `${sidebarWidth}px`,
                    width: `calc(100% - ${sidebarWidth}px)`
                }}
            >
                <div className="w-[98%] mx-auto">
                    <DeshNavber />
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

// Optional HomeIcon (replace or import your own)
const HomeIcon = ({ size = 18 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-home"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="5 12 3 12 12 3 21 12 19 12" />
        <path d="M5 12v7a2 2 0 0 0 2 2h2v-5h4v5h2a2 2 0 0 0 2 -2v-7" />
    </svg>
);

export default Dashboard;
