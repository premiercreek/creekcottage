import Layout from '../../components/Layout';
import WildlifeText from '../../components/wildlifeText';
import WildlifeSidePanel from '../../components/wildlifeSidePanel.js';
import AttractionsSubMenu from '../../components/attractionsSubMenu';

const Wildlife = () => <Layout title="Wildlife">
    <WildlifeSidePanel />
    <WildlifeText />
     <div className="menuPanelBottom">
        <AttractionsSubMenu />
    </div>
</Layout>;

export default Wildlife;
