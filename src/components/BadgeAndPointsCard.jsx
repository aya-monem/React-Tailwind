import React from "react";

const BadgeAndPointsCard = ({obj ,classname, type}) => {
    let classes = `${classname} text-white basis-1/3 p-5`
    return(
        <div className={classes}>
            <div className="flex">
                <div>
                    <h3 className="font-bold text-2xl">You have earned</h3>
                    <h1 className="font-bold text-3xl text-orange-800">{obj.No }</h1> 
                    <h3 className="font-bold text-2xl">{ type}</h3>
                </div>
                
                <img src={obj.img} className="text-white"/>
            </div>
            <p className="text-sm text-orange-800">{obj.msg}</p>
        </div>
    )
}

export default BadgeAndPointsCard