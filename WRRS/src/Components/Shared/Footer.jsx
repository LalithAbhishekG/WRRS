import Logo from "../../Assets/Shared/Logo.png";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F8F7FC]">
      <div className="bg-[#BC1EB0] text-white py-6 px-6 text-center">
        <p className="text-lg font-medium">
          Interested in contributing towards empowering women?
        </p>
        <button className="mt-4 bg-white text-[#BC1EB0] font-medium px-6 py-2 rounded-lg hover:bg-[#F9DEF5] transition-colors">
          Yes, I want to Help
        </button>
      </div>

      <div className="py-12 px-6 md:px-12 bg-[#F8F7FC]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <img
              src={Logo}
              alt="WRRS Logo"
              className="h-12 mx-auto md:mx-0 mb-4"
            />
            <p className="text-[#333333] text-sm">
              Women Redemption Restore Society – Empowering women through
              education, care, and dignity.
            </p>
          </div>

          {[
            {
              title: "Take Action",
              links: ["Volunteer", "Offline Donate", "Donate"],
            },
            {
              title: "Quick Links",
              links: [
                "Chennai Home",
                "Coimbatore Home",
                "Tiruchirapalli Home",
                "About",
                "Home Tour",
                "Contact Us",
              ],
            },
            {
              title: "Connect",
              links: ["Coimbatore", "Chennai", "Tiruchirappalli"],
            },
          ].map((section, i) => (
            <div key={i}>
              <h4 className="font-bold text-[#BC1EB0] mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="text-[#333333] hover:text-[#E590DA] text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="text-center md:text-left">
            <h4 className="font-bold text-[#BC1EB0] mb-3">Contact</h4>
            <p className="text-[#333333] text-sm leading-relaxed">
              <a href="mailto:wrrs.contact@gmail.com" className="hover:underline">
                wrrs.contact@gmail.com
              </a>
              <br />
              <a href="tel:04423456789" className="hover:underline">
                Chennai: 044-23456789
              </a>
              <br />
              <a href="tel:04223456789" className="hover:underline">
                Coimbatore: 0422-3456789
              </a>
              <br />
              <a href="tel:9876543210" className="hover:underline">
                Tiruchirappalli: 9876543210
              </a>
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <a href="#" className="text-[#BC1EB0] hover:text-[#E590DA]">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[#BC1EB0] hover:text-[#E590DA]">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-[#BC1EB0] hover:text-[#E590DA]">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F9DEF5] text-[#BC1EB0] text-center py-3 text-sm">
        © {new Date().getFullYear()} WRRS |{" "}
        <a href="#" className="hover:underline ml-1">
          Terms
        </a>{" "}
        |{" "}
        <a href="#" className="hover:underline ml-1">
          Privacy
        </a>
      </div>
    </footer>
  );
}
