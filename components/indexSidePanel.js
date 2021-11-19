import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ContactSidePanel = () => {

const router = useRouter();
	return (
		<div className="sidePanel">

			<div className="sidePanelHotelText">
				<h1>Creek Cottage</h1>
					<p>
						Welcome to Creek Cottage, the only backpacker hostel in Queen Charlotte. We have three private rooms available, with a common cooking area, a log stove and a dining area with views looking onto the water.  We try to limit the number of guests so that everyone is comfortable.</p><br/>
								<h3>Facilities</h3>
						<p>There's a small deck where you We are right across from the beach, where you can sit down watching the fishing boats come in.</p>
		<p>The hostel is in the grounds of an historical hotel.  There is free car-parking and wifi for all guests.  </p>
						<h3>Location</h3>
						<p>We are in the heart of the village.  The hostel is a couple of minutes’ walk from the marina, the laundromat, the ATM and the post office.  There are several small restaurants in the village, also within easy reach. </p>
				<h3>Getting Here</h3>
				<p>	The airport shuttle will drop you off right outside the door.  If you're coming by car there's free parking next to the cottage itself.</p>
			</div>
		</div>
	);
};

export default ContactSidePanel;
