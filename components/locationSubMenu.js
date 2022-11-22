import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


const AttractionsSubMenu = () => {

const router = useRouter();
	return (
<ul>
	<li><Link href="/location"><a className={router.pathname === '/location' ? 'subMenuActive' : 'subMenu'}><strong>Location</strong></a></Link></li>
	<li><Link href="/location/haida"><a className={router.pathname === '/location/haida' ? 'subMenuActive' : 'subMenu'}><strong>Haida Culture and Artifacts</strong></a></Link></li>
	<li><Link href="/location/gwaiihaanas"><a className={router.pathname === '/location/gwaiihaanas' ? 'subMenuActive' : 'subMenu'}><strong>Gwaii Haanas National Park</strong></a></Link></li>
	<li><Link href="/location/wildlife"><a className={router.pathname === '/location/wildlife' ? 'subMenuActive' : 'subMenu'}><strong>Our Unique Wildlife</strong></a></Link></li>
</ul>
		
	);
};

export default AttractionsSubMenu;
