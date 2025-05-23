import React from 'react';
import Navber from './Navber';
import Footer from './Footer';
import { Outlet, useNavigation } from 'react-router';


const MainLayout = () => {

    const navi = useNavigation


    return (
        <div className='w-[99%] mx-auto'>
            <Navber></Navber>
            
            <div className='min-h-[calc(100vh-38vh)]'>
                {
                    navi.state === 'loading' ? <div className="flex mt-20 justify-center items-center">
                        <span className="loading loading-spinner text-success"></span>
                    </div> : <Outlet></Outlet>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;