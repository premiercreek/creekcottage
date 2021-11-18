import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const RoomsSubMenu = () => {

const router = useRouter();
	return (
<ul>
	<li><Link href="/rooms"><a className={router.pathname === '/rooms' ? 'subMenuActive' : 'subMenu'}><strong>Rooms and Prices</strong></a></Link></li>
	<li><Link href="/rooms/oceanview"><a className={router.pathname === '/rooms/oceanview' ? 'subMenuActive' : 'subMenu'}><strong>Oceanview Rooms</strong>: Large Rooms with Bathrooms<br/>$100 to $118 + 13% tax</a></Link></li>
	<li><Link href="/rooms/cottage"><a className={router.pathname === '/rooms/cottage' ? 'subMenuActive' : 'subMenu'}><strong>The Cottage</strong>: Small Independent Cottage<br/>$100 + 13% tax</a></Link></li>
	<li><Link href="/rooms/smallbathroom"><a className={router.pathname === '/rooms/smallbathroom' ? 'subMenuActive' : 'subMenu'}><strong>Courtyard Room</strong>: Small Room with Bathroom<br/>$75 to $95 + 13% tax</a></Link></li>
	<li><Link href="/rooms/tubandkitchen"><a className={router.pathname === '/rooms/tubandkitchen' ? 'subMenuActive' : 'subMenu'}><strong>Garden Room</strong>: Small Room with Tub and Kitchen<br/>$75 to $80 + 13% tax</a></Link></li>
	<li><Link href="/rooms/nobathroom"><a className={router.pathname === '/rooms/nobathroom' ? 'subMenuActive' : 'subMenu'}><strong>Creek Rooms</strong>: Small Room with Shared Bathroom<br/>$50 to $65 + 13% tax</a></Link></li>
</ul>
		
	);
};

export default RoomsSubMenu;
