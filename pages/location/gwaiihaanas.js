import Layout from '../../components/Layout';
import GwaiihaanasText from '../../components/gwaiihaanasText';
import GwaiihaanasSidePanel from '../../components/gwaiihaanasSidePanel.js';
import LocationSubMenu from '../../components/locationSubMenu';

const Gwaiihaanas = () => <Layout title="Gwaiihaanas">
    <GwaiihaanasSidePanel />
    <GwaiihaanasText />
     <div className="menuPanelBottom">
        <LocationSubMenu />
    </div>
</Layout>;

export default Gwaiihaanas;
