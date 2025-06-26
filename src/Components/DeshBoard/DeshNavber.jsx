import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthContext';

const DeshNavber = () => {

  const { user, mode, } = useContext(AuthContext)
  const cngmode = mode ? 'bg-black  text-white' : 'bg-neutral-200'


  return (
    <nav className={`flex justify-between  py-2 px-2 rounded-sm ${cngmode}`}>


      <div className='flex justify-center  items-center'>
        <h1 className='text-xl font-semibold'> <span className='text-teal-600 '>Room</span> Mates</h1>
      </div>
      <div className='flex justify-center items-center'>
        <div className='flex gap-1'>
          <setModediv className="avatar  avatar-online">
            <div className="w-14 bg-neutral-400 rounded-full">
              <img className=' rounded-full  p-1' src={user?.photoURL} />
            </div>
          </setModediv>

        </div>
      </div>


    </nav >
  );
};

export default DeshNavber;
