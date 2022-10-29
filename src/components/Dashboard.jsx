import React, { useState, useEffect } from "react";
import { TiFlash } from "react-icons/ti";
import { FaArrowsAltV } from 'react-icons/fa'
import { IoWater } from 'react-icons/io5'
import { GiStoneWheel } from 'react-icons/gi'
//// components
import BadgeAndPointsCard from "./BadgeAndPointsCard";
import CustomCircularProgressBar from "./CustomCircularProgressBar";
import RecomendedCarCard from './RecomendedCarCard'
import  { dummyDashboardData } from '../assets/DummyDashboardData.jsx'
const Dashboard = () => {
    const [recomendations , setRecomendations] = useState([]);
    const dummyBadges = {
        No: 20,
        img: require('../assets/images/badge.svg').default,
        msg: 'Hooray! Way to go Mohammed!'
    }
    const dummyPoints = {
        No: 1500,
        img: require('../assets/images/point.svg').default,
        msg: "Redeem and claim your rewards"
    }
    useEffect(()=>{
        async function getData(url){
            let response = await fetch(url);
            console.log(response);
            return await response.json();
        }
        getData('https://api-cars.free.beeceptor.com/recomendation')
            .then(dashboardData =>{
                setRecomendations(dashboardData);
            })
            .catch((error) => {
                console.log(error);
                setRecomendations(dummyDashboardData);
            });
    } ,[])
    return(
        <div className='h-full bg-gray-100' >
            <section className="flex flex-row justify-between mb-6 gap-8">
                <div className="flex flex-col items-center bg-white px-8 py-6 rounded-md">
                    <TiFlash className="w-12 h-12 bg-gray-100 p-2 rounded-full text-purple-500 mb-5"/>
                    <h1 className="text-gray-900 font-bold text-2xl mb-5">Energy</h1>
                    <CustomCircularProgressBar percentage={`34`} barText={`45%`} trailColor={`rgba(161, 98, 247, 1)`}/>
                </div>
                <div className="flex flex-col items-center bg-white px-8 py-6 rounded-md">
                    <FaArrowsAltV className="w-12 h-12 bg-red-100 p-2 rounded-full text-red-400 text-center mb-5"/>
                    <h1 className="text-gray-900 font-bold text-2xl mb-5">Range</h1>
                    <CustomCircularProgressBar percentage={`43.5`} barText={`157k%`} trailColor={`rgba(255, 126, 134, 1)`}/>
                </div>
                <div className="flex flex-col items-center bg-white px-8 py-6 rounded-md">
                    <IoWater className="w-12 h-12 bg-gray-100 p-2 rounded-full text-purple-500 mb-5"/>
                    <h1 className="text-gray-900 font-bold text-2xl mb-5">Break fluid</h1>
                    <CustomCircularProgressBar percentage={`6.75`} barText={`9%`} trailColor={`rgba(161, 98, 247, 1)`}/>
                </div>
                <div className="flex flex-col items-center bg-white px-8 py-6 rounded-md">
                    <GiStoneWheel className="w-12 h-12 bg-yellow-100 p-2 rounded-full text-yellow-500 mb-5"/>
                    <h1 className="text-gray-900 font-bold text-2xl mb-5">Tire Wear</h1>
                    <CustomCircularProgressBar percentage={`18.75`} barText={`25%`} trailColor={`rgba(246, 204, 13, 1)`}/>
                </div>
            </section>
            <section className="flex flex-row mb-6 gap-4">
                <div className="basis-2/3 bg-orange-300 flex justify-between p-5 rounded-md">
                    <div className="mt-10">
                        <h3 className="font-bold text-2xl mb-3"> Apply for a car loan!</h3>
                        <p className="text-base">This is a sample of a generated text</p>
                        <button className="rounded-md text-white font-semibold bg-slate-900 px-6 py-2 mt-7"
                                onClick={()=> console.log("Button clicked!")} >
                            Discover More
                        </button>
                    </div>
                    <img src={require('../assets/images/table.svg').default} alt="loan"/>
                </div>
                <BadgeAndPointsCard  obj={dummyBadges} classname="badge-bgc" type="Badges!"/>
                <BadgeAndPointsCard obj={dummyPoints} classname="points-bgc" type="Points!"/>
            </section>
            <section className="flex flex-row justify-between mb-5 gap-6 recomendationSection">
                <>
                {recomendations.map(car=>(
                    <RecomendedCarCard key={car.id} car={car}/>
                ))}
                </>
                
                
            </section>
        </div>
    )
}

export default Dashboard