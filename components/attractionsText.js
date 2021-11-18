import React, {useEffect, useState} from 'react';
 import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
 import AttractionsMap from './attractionsMap.js';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';


const AttractionsText = () => {
  return (<div className="attractionsText">
<div className="largeMonitorMap"><AttractionsMap width={600} /></div>
<div className="mediumMonitorMap"><AttractionsMap width={400} /></div>


</div>
)
}



export default AttractionsText;