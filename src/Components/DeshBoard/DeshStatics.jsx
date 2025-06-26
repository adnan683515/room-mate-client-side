import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import Chart from './Chart';
import Mylisting from '../Mylisting';

const DeshStatics = () => {

    const { mode } = useContext(AuthContext)


    return (
        <div>

            <div className='sm:flex sm:justify-center sm:items-center'>
                <div
                    className={`p-6 sm:text-center rounded-xl space-y-2   transition-all duration-300
                ${mode ? ' text-white' : ' text-gray-900'}`}
                >
                    <h1 className="sm:text-3xl text-center  font-bold  mb-2">
                        <span className="text-orange-400 ">Roommate</span>{' '}
                        <span className="text-teal-600">Application Dashboard</span>
                    </h1>
                    <div className='sm:flex sm:justify-center sm:items-center'>
                        <p className={`text-sm  text-center sm:w-[70%] ${mode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Manage your roommate requests, preferences, and applications all in one place.
                            Stay organized and connected, whether you're seeking or offering a shared space.
                        </p>
                    </div>
                </div>
            </div>
            <Chart></Chart>

            <Mylisting></Mylisting>
        </div>
    );
};

export default DeshStatics;