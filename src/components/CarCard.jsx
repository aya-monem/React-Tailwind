import React from "react";
import { AiOutlineHeart, AiFillHeart , AiOutlineUser} from 'react-icons/ai';

const CarCard = ({car}) => {
    return(
        <div className="bg-white rounded-md p-5" >
            <p className="flex justify-between"> 
                <span className="font-bold text-lg">{car.name}</span> 
                <span>{car.isFavourite ? 
                   <AiFillHeart className="text-red-700 w-5 h-5"/> 
                :  <AiOutlineHeart className="w-5 h-5"/>}
                </span>
             </p>
             <p className="text-gray-400 font-semibold">{car.model}</p>
            <div className="flex justify-center">
                <img src={car.imgUrl} alt={`${car.id} alt`} height='120' width='240'/>   
            </div>
            <div className="flex justify-between">
                <div className="flex">
                    <p className="flex mr-6">
                        <AiOutlineUser className="text-purple-600 w-5 h-5 mx-2"/>
                        <span className="text-gray-400 font-semibold"> {car.lovedPeopleNo}</span>
                    </p>
                    <p className="flex">
                        <img src={require('../assets/images/manual.svg').default} className="mx-2"/>
                        <span className="text-gray-400 font-semibold">{car.lovedPeopleNo}</span>
                    </p>
                </div>
                <p>
                    <span className="font-semibold">${car.price} /</span> 
                    <span className="text-gray-400 font-semibold"> {car.currency}</span> 
                </p>
              
            </div>
        </div> 
        
        
    )
}

export default CarCard