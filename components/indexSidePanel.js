import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ContactSidePanel = () => {

const router = useRouter();
	return (
		<div className="sidePanel">

			<div className="sidePanelHotelText">
				<h1>Creek Cottage</h1>
					<p>Welcome to Creek Cottage, the only backpacker hostel in Queen Charlotte.  Your host Lenore will do everything she can to make you feel at home.  She limits the number of guests so that everyone is comfortable, so book early to reserve your place.</p>
						<h3>Facilities</h3>
						<p>We have three private rooms available, with a common cooking area, a log stove and a dining area with views looking onto the water.  There is free car-parking and wifi for all guests.  There's a small deck where you can sit out to eat in summer.</p>
						<h3>Location</h3>
						<p>We are in the heart of the village.  The hostel is a couple of minutes’ walk from the marina, the laundromat, the ATM and the post office.  There are several small restaurants in the village, also within easy reach. </p>
				<br/><p>The hostel is in the grounds of a historical hotel, surrounded by the hotel's gardens.</p>
			</div>
		</div>
	);
};

export default ContactSidePanel;
