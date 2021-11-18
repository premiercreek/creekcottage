import React from 'react';
import Link from 'next/link';
import HotelSubMenu from './hotelSubMenu';
import { useRouter } from 'next/router';
import AttractionsSubMenu from './attractionsSubMenu';

const HaidaSidePanel = () => {

const router = useRouter();
	return (
		<div className="sidePanel">
		
<div className="sidePanelAttractionsText">
<h1>Haida Culture</h1>
	   <p>
 The Haida have occupied this archipelago since at least the last Ice Age.  Unforutnately, most Haida people died following the introduction of smallpox and other diseases.  As a result, there are only two Haida villages which are still inhabited (Skidegate and Old Masset).  </p><br /><p>
 Remains of the original villages are in the <Link href="https://www.pc.gc.ca/en/pn-np/bc/gwaiihaanas/activ/experiences/villages-village"><a>Haida Heritage Site</a></Link>, which can be reached by boat. Typically these boat trips last several days and cost several thousand dollars.
 </p><br /><p>
The most accessible attraction is probably the <Link href="http://haidagwaiimuseum.ca/"><a>Haida Gwaii Museum</a></Link>, which is only about 7km from Queen Charlotte.  This includes a number of Haida totem poles and dug-out canoes.  A little farther along, the village of Skidegate has a totem pole and professional Haida carvers.</p>
</div>

<div className="menuPanelTop"><AttractionsSubMenu/></div>
		</div>
	);
};

export default HaidaSidePanel;
