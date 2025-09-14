import Banner from '../Components/Shared/Banner';
import Header from '../Components/Shared/Header';
import Footer from '../Components/Shared/Footer';
import Involve from '../Components/GetInvolved/Involve';

export default function GetInvolved() {
  return (
    <div>
        <Header />
      <Banner heading="Get Involved" />
        <Involve />
        <Footer />
    </div>
  );
}