import React from "react";

export default function Team() {
  const directors = [
    {
      id: 1,
      name: "Sarah Adams",
      role: "Executive Director",
      description:
        "Sarah has more than 20 years’ experience in the nonprofit sector with a proven track record in building strategic partnerships, organization capacity building, fundraising, volunteer engagement, and program development. She has served in staff leadership positions, on boards, and as a consultant/trainer for organizations of all sizes, from small, grassroots nonprofits to large, national organizations. At her most recent position with Operation Homefront, she served as a senior regional director for field programs, overseeing development, programs, events, and operations in a five-state area. She has also been involved with several women’s and girls’ empowerment programs and brings that passion to WE. Sarah received her Master’s Degree in Nonprofit Leadership and Management from the University of San Diego.",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      name: "Stephanie Rivera",
      role: "Marketing Consultant",
      description:
        "Stephanie comes from a background rooted in intercultural relations and loves combining culture with design to develop authentic content that truly connects with people. With over eight years of marketing experience for various industries, her resume includes a variety of purpose-driven organizations such as the United Nations Global Compact, Fair Trade Federation, and World Vision. She earned a degree in Journalism and Media Studies from SDSU and an International Relations certificate from Oxford University. Having visited countries across Europe, Africa, and Asia, Stephanie’s exposure to different cultures allows her to see projects from new perspectives.",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b9642737?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
  ];

  const staff = [
    {
      id: 1,
      name: "Susan Hennenfent",
      role: "Staff 1",
      description:
        "Susan is a high-tech and wireless communications pioneer who spent her career in product development at Qualcomm. She is an active community volunteer as a member of the San Diego Women’s Foundation and past President of the Rotary Club of Del Mar-Solana Beach. Susan sits on the WE Programs and Partnerships Committee. She holds an MBA from SDSU.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      name: "Deborah McGraw-Block",
      role: "Staff 2",
      description:
        "Debbie has served as President of WE since 2019 and also fills the lead role for WE’s Partnerships & Programs. Previously, she served as the Chair of the Finance Committee and liaison to WE partner UCSD, ESTIMA. Debbie spent her career at UCSD, where from 1998 to 2015 she was Assistant Vice Chancellor for Resource Administration for the office of UCSD Executive Vice Chancellor for Academic Affairs. Previously, she was Assistant Dean for Fiscal Affairs for the School of Medicine from 1985 to 1998. Debbie received her Master of Arts from the University of Denver.",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b9642737?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      name: "Bridget Burns",
      role: "Staff 3",
      description:
        "Bridget is an attorney at Tresp, Day & Associates, Inc., a law firm in Solana Beach, California focusing on all aspects of trust and estate law, including complex estate planning, asset protection, charitable planning, probate, and trust administration. Bridget attended New York University School of Law and received her BA from the University of San Diego. She also serves as a committee chair for the Lawyers Club of San Diego, a bar association dedicated to the advancement of women in law and society, and is currently Secretary of WE.",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      name: "Susan Hennenfent",
      role: "Staff 1",
      description:
        "Susan is a high-tech and wireless communications pioneer who spent her career in product development at Qualcomm. She is an active community volunteer as a member of the San Diego Women’s Foundation and past President of the Rotary Club of Del Mar-Solana Beach. Susan sits on the WE Programs and Partnerships Committee. She holds an MBA from SDSU.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 5,
      name: "Deborah McGraw-Block",
      role: "Staff 2",
      description:
        "Debbie has served as President of WE since 2019 and also fills the lead role for WE’s Partnerships & Programs. Previously, she served as the Chair of the Finance Committee and liaison to WE partner UCSD, ESTIMA. Debbie spent her career at UCSD, where from 1998 to 2015 she was Assistant Vice Chancellor for Resource Administration for the office of UCSD Executive Vice Chancellor for Academic Affairs. Previously, she was Assistant Dean for Fiscal Affairs for the School of Medicine from 1985 to 1998. Debbie received her Master of Arts from the University of Denver.",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b9642737?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 6,
      name: "Bridget Burns",
      role: "Staff 3",
      description:
        "Bridget is an attorney at Tresp, Day & Associates, Inc., a law firm in Solana Beach, California focusing on all aspects of trust and estate law, including complex estate planning, asset protection, charitable planning, probate, and trust administration. Bridget attended New York University School of Law and received her BA from the University of San Diego. She also serves as a committee chair for the Lawyers Club of San Diego, a bar association dedicated to the advancement of women in law and society, and is currently Secretary of WE.",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <>
      <section className="py-20 px-6 bg-[#F8F7FC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#BC1EB0] leading-tight">
              BOARD OF DIRECTORS
            </h1>
            <div className="w-16 h-px bg-[#F8F7FC] mx-auto mt-6"></div>
          </div>
          <div className="space-y-16">
            {directors.map((person) => (
              <div
                key={person.id}
                className="flex flex-col md:flex-row items-start md:items-center gap-10"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full md:w-1/3 h-72 object-cover rounded-xl shadow-sm"
                />
                <div className="flex-1 text-justify">
                  <h2 className="text-2xl font-bold text-[#BC1EB0]">
                    {person.name}
                  </h2>
                  <p className="text-[#91007d] font-medium mt-2 mb-4">
                    {person.role}
                  </p>
                  <p className="text-black text-base leading-relaxed">
                    {person.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#F8F7FC]  ">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#BC1EB0] leading-tight">
              OUR STAFF
            </h1>
            <div className="w-20 h-px bg-[#F8F7FC] mx-auto mt-6"></div>
          </div>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {staff.map((person) => (
              <div key={person.id} className="group cursor-default text-justify">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-72 object-cover rounded-xl shadow-sm"
                />
                <h2 className="mt-6 text-2xl font-bold text-[#BC1EB0]">
                  {person.name}
                </h2>
                <p className="text-[#91007d] font-medium mt-2 mb-4">
                  {person.role}
                </p>
                <p className="text-black text-sm leading-relaxed">
                  {person.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
