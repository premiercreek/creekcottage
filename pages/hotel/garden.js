import Layout from '../../components/Layout';
import GardenText from '../../components/gardenText';
import GardenSidePanel from '../../components/gardenSidePanel.js';
import HotelSubMenu from '../../components/hotelSubMenu';

const Garden = () => <Layout title="Gardens">
    <GardenSidePanel />
    <GardenText /> 
     <div className="menuPanelBottom">
        <HotelSubMenu />
    </div>
</Layout>;

export default Garden;
