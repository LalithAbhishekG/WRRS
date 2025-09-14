import Team from "../Components/About/MeetOurTeam";
import Header from "../Components/Shared/Header";
import Footer from "../Components/Shared/Footer";
import Banner from "../Components/Shared/Banner";
import OurStory from "../Components/About/OurStory";
export default function About() {
    return (
        <div>
            <Header />
            <Banner heading="About" />
            <OurStory />
            <Team />
            <Footer />
        </div>
    );
};