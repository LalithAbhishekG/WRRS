import Banner from '../Components/Shared/Banner';
import Header from '../Components/Shared/Header';
import Footer from '../Components/Shared/Footer';
import Involve from '../Components/GetInvolved/Involve';
import Contact from '../Components/GetInvolved/Contact';

export default function GetInvolved() {
  return (
    <div>
        <Header />
      <Banner heading="Get Involved" />
        <Involve />
        <Contact />
        <Footer />
    </div>
  );
}