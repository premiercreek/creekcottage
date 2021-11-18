import React, {useEffect, useState} from 'react';
 import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';



const GettingHereMap = (props) => {

    return (
        <div className="mainTextMap"> 
    <MapContainer
    
     style={{ height: props.width/1.5, width: props.width}}
  className="markercluster-map"
  center={[53.2549, -132.07554]}
  zoom={16}
  //maxZoom={18}
>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />
<Marker position={[53.2549, -132.07554]}>
<Popup>
  Premier Creek Lodging
</Popup></Marker>
<Marker position={[54.02384, -132.11725]}>
<Popup>
  Masset Airport
</Popup></Marker>
<Marker position={[53.24692, -132.01010]}>
<Popup>
  BC Ferries (Skidegate)
</Popup></Marker>
<Marker position={[53.25471, -131.81673]}>
<Popup>
  Sandspit Airport
</Popup></Marker>
<Marker position={[54.29598, -130.35195]}>
<Popup>
  BC Ferries (Prince Rupert)
</Popup></Marker>
<Marker position={[49.19905, -123.18170]}>
<Popup>
  Vancouver Airport
</Popup>

</Marker>
</MapContainer>
</div>

)

}


export default GettingHereMap;