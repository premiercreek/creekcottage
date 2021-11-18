import React from 'react';
import Link from 'next/link';
import HotelSubMenu from './hotelSubMenu';
import { useRouter } from 'next/router';

const HistorySidePanel = () => {

const router = useRouter();
	return (
		<div className="sidePanel">

<div className="sidePanelHotelText">
				<h1>The History of the Hotel</h1>
		<p>Queen Charlotte grew up around a sawmill, which was built in 1908.  The hotel was built two years later to house the workers moving to the new settlement.</p> <br/>
		<p>Its original name was the Premier Hotel, because it was built next to Premier Creek, a small creek which runs along one side of the property.  It later changed its name to the Haida Hotel, but the name changed back to Premier Creek Lodging.  Over the years it has had six owners, each of whom stamped his or her own personality on it.</p>
</div>
<div className="menuPanelTop">
	<HotelSubMenu/>
</div>
		</div>
	);
};

export default HistorySidePanel;