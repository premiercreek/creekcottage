import Layout from '../../components/Layout';
import HistoryText from '../../components/historyText';
import HistorySidePanel from '../../components/historySidePanel.js';
import HotelSubMenu from '../../components/hotelSubMenu';

const History = () => <Layout title="History">
    <HistorySidePanel />
    <HistoryText />
     <div className="menuPanelBottom">
        <HotelSubMenu />
    </div>
</Layout>;

export default History;
