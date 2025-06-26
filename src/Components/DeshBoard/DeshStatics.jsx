import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthContext';

const DeshStatics = () => {

    const { mode } = useContext(AuthContext)
    const cngcolour = mode ? '#fff' : '#000'
    const cngmode = mode ? 'text-white  bg-neutral-800   ' : "text-black bg-white"


    

    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 '>
            <div className='bg-teal-500 rounded-sm relative  shadow-md flex justify-center items-center h-[20vh]   sm:h-[25vh] '>
                <div className='flex absolute top-1 w-[100%] justify-around'>
                    <h1 className=' text-white sm:text-2xl '>All Post</h1>

                    <svg fontSize={30} xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill={`${cngcolour}`} d="M5.116 20q-.691 0-1.153-.462T3.5 18.384V5.616q0-.691.463-1.153T5.115 4h9.308v1H5.116q-.231 0-.424.192t-.192.424v12.769q0 .23.192.423t.423.192h12.77q.23 0 .423-.192t.192-.423V9.077h1v9.308q0 .69-.462 1.153T17.884 20zM8 16.5v-1h7v1zm0-3v-1h7v1zm0-3v-1h7v1zM17.5 8V6h-2V5h2V3h1v2h2v1h-2v2z"></path></svg>

                </div>
                <div className=' w-[50%] py-4'>

                    <div className='flex justify-center items-center'>
                        count
                    </div>
                </div>

            </div>
            <div className={`${cngmode} rounded-sm relative  shadow-md flex justify-center items-center h-[20vh]   sm:h-[25vh]`}>
                <div className='flex absolute top-1 w-[100%] justify-around'>
                    <h1 className=' sm:text-xl '>My Post</h1>

                    <svg fontSize={30} xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill={`${cngcolour}`} d="M5.116 20q-.691 0-1.153-.462T3.5 18.384V5.616q0-.691.463-1.153T5.115 4h9.308v1H5.116q-.231 0-.424.192t-.192.424v12.769q0 .23.192.423t.423.192h12.77q.23 0 .423-.192t.192-.423V9.077h1v9.308q0 .69-.462 1.153T17.884 20zM8 16.5v-1h7v1zm0-3v-1h7v1zm0-3v-1h7v1zM17.5 8V6h-2V5h2V3h1v2h2v1h-2v2z"></path></svg>

                </div>
                <div className=' w-[50%] py-4'>

                    <div className='flex justify-center items-center'>
                        count
                    </div>
                </div>

            </div>
            <div className='bg-purple-500 rounded-sm relative  shadow-md flex justify-center items-center h-[20vh]   sm:h-[25vh] '>
                <div className='flex absolute top-1 w-[100%] justify-around'>
                    <h1 className='  sm:text-2xl '>Review</h1>

                    <svg fontSize={30} xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><g fill="none"><path fill="#66e1ff" d="M21.09 1.955H2.005c-.554 0-1.004.45-1.004 1.005v13.058c0 .555.45 1.004 1.004 1.004H21.09c.555 0 1.005-.45 1.005-1.004V2.96c0-.555-.45-1.005-1.005-1.005"></path><path fill="#c2f3ff" d="M2.005 1.955A1.004 1.004 0 0 0 1.001 2.96v13.058a.99.99 0 0 0 .395.778l14.84-14.84z"></path><path fill="#ff808c" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="m13.556 7.982l-1.674 5.022H6.858L5.353 7.983z" strokeWidth={1}></path><path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="m6.86 7.982l1.506-2.511m3.516 2.511l-1.507-2.511" strokeWidth={1}></path><path fill="#ffdda1" d="m15.966 22.045l-3.074-4.613c-1.22-1.863 1.797-2.491 3.184.615V9.99a1.004 1.004 0 1 1 2.01 0v4.775l3.984 1.151a1.29 1.29 0 0 1 .897 1.53l-.085.368l-.769 4.23"></path><path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="m15.966 22.045l-3.074-4.613c-1.22-1.863 1.797-2.491 3.184.615V9.99a1.004 1.004 0 1 1 2.01 0v4.775l3.984 1.151a1.29 1.29 0 0 1 .897 1.53l-.085.368l-.769 4.23" strokeWidth={1}></path><path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M11.045 17.022h-9.04A1.005 1.005 0 0 1 1 16.018V2.96a1.004 1.004 0 0 1 1.004-1.005H21.09a1.005 1.005 0 0 1 1.005 1.005v11.049M6.524 20.036h5.023m-1.506-3.014v3.014" strokeWidth={1}></path></g></svg>

                </div>
                <div className=' w-[50%] py-4'>

                    <div className='flex justify-center items-center'>
                        count
                    </div>
                </div>

            </div>
            <div className={`${cngmode} rounded-sm relative  shadow-md flex justify-center items-center h-[20vh]   sm:h-[25vh]`}>
                <div className='flex absolute top-1 w-[100%] justify-around'>
                    <h1 className='  sm:text-xl '>Total Likes</h1>

                    <svg fontSize={30} xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><g fill="none"><path fill="#66e1ff" d="M23 17.26a.957.957 0 0 1-.957.957H11.522l-3.826 3.827v-3.827h-5.74A.957.957 0 0 1 1 17.261V2.913a.957.957 0 0 1 .957-.956h20.087a.956.956 0 0 1 .956.956z"></path><path fill="#c2f3ff" d="M21.685 1.957H1.957A.957.957 0 0 0 1 2.913v14.348a.957.957 0 0 0 .957.956h3.467z"></path><path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M23 17.26a.957.957 0 0 1-.957.957H11.522l-3.826 3.827v-3.827h-5.74A.957.957 0 0 1 1 17.261V2.913a.957.957 0 0 1 .957-.956h20.087a.956.956 0 0 1 .956.956z" strokeWidth={1}></path><path fill="#fff" d="M7.696 8.652h.957v6.696h-.957"></path><path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M7.696 8.652h.957v6.696h-.957" strokeWidth={1}></path><path fill="#ffdda1" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M8.653 9.13v4.783l2.807 1.202c.357.154.742.233 1.13.233h3.026a.96.96 0 0 0 .908-.654l1.275-3.827a.957.957 0 0 0-.907-1.258h-2.5V5.783a.956.956 0 0 0-1.913 0A3.35 3.35 0 0 1 9.132 9.13z" strokeWidth={1}></path></g></svg>

                </div>
                <div className=' w-[50%] py-4'>

                    <div className='flex justify-center items-center'>
                        count
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DeshStatics;