import React from "react";
import { GrCycle } from 'react-icons/gr'
import { SlEnergy } from 'react-icons/sl'


const RecomendedCarCard = ({car}) => {
    return(
        <div className={`basis-1/3 flex flex-col bg-white py-5 px-7 rounded-md car${car.id}`}>
            <p className="flex items-center">
                <GrCycle className="w-5 h-5 mr-3 text-gray-600"/>
                <span className="font-bold text-base">{car.recomendPercent} Recommend</span>
            </p>
            <img src={car.carImg} alt="recomendedCar"/>
            <h1 className="font-bold text-xl my-3 text-left">{car.carName}</h1>
            <div className="flex justify-between">
                <p className="flex items-center justify-evenly">
                    <img src={require('../assets/images/manual-gray.svg').default} className="mr-3" alt="manual"/>
                    <span className="mr-3 text-gray-600">{car.k}</span>
                    <img src={require('../assets/images/islamicShape.svg').default} width="20" height="20"
                    className="mr-3" alt="islamicShape"/>
                    <SlEnergy className="w-5 h-5 mr-4 text-gray-600"/>
                </p>
                <span className="font-semibold text-gray-600">{car.price}</span>
            </div>
        </div>
    )
}

export default RecomendedCarCard