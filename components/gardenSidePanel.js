import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const GardenSidePanel = () => {

const router = useRouter();
	return (
		<div className="sidePanel">
		
	<h1>The Gardens</h1>
	<h3>The Creek</h3>
	<p>Creek Cottage is named after a creek which runs up one side of the property.  The water in the creek is drinkable, and makes a refreshing change from the mains water in Queen Charlotte, which is heavily chlorinated.</p><br/>
	<h3>Vegetables and Flowers</h3>
	<p>At the back of the garden Lenore’s husband Pete grows vegetables and flowers: he learnt his skills in Tasmania and has found that getting produce to grown in the much cloudier environment of Haida Gwaii is often a challenge.  However, plants which are better adapted to harsher weather do well. </p><br />
	<h3>Ravens and Eagles</h3>
	<p> While you are in the garden you may spot two of Haida Gwaii's definitive species, the common raven (Corvus corax) and the bald eagle (Haliaeetus leucocephalus).  These two animals are so intertwined in Haida culture that the Haida people are divided into two clans, 'the ravens' and 'the eagles'.  The raven is a key player in the Haida creation myth, and both birds feature heavily on Haida totem poles.</p>
</div>

	);
};

export default GardenSidePanel;
