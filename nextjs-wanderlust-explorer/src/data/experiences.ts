import { EXPERIENCE_CATEGORIES, type Experience } from "@/types/experience";

const destinations = [
  "Old City, Philadelphia, USA",
  "Center City, Philadelphia, USA",
  "Fishtown, Philadelphia, USA",
  "Rittenhouse, Philadelphia, USA",
  "University City, Philadelphia, USA",
  "South Philly, Philadelphia, USA",
  "Fairmount, Philadelphia, USA",
  "Northern Liberties, Philadelphia, USA",
  "Manayunk, Philadelphia, USA",
  "Chestnut Hill, Philadelphia, USA",
];

const titleFragments = [
  "Historic Highlights Walk",
  "Street Food Discovery",
  "Sunset River Cruise",
  "Hidden Alleys Bike Tour",
  "Market to Table Workshop",
  "Skyline Kayak Session",
  "Neighborhood Art Crawl",
  "Mindful Morning Escape",
  "Forest to Falls Trek",
  "Night Lights Photo Route",
];

const descriptionFragments = [
  "Explore iconic landmarks, local stories, and surprising moments with a guide who knows every corner.",
  "Taste signature dishes and family recipes while learning the culture behind each bite.",
  "Glide through scenic routes at golden hour with small-group pacing and relaxed stops.",
  "Follow resident curators to find murals, studios, and hidden creative spaces.",
  "Blend movement, breathing, and nature for a low-stress reset in the heart of the city.",
  "Venture beyond tourist zones and discover authentic neighborhoods and local rituals.",
  "Capture unforgettable views and travel-ready photos with practical guidance.",
  "Connect with artisans, chefs, and storytellers for an immersive, hands-on session.",
  "Enjoy a balanced itinerary with culture, flavor, and optional adventure add-ons.",
  "Perfect for first-time visitors seeking a curated introduction to the destination.",
];

const featuredFirstFour: Experience[] = [
  {
    id: 1,
    title: "Revolution and the Founders: History Tour of Philadelphia",
    description:
      "Walk through the birthplaces of American independence with a guide-led route focused on the founders and Old City landmarks.",
    category: "Culture",
    destination: "Old City, Philadelphia, USA",
    price: 29,
    rating: 4.9,
    imageUrl: "https://media.tacdn.com/media/attractions-splice-spp-360x240/07/8e/d6/b0.jpg",
  },
  {
    id: 2,
    title: "Philadelphia Old City Historic Walking Tour with 10+ Top Sites",
    description:
      "Discover cobblestone streets, historic homes, and major heritage stops on a paced neighborhood walking tour.",
    category: "Culture",
    destination: "Old City, Philadelphia, USA",
    price: 44,
    rating: 4.9,
    imageUrl: "https://media.tacdn.com/media/attractions-splice-spp-360x240/07/8e/d6/b0.jpg",
  },
  {
    id: 3,
    title: "Double Decker Hop-On Hop-Off City Sightseeing Philadelphia (1, 2, or 3-Day)",
    description:
      "Ride a flexible hop-on hop-off route to major Philadelphia attractions with multiple pass duration options.",
    category: "Adventure",
    destination: "Center City, Philadelphia, USA",
    price: 49,
    rating: 4.2,
    imageUrl: "https://dynamic-media.tacdn.com/media/photo-o/2f/0d/9e/9d/caption.jpg?w=600&h=500&s=1",
  },
  {
    id: 4,
    title: "Philadelphia 2 Hour Electric Cart Tour",
    description:
      "Cruise through key districts by electric cart while covering core city highlights in a compact format.",
    category: "Adventure",
    destination: "Center City, Philadelphia, USA",
    price: 69,
    rating: 4.8,
    imageUrl: "https://media.tacdn.com/media/attractions-splice-spp-360x240/15/b5/3e/ca.jpg",
  },
];

const generatedRemainder: Experience[] = Array.from({ length: 96 }, (_, index) => {
  const id = index + 5;
  const category = EXPERIENCE_CATEGORIES[index % EXPERIENCE_CATEGORIES.length];
  const destination = destinations[index % destinations.length];
  const title = `${destination.split(",")[0]} ${titleFragments[index % titleFragments.length]}`;
  const description = descriptionFragments[index % descriptionFragments.length];
  const price = 35 + ((index * 7) % 95);
  const rating = Number((3.8 + ((index % 13) * 0.1)).toFixed(1));

  return {
    id,
    title,
    description,
    category,
    destination,
    price,
    rating: Math.min(rating, 5),
    imageUrl: `https://picsum.photos/seed/wanderlust-tour-${id}/900/600`,
  };
});

export const experiences: Experience[] = [...featuredFirstFour, ...generatedRemainder];

export const categories = [...EXPERIENCE_CATEGORIES];
export const destinationsList = [...new Set(experiences.map((item) => item.destination))];
