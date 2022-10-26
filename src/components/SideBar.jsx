import React, { useState } from "react";
import { Link } from "react-router-dom";
import {IoSettingsOutline} from 'react-icons/io5';
import {AiOutlineCar} from 'react-icons/ai';
import {BiLogOut} from 'react-icons/bi';

const SideBar = () => {
    const [isLogged , setIsLogged] = useState(localStorage.getItem('isLogged'))
    const handleLogInState = () =>{
        debugger
        setIsLogged(prevIsLogged => !prevIsLogged)
        localStorage.setItem('isLogged', isLogged);
    }
    return(
        <div className='w-1/5 p-6 pt-7 h-full'>
            <div className='logo mb-8'>
                   <img src={require('../assets/images/logo.png')} alt="logo"/>
            </div>
            <div className='flex-col items-center'>
                <ul>
                    <li className="mb-2">
                        <Link to='/' className="flex active:bg-slate-300 "> 
                        <img src={require('../assets/images/dashboard_icon.svg').default} className="mx-2"/>
                        Dashboard </Link>
                    </li>
                    <li className="mb-2">
                        <Link to='/booking' className="flex active:bg-slate-300"> 
                            <AiOutlineCar className="w-5 h-5 mx-2 text-gray-600"/> Cars 
                        </Link>
                    </li>
                </ul>
                <ul className='content-end'>
                    <li className="mb-2">
                        <Link to='/settings' className="flex active:bg-slate-300"> 
                            <IoSettingsOutline className="w-5 h-5 mx-2 text-gray-600"/> Settings 
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link onClick={handleLogInState} to='/login' className="flex active:bg-slate-300"> 
                            <BiLogOut className="w-5 h-5 mx-2 text-gray-600"/> Log Out 
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar