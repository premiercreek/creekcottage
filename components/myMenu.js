import React from 'react';
import Link from 'next/link';
import BurgerMenu from './burgermenu';
import { useRouter } from 'next/router';

const MyMenu = () => {
	const router = useRouter();
	return (
		<div>
			<div className="bigMenu">
				<ul className="menu">
					<li>
						<Link href="/">
							<a className={(((router.pathname.slice(0,1) === '/') && !router.pathname.slice(2,3)) || (router.pathname.slice(0,6) ==='/hotel')) ? 'active' : 'menu'}>Home</a>
						</Link>
					</li>	<li>
						<Link href="/facilities">
							<a className={router.pathname.slice(0,12) === '/facilities' ? 'active' : 'menu'}>Facilities</a>
						</Link>
					</li><li>
											<Link href="/garden">
							<a className={router.pathname.slice(0,10) === '/garden' ? 'active' : 'menu'}>The Gardens</a>
						</Link>
					</li>

					<li>
						<Link href="/location">
							<a className={router.pathname.slice(0,12) === '/location' ? 'active' : 'menu'}>Location</a>
						</Link>
					</li>
									<li>
						<Link href="/gettinghere">
							<a className={router.pathname.slice(0,12) === '/gettinghere' ? 'active' : 'menu'}>Getting Here</a>
						</Link>
					</li>

					<li>
						<Link href="/contact">
							<a className={router.pathname.slice(0,10) === '/contact' ? 'active' : 'menu'}>Contact</a>
						</Link>
					</li>
				</ul>
			</div>
			<div className="smallMenu">
				<BurgerMenu />
			</div>
		</div>
	);
};

export default MyMenu;
