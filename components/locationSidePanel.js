import React from 'react';
import Link from 'next/link';
// import HotelSubMenu from './hotelSubMenu';
import { useRouter } from 'next/router';
import LocationSubMenu from './locationSubMenu';

const HaidaSidePanel = () => {

const router = useRouter();
	return (
		<div className="sidePanel">
		
<div className="sidePanelAttractionsText">
<h1>Location</h1>
	  <p>Travelling north from Queen Charlotte stop first at the Haida Heritage Centre, which has a collection of Haida artifacts, totem poles and dug-out canoes.  A little farther along, the village of Skidegate has a totem pole and wood carvers.
			</p><br/><p>
			The road north from Skidegate runs along the coast.  Before it turns west there are a couple of shops selling handicrafts and crystals.  The village of Port Clements has a small museum.  At the north of Graham Island, the Haida village of Old Masset has more totem poles on display.  East of this is Tow Hill Road, which leads to Tow Hill and Rose Spit.</p>
</div>

<div className="menuPanelTop"><LocationSubMenu/></div>
		
		<div className="menuPanelBottom">
        <LocationSubMenu />
    </div></div>
	);
};

export default HaidaSidePanel;