import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CustomCircularProgressBar = ({percentage , barText, trailColor}) => {
    return(
        <div className="w-3/5 h-3/5">
            <CircularProgressbar 
                       value={percentage} text={`${barText}`} 
                       circleRatio="0.75"
                       className=""
                       styles={buildStyles({
                            rotation: 1/2 + 1/8,
                            strokeLinecap: 'butt',
                            textSize: '20px',
                            textColor: '#000',
                            pathColor: `${trailColor}`,
                            trailColor:  `rgba(244, 245, 249, 1)`,
                            //backgroundColor: '#3e98c7',
                  })}
                  />
        </div>
    )
}

export default CustomCircularProgressBar