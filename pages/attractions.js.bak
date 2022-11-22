import Layout from '../components/Layout';
import AttractionsSidePanel from '../components/attractionsSidePanel';
import AttractionsSubMenu from '../components/attractionsSubMenu';
import dynamic from "next/dynamic";

const AttractionsMap = dynamic(() => import('../components/attractionsMap'), { ssr: false });
const AttractionsText = dynamic(() => import('../components/attractionsText'), { ssr: false });


const Attractions = () => (
	<Layout title="Attractions">
	<AttractionsSidePanel />
		<AttractionsText />
		 
			<div className="smallMonitorMap">
			<AttractionsMap width={300} />
			</div>
			<div className="tabletPortMap">
			<AttractionsMap width={550} />
			</div>
			<div className="mobilePortMapAttractions">
			<AttractionsMap width={300} />
			</div>
		</Layout>
);

export default Attractions;