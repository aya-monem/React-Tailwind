import React from "react";
import { BsSearch } from 'react-icons/bs';
import { VscBellDot } from 'react-icons/vsc';
const SearchBar = () => {
    return(
        <div className='md:flex md:justify-between px-5 pb-1 pt-3' >
            <div className="relative flex items-center">
                <BsSearch className="absolute w-5 h-5 ml-5 text-gray-600 pointer-events-none"/>
                <input  className="caret-orange-500 w-96 p-3 pl-10 m-2 rounded-2xl border-none bg-slate-100 text-black placeholder-gray-600 font-bold-500 focus:ring-0 ring-0 max-w-md" 
                        name="search"
                        type="text" 
                        autoComplete="off"
                        placeholder="Search or type">
                    
                    </input>
            </div>
            <div className="mr-5 flex items-center">
                <div className="mr-12">
                    <VscBellDot className="w-6 h-6 text-gray-600"/>
                </div>
                <div >
                    <img src={require('../assets/images/young-man.png')} height='40' width='40' 
                          alt="login-man" className="rounded-full"/>
                </div>
            </div>  
        </div>
    )
}

export default SearchBar