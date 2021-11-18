import Layout from '../components/Layout';
import IndexText from '../components/indexText';
import IndexSidePanel from '../components/indexSidePanel.js'
import HotelSubMenu from '../components/hotelSubMenu';

const Index = () => <Layout title="Premier Creek Lodging">
    <IndexSidePanel />
    <IndexText />
      <div className="menuPanelBottom">
        <HotelSubMenu />
    </div>
</Layout>;

export default Index;
