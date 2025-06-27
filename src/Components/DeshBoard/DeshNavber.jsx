import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthContext';

const DeshNavber = () => {

  const { user, mode,setMode } = useContext(AuthContext)
  const cngmode = mode ? 'bg-black  text-white' : 'bg-neutral-200'


  return (
    <nav className={`flex justify-between  py-2 px-2 rounded-sm ${cngmode}`}>


      <div className='flex justify-center  items-center'>
        <h1 className={`text-xl font-semibold  ${mode ? 'text-orange-400' : ''}`}> <span className='text-teal-600 '>Room</span> Mates</h1>
      </div>
      <div className='flex justify-center cursor-pointer items-center'>
        <div className={``}>

          {
            mode ? <svg onClick={()=> setMode(!mode)} fontSize={50} xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#fff" d="M12.058 20q-3.334 0-5.667-2.333T4.058 12q0-3.039 1.98-5.27t4.904-2.634q.081 0 .159.006t.153.017q-.506.706-.801 1.57T10.158 7.5q0 2.667 1.866 4.533t4.534 1.867q.951 0 1.813-.295t1.548-.801q.012.075.017.153t.006.159q-.384 2.923-2.615 4.903T12.057 20"></path></svg> :
            
            <svg onClick={()=>setMode(!mode)}  fontSize={50} xmlns="http://www.w3.org/2000/svg"  width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#000" d="M12.058 20q-3.334 0-5.667-2.333T4.058 12q0-3.039 1.98-5.27t4.904-2.634q.081 0 .159.006t.153.017q-.506.706-.801 1.57T10.158 7.5q0 2.667 1.866 4.533t4.534 1.867q.951 0 1.813-.295t1.548-.801q.012.075.017.153t.006.159q-.384 2.923-2.615 4.903T12.057 20m0-1q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.074 0-5.237-2.162T9.158 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5.058 12q0 2.9 2.05 4.95t4.95 2.05m-.25-6.75"></path></svg>
          }
        </div>
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
