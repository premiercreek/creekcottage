import Layout from '../../components/Layout';
import SmallbathroomText from '../../components/smallbathroomText';
import SmallbathroomSidePanel from '../../components/smallbathroomSidePanel';
import RoomsSubMenu from '../../components/roomsSubMenu';

const Rooms = () => <Layout title="Courtyard Rooms">
    <SmallbathroomSidePanel />
	<SmallbathroomText />
    <div className="menuPanelBottom">
        <RoomsSubMenu />
    </div>
</Layout>;

export default Rooms;