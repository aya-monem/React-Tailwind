import React ,{ useEffect, useState } from "react";
//import React  from "react";
import CarCard from "./CarCard";
import dummyCarsData from '../assets/cars.json'
const Booking = () => {
    const [carsData , setCarsData] = useState([]);
    useEffect(()=>{
        async function getData(url){
            let response = await fetch(url);
            console.log(response);
            return await response.json();
        }
        
        getData('https://api-cars.free.beeceptor.com/cars')
        .then(cars=>{
        setCarsData(cars)
        })
        .catch((error) => {
            console.log(error);
            setCarsData(dummyCarsData)
          });
    } ,[])
  
    return(
        <div className="h-full">
            <h1 className="font-bold text-3xl pb-7">Booking dummy Data</h1>
            <div className="md:flex md:justify-between md:items-center pb-7">
                <div>
                    <select className="w-32 rounded-2xl py-2 px-5 mr-5">
                        <option className="text-gray-600">New</option>
                        <option className="text-gray-600">option 2</option>
                        <option className="text-gray-600">option 3</option>
                    </select>
                    <select className="w-32 rounded-2xl py-2 px-5 mr-5">
                        <option className="text-gray-600">Toyota</option>
                        <option className="text-gray-600">option 5</option>
                        <option className="text-gray-600">option 6</option>
                    </select>
                </div>
                <div className="flex">
                    <div className="bg-white mr-6 rounded-full p-2">
                        <img src={require('../assets/images/dashboard_icon.svg').default} alt="dashboardIcon"/>
                    </div>
                    <img src={require('../assets/images/filter.svg').default} alt="filterIcon"/>

                </div>
            </div>
            <div className='grid md:grid-cols-3 sm:grid-cols-2  gap-4'>
            {carsData?.length > 0 ? (
                <>
                {carsData.map((car) => (
                    <CarCard car={car} key={car.id}/>
                    
                ))}
                </>
            ) : ( <h1>No cars found... </h1>  )
            }
            </div>
        </div>
    )
}

export default Booking