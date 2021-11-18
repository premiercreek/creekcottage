import React from 'react';
import Link from 'next/link';
import HotelSubMenu from './hotelSubMenu';
import { useRouter } from 'next/router';

const GardenSidePanel = () => {

const router = useRouter();
	return (
		<div className="sidePanel">
		
<div className="sidePanelHotelText">
	<h1>The Gardens</h1>
		<p>Premier Creek Lodging is named after a creek which runs up one side of the property.</p><br/><p>At the back of the hotel Lenore’s husband Pete grows vegetables and flowers: he learnt his skills in Tasmania and has found that getting produce to grown in the much cloudier environment of Haida Gwaii is ofter a challenge.  However, plants which are better adapted to harsher weather do well.</p>
</div>

<div className="menuPanelTop" ><HotelSubMenu/></div>
		</div>
	);
};

export default GardenSidePanel;
