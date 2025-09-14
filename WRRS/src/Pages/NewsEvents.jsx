import News from "../Components/NewsEvents/News";
import Header from "../Components/Shared/Header";
import Footer from "../Components/Shared/Footer";
import Banner from "../Components/Shared/Banner";
import Events from "../Components/NewsEvents/Events";


export default function NewsEvents() {
    return (
        <div>       
            <Header />
            <Banner heading="News & Events" />
            <News />
            <Events />
            <Footer />

      
        </div>
    );
};