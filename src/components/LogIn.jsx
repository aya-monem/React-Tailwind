import React from "react";

const LogIn = ({isLogged}) => {
    console.log(isLogged)
    return(
        <div className='h-screen bg-gray-100 flex justify-center items-center'>
            <h1 className="">Please LogIn first</h1>
            {/* <h3>Your login status is {isLogged? 'true': 'false'}</h3> */}
        </div>
    )
}

export default LogIn