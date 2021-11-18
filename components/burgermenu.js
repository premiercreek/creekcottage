import React from 'react';
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';

const Burgermenu = () => {
	return (
		<Menu width={350}>
			<a id="home" className="menu-item" href="/">
				Home
			</a><a id="rooms" className="menu-item" href="/rooms">
				Rooms and Rates
			</a>
		
			<a id="gettinghere" className="menu-item" href="/gettinghere">
				Getting Here
			</a>
			<a id="attractions" className="menu-item" href="/attractions">
				Attractions
			</a>

			
			<a id="contact" className="menu-item" href="/contact">
				Contact Us
			</a>
		</Menu>
	);
};

export default Burgermenu;
