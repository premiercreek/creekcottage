import React from 'react';
import Link from 'next/link';
import HotelSubMenu from './hotelSubMenu';
import { useRouter } from 'next/router';

const ViewSidePanel = () => {

const router = useRouter();
	return (
		<div className="sidePanel">

			<div className="sidePanelHotelText">
				<h1>Views from the Hotel</h1>
		<p>Most rooms in the hotel have views over the water.  On the left you can see the dock: this is mostly used by fishing boats, which you will see go out in the morning to fish off the West Coast of Haida Gwaii.</p>  <br/>
		<p>Looking out straight ahead you can see the islands of Skidegate Inlet.</p> <br/> <p>On the right you can see Spruce Point.  Spruce Point was the site of the sawmill which can be seen in one of the historical photos from 1910.</p>
			</div>

<div className="menuPanelTop"><HotelSubMenu/></div>
</div>	
	);
};

export default ViewSidePanel;
