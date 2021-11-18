import Layout from '../../components/Layout';
import NobathroomText from '../../components/nobathroomText';
import NobathroomSidePanel from '../../components/nobathroomSidePanel.js';
import RoomsSubMenu from '../../components/roomsSubMenu';

const Rooms = () => <Layout title="Creek Rooms">
    <NobathroomSidePanel />
	<NobathroomText />
    <div className="menuPanelBottom">
        <RoomsSubMenu />
    </div>
</Layout>;

export default Rooms;