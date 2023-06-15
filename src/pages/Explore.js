import React, { useEffect } from "react";
import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from "ol/layer/Tile";
import OSM from 'ol/source/OSM';
import './styling/explore-style.css'

export default function AdminBoundaries(){
    useEffect(()=>{
        //new map instance
        const map = new Map({
            target: 'map-container',
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: [0, 0],
                zoom: 2,
            }),
        });

        return () =>{
            map.setTarget(null);
        };
    
    }, []);
    
    
    return(

        <div className="data-container">
          <div className="datasets">
            <p>
            Datasets
            </p>
            <div className="data">
              Boundaries
              <div className="buttons">
                <button>View</button>
                <button>Download</button>
              </div>
              
            </div>
            
          </div>

          <div id="map-container">
          </div>

        </div>
        
    );
}
   