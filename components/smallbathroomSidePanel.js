import React from 'react';
import Link from 'next/link';
import RoomsSubMenu from './roomsSubMenu';
import { useRouter } from 'next/router';

const SmallbathroomSidePanel = () => {

const router = useRouter();
	return (
		<div className="sidePanel">
		<div className="sidePanelRoomsText">
		<h1>The Courtyard Room</h1>
		<h2>$75 to $80 + 13% tax</h2>
<p>Our Courtyard Room has a double bed and an en suite bathroom.  It has a dressing table and a coffee machine.  There is no fridge.</p><br/>
<p>This isn't a large room, but it's at the back of the building, with a view over the courtyard, so it's pretty quiet.</p>
</div>
<div className="menuPanelTopRooms">
<RoomsSubMenu/></div>
		</div>
	);
};

export default SmallbathroomSidePanel;