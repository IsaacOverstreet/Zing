export type ExploreEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  price: string;
  image: string;
  category: string;
};

export const recommendedEvents: ExploreEvent[] = [
  {
    id: "1",
    title: "AI Builders Meetup",
    date: "Jul 11, 2025",
    time: "10:00 AM",
    location: "OAU, Ile-Ife",
    price: "₦10,000",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
    category: "Technology",
  },
  {
    id: "2",
    title: "Spoken Word Night",
    date: "Jul 13, 2025",
    time: "10:00 AM",
    location: "UNILAG",
    price: "₦25,000",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    category: "Arts",
  },
  {
    id: "3",
    title: "Finance & Investing Summit",
    date: "Jul 13, 2025",
    time: "12:00 PM",
    location: "LASU",
    price: "Free",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
    category: "Business",
  },
  {
    id: "4",
    title: "Campus 5K Run",
    date: "Jul 14, 2025",
    time: "06:00 AM",
    location: "UNILAG",
    price: "₦5,000",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635",
    category: "Sports",
  },
];

export const trendingEvents: ExploreEvent[] = [
  {
    id: "5",
    title: "UI Tech Fest 2025",
    date: "May 20, 2025",
    time: "10:00 AM",
    location: "Trenchard Hall",
    price: "₦4,000",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    category: "Technology",
  },
  {
    id: "6",
    title: "TechStorm – Coding and Robotics Championship",
    date: "May 20, 2025",
    time: "10:00 AM",
    location: "Tech Club Auditorium",
    price: "$40",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
    category: "Technology",
  },
  {
    id: "7",
    title: "Davido Live Concert",
    date: "May 20, 2025",
    time: "10:00 AM",
    location: "School Park",
    price: "Free",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea",
    category: "Music",
  },
];
