import React from 'react';
import Link from 'next/link';
import RoomsSubMenu from './roomsSubMenu';
import { useRouter } from 'next/router';

const RoomsSidePanel = () => {

const router = useRouter();
	return (
		<div className="sidePanel">
		<div className="sidePanelRoomsText">
		<h1>Oceanview Rooms</h1>
		<h2>$100 to $118  + 13% tax</h2>
<p>Our Oceanview rooms have en-suite bathrooms with tubs and showers and have views over the ocean.
They include either queen-sized or double-sized beds and a sofa.</p>  <br/>
<p>Some rooms have kitchens.  All have a fridge and coffee-making machine.</p><br/>
</div>
<div className="menuPanelTopRooms">
<RoomsSubMenu/></div>
		</div>
	);
};

export default RoomsSidePanel;