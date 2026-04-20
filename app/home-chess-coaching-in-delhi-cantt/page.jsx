import LocationPage from "@/components/location/LocationPage";
import { getLocationBySlug } from "@/data/locations";
import { buildLocationMetadata } from "@/lib/seo";

const location = getLocationBySlug("home-chess-coaching-in-delhi-cantt");

export const metadata = buildLocationMetadata(location);

export default function HomeChessCoachingInDelhiCanttPage() {
  return <LocationPage location={location} />;
}
