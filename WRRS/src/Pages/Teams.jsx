import Teams from "../Components/About/MeetOurTeam";
import Header from "../Components/Shared/Header";
import Footer from "../Components/Shared/Footer";
import Banner from "../Components/Shared/Banner";

export default function TeamsPage() {
    return (
        <div>
            <Header />
            <Banner heading="Meet Our Team" />
            <Teams />
            <Footer />
        </div>
    );
};