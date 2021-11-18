import React from 'react';
import Link from 'next/link';
import RoomsSubMenu from './roomsSubMenu';
import { useRouter } from 'next/router';

const TubandkitchenSidePanel = () => {

const router = useRouter();
	return (
		<div className="sidePanel">
		<div className="sidePanelRoomsText">
		<h1>The Garden Room</h1>
		<h2>$65 to $85 + 13% tax</h2>
<p>The Garden Room is a small self-contained room with a kitchen and a bathroom.  It has views over the creek and the garden.  There’s a sofa in the corner and a table for meals. </p>  <br/>
<p> The bath has a tub but not a shower: if you prefer to shower you can use the bathroom just down the corridor. </p><br/>
</div>
<div className="menuPanelTopRooms">
<RoomsSubMenu/></div>
		</div>
	);
};

export default TubandkitchenSidePanel;