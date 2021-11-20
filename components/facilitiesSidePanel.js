import React from 'react';
import Link from 'next/link';
// import RoomsSubMenu from './roomsSubMenu';
import { useRouter } from 'next/router';

const RoomsSidePanel = () => {

const router = useRouter();
	return (
		<div className="sidePanel">
		<div className="sidePanelRoomsText">
		<h1>Facilities</h1>
			<h3>Bedrooms</h3>
			<p>Creek Cottage has two small bedrooms with bunks and one with a double bed: the rooms are quiet and secluded, with views over gardens.  All the bedrooms are quite small, so we limit the total number of guests to about four people.</p>
			<h3>Living and Dining Area</h3>
				<p>The living area has a sofa and a wood stove to keep you warm in winter.  Next to that is the dining area, which has views over the water.</p>
				<h3>Kitchen Area</h3>
				<p>The cottage includes a small kitchen area where you can prepared your meals.  There's a fridge and stove, plus all the utensils you need.</p>
			<h3>Deck</h3>
			<p>There's a small deck outside with a bench and chairs.  In summer this is a lovely place to eat outside and watch the boats.</p>
</div>
{/* <div className="menuPanelTopRooms"> */}
{/* <RoomsSubMenu/></div> */}
		 </div>
	);
};

export default RoomsSidePanel;
