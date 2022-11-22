import Layout from '../components/Layout';

import GettingHereSidePanel from '../components/gettingHereSidePanel';
import {useEffect, useState} from 'react';
import dynamic from "next/dynamic";


const GettingHereText = dynamic(() => import('../components/gettingHereText'), { ssr: false });
const GettingHereMap = dynamic(() => import('../components/gettingHereMap'), { ssr: false });

const GettingHere = () => {

 return (
	<div>

			<Layout title="Getting Here">
			<GettingHereSidePanel />
				<GettingHereText />
				<div className="tabletPortMap">
				<GettingHereMap width={680} />
				</div>
				<div className="mobilePortMapGettingHere">
				<GettingHereMap width={300} />
				</div>
			</Layout>
	</div>
	)};


export default GettingHere;
