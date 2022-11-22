import Layout from '../components/Layout';
import LocationSidePanel from '../components/locationSidePanel';
import LocationSubMenu from '../components/locationSubMenu';
import dynamic from "next/dynamic";

const LocationMap = dynamic(() => import('../components/locationMap'), { ssr: false });
const LocationText = dynamic(() => import('../components/locationText'), { ssr: false });


const Location = () => (
	<Layout title="Creek Cottage">
	<LocationSidePanel />
		<LocationText />
		 
			<div className="smallMonitorMap">
			<LocationMap width={300} />
			</div>
			<div className="tabletPortMap">
			<LocationMap width={550} />
			</div>
			<div className="mobilePortMapAttractions">
			<LocationMap width={300} />
			</div>
		</Layout>
);

export default Location;
