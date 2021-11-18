import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const HotelSubMenu = () => {

const router = useRouter();
	return (
		

<ul>
	<li><Link href="/"><a className={router.pathname === '/' ? 'subMenuActive' : 'subMenu'}><strong>The Hotel Buildings</strong></a></Link></li>
	<li><Link href="/hotel/garden"><a className={router.pathname === '/hotel/garden' ? 'subMenuActive' : 'subMenu'}><strong>The Gardens</strong></a></Link></li>
	<li><Link href="/hotel/views"><a className={router.pathname === '/hotel/views' ? 'subMenuActive' : 'subMenu'}><strong>Views from the Hotel</strong></a></Link></li>
	<li><Link href="/hotel/history"><a className={router.pathname === '/hotel/history' ? 'subMenuActive' : 'subMenu'}><strong>The History of the Hotel</strong></a></Link></li>
</ul>
		
	);
};

export default HotelSubMenu;