import React, {useEffect, useState} from 'react';
 import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
 import GettingHereMap from './gettingHereMap.js';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';


const GettingHereText = () => {
  return (<div>
<div className="largeMonitorMap"><GettingHereMap width={720} /></div>
<div className="mediumMonitorMap"><GettingHereMap width={350} /></div>
<div className="smallMonitorMap"><GettingHereMap width={550} /></div>

</div>
)
}



export default GettingHereText;