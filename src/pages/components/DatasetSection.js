import { useState } from "react";
import React from "react";
import './datasetsection.css'

export default function DatasetSection({value}){
    const[showList, setShowList] = useState(false);

    const handleClick = () => {
        setShowList(!showList);
    };

    return(
        <div className="datasection">
          <p>{value}</p>
        <div>
          <button className="view" onClick={handleClick}>View</button>
          {showList &&(
            <ul>
              <li>District_boundaries</li>
              <li>Traditional_aunthorities</li>
            </ul>
          )
          
          }
        </div>
        </div>
    );
}