import Layout from '../../components/Layout';
import HaidaText from '../../components/haidaText';
import HaidaSidePanel from '../../components/haidaSidePanel.js';
import LocationSubMenu from '../../components/locationSubMenu';

const Haida = () => <Layout title="Haida">
    <HaidaSidePanel />
    <HaidaText /> 
     <div className="menuPanelBottom">
        <LocationSubMenu />
    </div>
</Layout>;

export default Haida;
