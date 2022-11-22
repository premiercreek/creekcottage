import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


const AttractionsSubMenu = () => {

const router = useRouter();
	return (
<ul>
	<li><Link href="/attractions"><a className={router.pathname === '/attractions' ? 'subMenuActive' : 'subMenu'}><strong>Attractions</strong></a></Link></li>
	<li><Link href="/attractions/haida"><a className={router.pathname === '/attractions/haida' ? 'subMenuActive' : 'subMenu'}><strong>Haida Culture and Artifacts</strong></a></Link></li>
	<li><Link href="/attractions/gwaiihaanas"><a className={router.pathname === '/attractions/gwaiihaanas' ? 'subMenuActive' : 'subMenu'}><strong>Gwaii Haanas National Park</strong></a></Link></li>
	<li><Link href="/attractions/wildlife"><a className={router.pathname === '/attractions/wildlife' ? 'subMenuActive' : 'subMenu'}><strong>Our Unique Wildlife</strong></a></Link></li>
</ul>
		
	);
};

export default AttractionsSubMenu;
