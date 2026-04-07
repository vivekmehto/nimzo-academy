import LocationPage from "@/components/location/LocationPage";
import { locationPages } from "@/data/locations";
import { buildMetadata } from "@/lib/seo";

const location = locationPages.find(
  (item) => item.slug === "home-chess-coaching-in-delhi-cantt",
);

export const metadata = buildMetadata({
  title: location.title,
  description: location.description,
  path: `/${location.slug}`,
});

export default function HomeChessCoachingInDelhiCanttPage() {
  return <LocationPage location={location} />;
}
