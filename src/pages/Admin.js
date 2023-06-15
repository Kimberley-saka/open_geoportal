import React, { useEffect } from "react";
import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from "ol/layer/Tile";
import OSM from 'ol/source/OSM';

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

        <div>
            <div id="map-container"
        style={{width:'100%', height: '500px'}}>

        </div>

        </div>
        
    );
}
   