import React from "react";
import BadgeAndPointsCard from "./BadgeAndPointsCard";

const Dashboard = () => {
    const data = {
        badges:{
            No: 20,
            img: require('../assets/images/badge.svg').default,
            msg: "Hooray! Way to go Mohammed!"
        },
        points:{
            No: 1500,
            img: require('../assets/images/point.svg').default,
            msg: "Redeem and claim your rewards"
        }
    }
    return(
        <div className='h-screen bg-gray-100' >
            <div className="flex flex-row gap-4">
                <div className="basis-2/3 bg-orange-300 flex justify-between p-5">
                    <div className="mt-10">
                        <h3 className="font-bold text-2xl mb-3"> Apply for a car loan!</h3>
                        <p className="text-base">This is a sample of a generated text</p>
                        <button className="rounded-md text-white font-semibold bg-slate-900 px-6 py-2 mt-7">Discover More</button>
                    </div>
                    <img src={require('../assets/images/table.svg').default}/>
                </div>
                <BadgeAndPointsCard  obj={data.badges} classname="badge-bgc" type="Badges!"/>
                <BadgeAndPointsCard obj={data.points} classname="points-bgc" type="Points!"/>
            </div>
        </div>
    )
}

export default Dashboard