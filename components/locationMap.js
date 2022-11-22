import React, {useEffect, useState} from 'react';
 import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';


const LocationMap = (props) => {
  
    return (
       <div className="mainTextMap">
    <MapContainer
     style={{ height: props.width*1.5, width: props.width}}
  className="markercluster-map"
  center={[53.72, -132.33077]}
  zoom={8.4}
>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />
<Marker position={[53.2549, -132.07554]}>
<Popup>
  Premier Creek Lodging
</Popup></Marker>
<Marker position={[53.24965, -131.99695]}>
<Popup>
Haida Heritage Centre
</Popup></Marker>
<Marker position={[53.26577, -131.99055]}>
<Popup>
Skidegate
</Popup></Marker>
<Marker position={[53.56330, -131.92860]}>
<Popup>
Tlell
</Popup></Marker>
<Marker position={[54.17255, -131.65600]}>
<Popup>
Rose Spit 
</Popup></Marker>
<Marker position={[54.04074, -132.17891]}>
<Popup>
Old Masset
</Popup></Marker>
<Marker position={[54.07240, -131.83524]}>
<Popup>
  Tow Hill
</Popup></Marker>

</MapContainer>
</div>
     
    )
}

export default LocationMap;
