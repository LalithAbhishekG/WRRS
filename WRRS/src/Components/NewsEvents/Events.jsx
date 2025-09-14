import { useState } from "react";

export default function Events() {
    const events = [
        {
            id: 1,
            date: "Sun 28",
            featured: true,
            time: "September 28 @ 1:00 pm - 4:30 pm",
            title: "Empowered WE Rise: Fall Fundraiser 2025",
            venue: "Joya Kitchen",
            address: "10275 Science Center Drive, San Diego, CA, United States",
            description:
                "Empowered WE Rise | Fall Fundraiser 2025 Sunday, September 28, 2025 1:00-4:30pm * Inspiring Stories * Silent & Live Auction * Market Fair * * 2025 Woman of Empowerment Award [...]",
            price: "$150",
            image:
                "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 2,
            date: "Mon 29",
            featured: true,
            time: "September 29 @ 10:00 am - 2:00 pm",
            title: "Women’s Leadership Conference 2025",
            venue: "Grand Hall",
            address: "123 Main Street, Los Angeles, CA, United States",
            description:
                "Join us for a transformative day of networking, panels, and workshops with women leaders from across the globe. Learn, connect, and grow with peers and mentors.",
            price: "Free",
            image:
                "https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 3,
            date: "Tue 30",
            featured: false,
            time: "September 30 @ 6:00 pm - 9:00 pm",
            title: "Community Impact Awards Night",
            venue: "City Center Hall",
            address: "789 Broadway Ave, San Francisco, CA, United States",
            description:
                "Celebrate the extraordinary women making a difference in their communities. Dinner, entertainment, and award ceremony included.",
            price: "$100",
            image:
                "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 4,
            date: "Wed 01",
            featured: false,
            time: "October 1 @ 5:00 pm - 8:00 pm",
            title: "Annual Charity Auction",
            venue: "Downtown Club",
            address: "456 City Road, Los Angeles, CA",
            description:
                "Join us for our Annual Charity Auction to support community initiatives and raise funds for local programs.",
            price: "$50",
            image:
                "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 5,
            date: "Thu 02",
            featured: true,
            time: "October 2 @ 3:00 pm - 6:00 pm",
            title: "Women in Tech Meetup",
            venue: "Innovation Hub",
            address: "789 Tech Park, San Diego, CA",
            description:
                "Networking and workshops for women in tech. Share ideas, learn from mentors, and grow your career.",
            price: "Free",
            image:
                "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 6,
            date: "Fri 03",
            featured: false,
            time: "October 3 @ 1:00 pm - 4:00 pm",
            title: "Health & Wellness Fair",
            venue: "Community Center",
            address: "321 Wellness Street, San Francisco, CA",
            description:
                "Explore booths, workshops, and seminars focused on health and wellness for the community.",
            price: "Free",
            image:
                "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const eventsPerPage = 3;
    const totalPages = Math.ceil(events.length / eventsPerPage);

    const currentEvents = events.slice(
        currentPage * eventsPerPage,
        (currentPage + 1) * eventsPerPage
    );

    return (
        <div className="h-auto w-screen flex items-center justify-center p-10 bg-pink-50">
            <div className="flex-col space-y-8 w-full max-w-6xl">
                <h1 className="text-5xl text-pink-700 text-center mb-10 font-bold">
                    EVENTS
                </h1>

                {currentEvents.map((event) => (
                    <div
                        key={event.id}
                        className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
                    >
                        {/* Date */}
                        <div className="flex items-center justify-center p-6">
                            <div className="text-xl font-bold text-gray-800">{event.date}</div>
                        </div>

                        {/* Responsive Divider */}
                        <div className="bg-pink-300 w-full h-1 md:w-1 md:h-auto" />

                        {/* Details */}
                        <div className="flex-1 p-6 border-r border-gray-200">
                            <div className="flex items-center mb-4 text-sm text-gray-500">
                                <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                                {event.featured && (
                                    <>
                                        <span className="font-medium text-pink-700">Featured</span>
                                        <span className="mx-2">•</span>
                                    </>
                                )}
                                <span>{event.time}</span>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h2>

                            <p className="text-gray-700 mb-4">
                                <span className="font-medium">{event.venue}</span>{" "}
                                <span className="text-gray-600">{event.address}</span>
                            </p>

                            <p className="text-gray-700 mb-4 leading-relaxed">{event.description}</p>

                            <div className="text-lg font-semibold text-gray-900">{event.price}</div>
                        </div>

                        {/* Image */}
                        <div className="w-full md:w-1/3 relative">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="h-64 md:h-full w-full object-cover"
                            />
                        </div>
                    </div>
                ))}

                {/* Pagination */}
                <div className="flex space-x-3 mt-8 justify-center">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index)}
                            className={`px-4 py-2 rounded-full border transition-colors ${
                                index === currentPage
                                    ? "bg-pink-700 text-white border-pink-700"
                                    : "bg-white text-pink-700 border-pink-200"
                            }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
