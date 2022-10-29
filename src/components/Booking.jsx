import React ,{ useEffect, useState } from "react";
//import React  from "react";
import CarCard from "./CarCard";
import {dummyCarsData } from '../assets/cars.jsx'
const Booking = () => {
    const yearOptions = [
        {value: 'All', text: 'All'},
        {value: 2020, text: '2020'},
        {value: 2015, text: '2015'},
        {value: 2010, text: '2010'},
    ];
    const typeOptions = [
        {value: 'All', text: 'All'},
        {value: 'Toyota', text: 'Toyota'},
        {value: 'Mazda', text: 'Mazda'},
    ];
    const [carsData , setCarsData] = useState([]);
    const [selectedType, setSelectedType] = useState(typeOptions[0].value)
    const [selectedYear, setSelectedYear] = useState(yearOptions[0].value)
    useEffect(()=>{
        async function getData(url){
            let response = await fetch(url);
            return await response.json();
        }
        
        getData('https://api-cars.free.beeceptor.com/cars')
        .then(cars=>{
             setCarsData(cars);
             localStorage.setItem('allCars',  JSON.stringify(cars));

        })
        .catch((error) => {
             console.log(error);
             setCarsData(dummyCarsData);
             localStorage.setItem('allCars', JSON.stringify(dummyCarsData));
          });
          

    } ,[])
    const handleSelectYear = event => {
        console.log(event.target.value);
        setSelectedYear(event.target.value);
        setSelectedType(typeOptions[0].value);
        let backUpCarsData = JSON.parse(localStorage.getItem('allCars'));
        if(event.target.value == "All"){
            setCarsData(backUpCarsData)
        }
        else{
            let filteredCars = backUpCarsData.filter(car => car.year == event.target.value);
            setCarsData(filteredCars)
        }
      };
      const handleSelectType = event => {
        console.log(event.target.value);
        setSelectedType(event.target.value);
        setSelectedYear(yearOptions[0].value);
        let backUpCarsData = JSON.parse(localStorage.getItem('allCars'));
        if(event.target.value == "All"){
            setCarsData(backUpCarsData)
        }
        else{
        let filteredCars = backUpCarsData.filter(car => car.model == event.target.value);
        setCarsData(filteredCars)
        }
      };
    return(
        <div className="h-full">
            <h1 className="font-bold text-3xl pb-7">Booking</h1>
            <div className="md:flex md:justify-between md:items-center pb-7">
                <div>
                    <select value={selectedYear} className="w-32 rounded-2xl py-2 px-5 mr-5"
                         onChange={handleSelectYear}>
                            {yearOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.text}
                                </option>
                            ))}
                    </select>
                    <select value={selectedType} className="w-32 rounded-2xl py-2 px-5 mr-5"
                        onChange={handleSelectType}>
                            {typeOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.text}
                                </option>
                            ))}
                    </select>
                    <span className="text-gray-400 font-semibold"> {carsData.length} cars</span>
                </div>
                <div className="flex">
                    <img src={require('../assets/images/dashboard_icon.svg').default} alt="dashboard"
                      className="p-3 border-2 border-gray-100 bg-white rounded-full mr-7"/>
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