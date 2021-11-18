import Layout from '../../components/Layout';
import ViewText from '../../components/viewText';
import ViewSidePanel from '../../components/viewSidePanel.js';
import HotelSubMenu from '../../components/hotelSubMenu';

const View = () => <Layout title="Views">
    <ViewSidePanel />
    <ViewText />
     <div className="menuPanelBottom">
        <HotelSubMenu />
    </div>
</Layout>;

export default View;
