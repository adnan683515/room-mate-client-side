import React, { useContext } from 'react';
import DisplayRoomMatesPost from '../DisplayRoomMatesPost';
import { AuthContext } from '../../Provider/AuthContext';

const All_room_matesLayout = ({ data, load }) => {
    const { mode } = useContext(AuthContext);
    const cngmode = mode ? 'bg-neutral-800 text-white' : 'bg-neutral-200 text-black'
    return (
        <div className='flex flex-col md:flex-row  '>

            {/* Sidebar */}
            <div className={`w-full mt-1 md:w-1/4 ${cngmode} rounded-sm  p-4`}>
                <div className='hidden md:block '>Large screen sidebar</div>
                <h1 className='block md:hidden'>asdfasdfsadf</h1>
            </div>


            {/* Main Content */}
            <div className='w-full md:w-3/4 pl-2 '>

                {
                    load ? <div className="flex mt-20 justify-center items-center">
                        <span className="loading loading-spinner text-success"></span>
                    </div> : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {
                            data?.map((roommate, index) => (
                                <DisplayRoomMatesPost
                                    key={index}
                                    roommates={roommate}
                                    mode={mode}
                                />
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default All_room_matesLayout;
