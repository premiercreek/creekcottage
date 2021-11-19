import React, {useEffect, useState} from 'react';
 import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
 import LocationMap from './locationMap.js';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';


const LocationText = () => {
  return (<div className="attractionsText">
<div className="largeMonitorMap"><LocationMap width={600} /></div>
<div className="mediumMonitorMap"><LocationMap width={400} /></div>


</div>
)
}



export default LocationText;
