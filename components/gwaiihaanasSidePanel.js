import React from 'react';
import Link from 'next/link';
import HotelSubMenu from './hotelSubMenu';
import { useRouter } from 'next/router';
import AttractionsSubMenu from './attractionsSubMenu';

const GwaiihaanasSidePanel = () => {

const router = useRouter();
	return (
		<div className="sidePanel">

<div className="sidePanelAttractionsText">
				<h1>Gwaii Haanas</h1>
		   <p>"Gwaii Haanas" means "Islands of Beauty" in the Haida language.  It consists of a national park covering the bottom third of Haida Gwaii, a Marine Conservation Area Reserve which protects 3,400sq kms of ocean and the Haida Heritage Site, which includes the remains of a number of Haida villages.  </p><br/><p>  Landscapes range from deep fjords on the west coast to alpine and sub-alpine tundra on the slopes of the mountains.  90% of the total area is forested.  There are over forty freshwater lakes, which drain water coming down from the mountains.  These, in turn, drain into the sea through dozens of streams and rivers.   </p><br/><p> There are 138 islands in the park.  Hotspring Island is particularly popular with tourists because of its thermal spring.</p>
</div>
<div className="menuPanelTop">
	<AttractionsSubMenu/>
</div>
		</div>
	);
};

export default GwaiihaanasSidePanel;