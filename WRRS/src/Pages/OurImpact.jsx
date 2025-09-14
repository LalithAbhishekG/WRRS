import { FileText, Wallet, Users, Briefcase } from "lucide-react";
import Header from "../Components/Shared/Header";
import Footer from "../Components/Shared/Footer";
import Banner from "../Components/Shared/Banner";

export default function OurImpact() {
  const sections = [
    {
      id: "financial",
      title: "Financial Literacy",
      icon: <Wallet size={64} className="text-[#BC1EB0]" />,
      description:
        "WE provides grants for programs that increase women’s confidence in managing their finances. The WISE indicator of financial literacy serves as a measure of the efficacy of this component within a program’s educational agenda, and also a measure of the degree to which women are empowered to manage aspects of personal financial responsibilities that emerge from participation in WE programs.",
      stats: [
        {
          org: "Via International",
          text: "52 of 53 (98%) of women expressed high confidence in personal ability to save money.",
        },
        {
          org: "Urban Corps of San Diego",
          text: "All 9 participants in the financial literacy education program expressed high confidence in performing the tasks of opening a checking or savings account, managing money and applying for a job.",
        },
        {
          org: "IRC San Diego",
          text: "75% or more of women were knowledgeable about credit score issues and how to craft a budget for their businesses.",
        },
      ],
    },
    {
      id: "provider",
      title: "Change in Provider Role",
      icon: <Users size={64} className="text-[#BC1EB0]" />,
      description:
        "WE provides grants to programs that equip women with the confidence, tools, and opportunities to improve their economic well-being and transform their lives. This metric measures changes in the degree to which participation in WE programs enables women to earn funds that they can then contribute to household finances, thus fostering a degree of resilience and self-reliance.",
      stats: [
        {
          org: "Nyaka",
          text: "Grandmothers represent almost 60% of main providers of income for the household; 21% increased their monthly contribution to the household budget.",
        },
        {
          org: "Multicolores",
          text: "Almost two thirds of the 19 artists contribute fairly regularly to their household’s monthly economic needs, while each of the 19 could make some degree of contribution.",
        },
        {
          org: "Adelante",
          text: "74% of women with renewing loans were able to make or increase a contribution to family finances on a dependable basis.",
        },
      ],
    },
    {
      id: "decision",
      title: "Change in Decision Making",
      icon: <FileText size={64} className="text-[#BC1EB0]" />,
      description:
        "WE funds programs that strengthen women’s economic agency as a pathway to greater independence and influence in their lives and communities. This metric seeks to evaluate whether access and control of economic resources further support women’s autonomy in the household decision-making role.",
      stats: [
        {
          org: "OEF de El Salvador",
          text: "42 of 48 women (88%) felt empowered to make decisions within the family.",
        },
        {
          org: "Nyaka",
          text: "The proportion of 240 women who spoke up about household decisions 'most of the time' increased by 12% over a 1-year comparison timeline.",
        },
        {
          org: "Adelante",
          text: "Nearly half of 2,776 women reported speaking up about household decision making most or all of the time.",
        },
      ],
    },
    {
      id: "business",
      title: "Business Sustainability",
      icon: <Briefcase size={64} className="text-[#BC1EB0]" />,
      description:
        "WE provides grants to programs that offer women the training and support needed to manage their funds wisely, and grow their businesses. This metric seeks to determine the longer-term value of WE’s investment in various program activities, such as start-up funding, educational interventions (trainings), and micro-loans.",
      stats: [
        {
          org: "OEF de El Salvador",
          text: "38 of 48 businesses initiated by these women were still operating after one year.",
        },
        {
          org: "IRC San Diego",
          text: "Each (100%) of businesses established in 2024 remained in business for at least 6 months.",
        },
        {
          org: "Adelante",
          text: "42 of 50 loan recipients remained in business at the one-year time period.",
        },
      ],
    },
  ];

  return (
    <>
      <Header />
      <Banner heading="Our Impact" />

      <div className="bg-[#F8F7FC] min-h-screen">
        {/* Header */}
        <header className="bg-white py-10 px-6 md:px-12 shadow-sm">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm text-gray-600 uppercase tracking-wide">
              Reports & Resources
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-1">
              Measuring Impact with WISE
            </h1>
            <div className="w-20 h-1 bg-[#BC1EB0] mx-auto mt-3 rounded-full"></div>
          </div>

          {/* Intro Text */}
          <div className="max-w-4xl mx-auto mt-8 text-center text-gray-700 text-base leading-relaxed">
            <p className="mb-4">
              To measure the impact of your support on women’s lives, WE launched{" "}
              <span className="font-semibold text-[#BC1EB0]">
                WISE: Women’s Impact, Sustainability & Empowerment Project.
              </span>
            </p>
            <p className="mb-4 text-justify">
              The WISE project is our data-driven assessment – led by our skilled
              volunteers in collaboration with our grant partners – to evaluate how
              our funding of micro-loans, financial training, and other social
              supports lead to sustained improvements in the women’s lives. WISE
              gives us the data that tells the concrete story of positive change.
            </p>
            <p className="text-justify">
              Below is our 2024 impact based on WISE metrics from our core four
              areas to measure women’s progress across WE-funded projects:
              Financial Literacy, Change in Provider Role, Change in Decision
              Making, and Business Sustainability.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto space-y-20">
            {sections.map((section, index) => (
              <div key={section.id}>
                {/* Icon & Title */}
                <div className="flex flex-col items-center text-center mb-10">
                  <div className="mb-6">{section.icon}</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#BC1EB0] mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-700 text-base leading-relaxed max-w-3xl mx-auto text-justify">
                    {section.description}
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {section.stats.map((stat, idx) => (
                    <div key={idx}>
                      <h3 className="font-semibold text-[#A21A9A] text-sm mb-2">
                        {stat.org}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed text-justify">
                        {stat.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                {index < sections.length - 1 && (
                  <hr className="border-t border-gray-300 my-12" />
                )}
              </div>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
