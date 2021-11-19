import React from 'react';
import Link from 'next/link';
import HotelSubMenu from './hotelSubMenu';
import { useRouter } from 'next/router';
import LocationSubMenu from './locationSubMenu';

const WildlifeSidePanel = () => {

const router = useRouter();
	return (
		<div className="sidePanel">

			<div className="sidePanelAttractionsText">
				<h1>Wildlife</h1>
					  
       <p>After the last Ice Age the Hecate Strait was flooded, cutting Haida Gwaii off from the rest of North America.  Large predators such as wolves and cougars were not able to re-colonize when the climate warmed up.  </p><br/><p>As a result of the subsequent isolation, unique species and sub-species developed: for example, the Haida Gwaii black bears (Ursus americanus carlottae) have developed larger jaws and teeth because of their diet of shellfish.  Bears are known as “Elder Kinsman” in Haida culture: when they die they are covered in eagle down.  Today the bears are legally protected.</p><br/><p>

Grey whales and orcas visit regularly and can sometimes be seen from the shoreline.
</p><br/>
		</div>
			
<div className="menuPanelTop">

<LocationSubMenu/></div>
		</div>
	);
};

export default WildlifeSidePanel;
