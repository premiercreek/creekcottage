import React from 'react';
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';

const Burgermenu = () => {
	return (
		<Menu width={350}>
			<a id="home" className="menu-item" href="/">
				Home
			</a><a id="facilities" className="menu-item" href="/facilities">
				Facilities
			</a>
		
			<a id="garden" className="menu-item" href="/garden">
				The Gardens
			</a>
			<a id="location" className="menu-item" href="/location">
				The Location
			</a>
			<a id="gettinghere" className="menu-item" href="/gettinghere">
				Getting Here
			</a>
			
			<a id="contact" className="menu-item" href="/contact">
				Contact Us
			</a>
		</Menu>
	);
};

export default Burgermenu;
