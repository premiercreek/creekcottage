import React from 'react';
import Link from 'next/link';
import RoomsSubMenu from './roomsSubMenu';
import { useRouter } from 'next/router';

const NobathroomSidePanel = () => {

const router = useRouter();
	return (
		<div className="sidePanel">
		<div className="sidePanelRoomsText">
		<h1>Creek Rooms</h1>
		<h2>$40 to $55 + 13% tax</h2>
<p>You will know why your room is one of the Creek Rooms when you lie in bed: all you will hear is the sound of the creek.  If you look out you will see the garden and glimpses of the sea.</p> <br/>
<p>There's a sink in the room but no private bathroom. </p> <br/>
</div>
<div className="menuPanelTopRooms">
<RoomsSubMenu/></div>
		</div>
	);
};

export default NobathroomSidePanel;