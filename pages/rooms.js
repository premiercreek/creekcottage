import Layout from '../components/Layout';
import RoomsText from '../components/roomsText';
import RoomsSidePanel from '../components/roomsSidePanel.js';

const Cottage = () => <Layout title="Cottage">
    <RoomsSidePanel />
	<RoomsText />
</Layout>;

export default Cottage;
