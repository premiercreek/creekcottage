import Layout from '../../components/Layout';
import TubandkitchenText from '../../components/tubandkitchenText';
import TubandkitchenSidePanel from '../../components/tubandkitchenSidePanel.js';
import RoomsSubMenu from '../../components/roomsSubMenu';

const Rooms = () => <Layout title="Garden Room">
    <TubandkitchenSidePanel />
	<TubandkitchenText />
    <div className="menuPanelBottom">
        <RoomsSubMenu />
    </div>
</Layout>;

export default Rooms;