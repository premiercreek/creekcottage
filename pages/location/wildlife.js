import Layout from '../../components/Layout';
import WildlifeText from '../../components/wildlifeText';
import WildlifeSidePanel from '../../components/wildlifeSidePanel.js';
import LocationSubMenu from '../../components/locationSubMenu';

const Wildlife = () => <Layout title="Wildlife">
    <WildlifeSidePanel />
    <WildlifeText />
     <div className="menuPanelBottom">
        <LocationSubMenu />
    </div>
</Layout>;

export default Wildlife;
