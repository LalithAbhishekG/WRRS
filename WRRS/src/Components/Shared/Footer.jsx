import Logo from "../../Assets/Shared/Logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#F8F7FC]">

      <div className="bg-pink-900 text-white py-6 px-6 text-center">
        <p className="text-lg font-medium">Interest in contributing towards empowering women?</p>
        <button className="mt-4 bg-white text-[#BC1EB0] font-medium px-6 py-2 rounded-lg hover:bg-[#F9DEF5] transition-colors">
          Yes I want to Help 
        </button>
      </div>

      <div className="py-12 px-6 md:px-12 bg-[#F8F7FC]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      
          <div className="text-center md:text-left">
            <img src={Logo} alt="WRRS Logo" className="h-12 mx-auto md:mx-0 mb-4" />
            <p className="text-[#3b3b3b] text-sm">Women Redemption Restore Society – Empowering women through education, care, and dignity.</p>
          </div>
    
          {[
            { title: "Take Action", links: ["Volunteer", "Offline Donate", "Donate"] },
            { title: "Quick Links", links: ["Chennai Home", "Coimbatore Home", "Tiruchirapalli Home", "About", "Home Tour", "Contact Us"] },
            { title: "Connect", links: ["Coimbatore", "Chennai", "Tiruchirappalli"] }
          ].map((section, i) => (
            <div key={i}>
              <h4 className="font-bold text-[#BC1EB0] mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-[#242424] hover:text-[#BC1EB0] text-sm transition-colors">
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
              wrrs.contact@gmail.com<br />
              Chennai: 044-23456789<br />
              Coimbatore: 0422-3456789<br />
              Tiruchirappalli: 9876543210
            </p>
          </div>
        </div>
      </div>

   
      <div className="bg-[#F9DEF5] text-[#BC1EB0] text-center py-3 text-sm">
        © {new Date().getFullYear()} WRRS | 
        <a href="#" className="hover:underline ml-1">Terms</a> | 
        <a href="#" className="hover:underline ml-1">Privacy</a>
      </div>
    </footer>
  );
}