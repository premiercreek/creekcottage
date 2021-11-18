import Layout from '../../components/Layout';
import HaidaText from '../../components/haidaText';
import HaidaSidePanel from '../../components/haidaSidePanel.js';
import AttractionsSubMenu from '../../components/attractionsSubMenu';

const Haida = () => <Layout title="Haida">
    <HaidaSidePanel />
    <HaidaText /> 
     <div className="menuPanelBottom">
        <AttractionsSubMenu />
    </div>
</Layout>;

export default Haida;
