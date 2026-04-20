import LocationPage from "@/components/location/LocationPage";
import { getLocationBySlug } from "@/data/locations";
import { buildLocationMetadata } from "@/lib/seo";

const location = getLocationBySlug("chess-coaching-in-delhi");

export const metadata = buildLocationMetadata(location);

export default function ChessCoachingInDelhiPage() {
  return <LocationPage location={location} />;
}
