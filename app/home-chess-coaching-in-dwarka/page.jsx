import LocationPage from "@/components/location/LocationPage";
import { getLocationBySlug } from "@/data/locations";
import { buildLocationMetadata } from "@/lib/seo";

const location = getLocationBySlug("home-chess-coaching-in-dwarka");

export const metadata = buildLocationMetadata(location);

export default function HomeChessCoachingInDwarkaPage() {
  return <LocationPage location={location} />;
}
