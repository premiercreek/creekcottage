import Layout from '../../components/Layout';
import OceanviewText from '../../components/oceanviewText';
import OceanviewSidePanel from '../../components/oceanviewSidePanel.js';
import RoomsSubMenu from '../../components/roomsSubMenu';

const Oceanview = () => <Layout title="Oceanview Rooms">
    <OceanviewSidePanel />
	<OceanviewText />
    <div className="menuPanelBottom">
        <RoomsSubMenu />
    </div>
</Layout>;

export default Oceanview;