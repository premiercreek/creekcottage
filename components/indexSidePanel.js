import React from 'react';
import Link from 'next/link';
import HotelSubMenu from './hotelSubMenu';import { useRouter } from 'next/router';

const ContactSidePanel = () => {

const router = useRouter();
	return (
		<div className="sidePanel">

			<div className="sidePanelHotelText">
				<h1>Creek Cottage</h1>
					<p>
						Welcome to Creek Cottage, the only backpacker hostel in Queen Charlotte.  We have three private rooms available, with a common cooking area, a log stove and a dining area with views looking onto the water.  We try to limit the number of guests so that everyone is comfortable.</p><br/>
		<p>The hostel is in the grounds of an historical hotel.  There is free car-parking and wifi for all guests.  The hostel is a couple of minutes’ walk from the marina, the laundromat, the ATM and the post office.  There are several small restaurants in the village, also within easy reach.</p>
			</div>

<div className="menuPanelTop">

<HotelSubMenu /></div>
		</div>
	);
};

export default ContactSidePanel;
