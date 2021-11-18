import Layout from '../../components/Layout';
import CottageText from '../../components/cottageText';
import CottageSidePanel from '../../components/cottageSidePanel.js';
import RoomsSubMenu from '../../components/roomsSubMenu';

const Cottage = () => <Layout title="Cottage">
    <CottageSidePanel />
	<CottageText />
    <div className="menuPanelBottom">
        <RoomsSubMenu />
    </div>
</Layout>;

export default Cottage;