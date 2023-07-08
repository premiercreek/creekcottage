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
						<Link href="/"
							 className={(((router.pathname.slice(0,1) === '/') && !router.pathname.slice(2,3)) || (router.pathname.slice(0,6) ==='/hotel')) ? 'active' : 'menu'}>Home
						</Link>
					</li>	<li>
						<Link href="/facilities"
							 className={router.pathname.slice(0,12) === '/facilities' ? 'active' : 'menu'}>Facilities
						</Link>
					</li><li>
											<Link href="/garden"
							 className={router.pathname.slice(0,10) === '/garden' ? 'active' : 'menu'}>The Gardens
						</Link>
					</li>

					<li>
						<Link href="/location"
							 className={router.pathname.slice(0,12) === '/location' ? 'active' : 'menu'}>Location
						</Link>
					</li>
									<li>
						<Link href="/gettinghere"
							 className={router.pathname.slice(0,12) === '/gettinghere' ? 'active' : 'menu'}>Getting Here
						</Link>
					</li>

					<li>
						<Link href="/contact"
							 className={router.pathname.slice(0,10) === '/contact' ? 'active' : 'menu'}>Contact
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
