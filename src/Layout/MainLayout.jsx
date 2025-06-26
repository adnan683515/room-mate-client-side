import React, { useContext } from 'react';
import Navber from './Navber';
import Footer from './Footer';
import { Outlet, useNavigation } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';



const MainLayout = () => {

    const { mode } = useContext(AuthContext)
    const navi = useNavigation

    return (
        <div className='w-[100%] mx-auto '>
            <Navber></Navber>

            <div className={`min-h-[calc(100vh-38vh)]   ${mode ? "bg-black text-white" : "bg-white "}`}>
                {
                    navi.state === 'loading' ? <div className="flex py-20 justify-center items-center">
                        <span className="loading loading-spinner text-success"></span>
                    </div> : <div className='pt-20 '>
                        <Outlet></Outlet>
                    </div>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;