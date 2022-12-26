import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import LocationSubMenu from './locationSubMenu';

const HaidaSidePanel = () => {

const router = useRouter();
	return (
		<div className="sidePanel">
		
<div className="sidePanelAttractionsText">
<h1>Location</h1>
	<p>Daajing Giids (Queen Charlotte) is the main administrative centre of Haida Gwaii.  It's a good base for heading north to the rest of Graham Island or south, to Gwaii Haanas. </p>
	<h3>Trails</h3>
	<p>From Daajing Giids (Queen Charlotte) there are a number of trails through the forest.  The most spectacular (and hardest) of these is the Sleeping Beauty Trail, which includes some steep climbs in places.  Lenore's husband Pete is an experienced hiker and can advise you further.</p>
	<h3>Travelling around Haida Gwaii</h3>
	<p>There is no public transport in Haida Gwaii apart from the airport shuttle.  Car rental is available in the village (ask Lenore for recommendations).  However, it's very expensive.  Unlike on the mainland, hitch-hiking is quite common, and is perfectly safe.  The best place to pick up a ride out of the village is on the corner of Wharf Street and Oceanview Drive.</p>
		<h3>What to See</h3>
		<p>Travelling north from Daajing Giids (Queen Charlotte) stop first at the Haida Heritage Centre, which has a collection of Haida artifacts, totem poles and dug-out canoes.  A little farther along, the village of Skidegate has a totem pole and wood carvers.
			</p><br/><p>
			The road north from Skidegate runs along the coast.  Before it turns west there are a couple of shops selling handicrafts and crystals.  The village of Port Clements has a small museum.  At the north of Graham Island, the Haida village of Old Masset has more totem poles on display.  East of this is Tow Hill Road, which leads to Tow Hill and Rose Spit.</p>
</div>

{/* <div className="menuPanelTop"><LocationSubMenu/></div> */}
		
{/* 		<div className="menuPanelBottom"> */}
{/*         <LocationSubMenu /> */}
    {/* </div> */}
	</div>
	);
};

export default HaidaSidePanel;
