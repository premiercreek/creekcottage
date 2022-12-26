import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const GettingHereSidePanel = () => {

const router = useRouter();
	return (
		<div className="sidePanel">
<div className="sidePanelgettingHereText">
			<h1>Getting Here</h1>
	<p>We are right in the centre of Daajing Giids (Queen Charlotte) in the grounds of Premier Creek Lodging.  When you arrive, go to the Premier Creek reception office.</p><br/><p>There are several ways of getting here, depending on how much time you have and how adventurous you are: click the '+' button on the map to see the location of these transit points.  </p><br/>
	<p>Getting to the hotel from Sandspit Airport takes about an hour. <a href='http://eagletransit.net/services/transit-services/sandspit-airport-shuttle/'>Eagle Transit</a> runs a mini-bus which waits outside the airport, has priority loading on the ferry and will drop you off right outside our hotel.  The fare is $30 (credit card or debit card) and $27 (cash) one-way per person.</p><br/>
	
	<p><a href= 'https://www.pacificcoastal.com'>Pacific Coastal </a>Flights to Masset are limited to two a week.  There is no public transport from Masset, but <a href='http://eagletransit.net/services/transit-services/sandspit-airport-shuttle/'>Eagle Transit</a> has a taxi service.</p><br/>
	
	<p>It is also possible to fly to Masset from Prince Rupert with <a href='http://inlandair.bc.ca/'>Inland Air Charters</a>.  Bear in mind that, since this arrives in Masset, you will need to take a taxi down to Daajing Giids (Queen Charlotte) (see above).</p><br/>
	
	<p>The only scheduled sea route to Haida Gwaii is <a href='https://www.bcferries.com/seasonal-schedules?departurePort=PPR&arrivalPort=PSK'>BC Ferries'</a> service from Prince Rupert.  You can reach Prince Rupert by car (two days from Vancouver) or by train.  It's also possible to come up by ferry from Port Hardy on Vancouver Island.  <a href='http://eagletransit.net/services/transit-services/sandspit-airport-shuttle/'>Eagle Transit </a>has a taxi waiting at the ferry terminal to take you into Daajing Giids (Queen Charlotte); alternatively, hitch-hiking is easy.</p>
			</div>
</div>
	);
};

export default GettingHereSidePanel;
