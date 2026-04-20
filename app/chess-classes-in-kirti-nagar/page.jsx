import LocationPage from "@/components/location/LocationPage";
import { getLocationBySlug } from "@/data/locations";
import { buildLocationMetadata } from "@/lib/seo";

const location = getLocationBySlug("chess-classes-in-kirti-nagar");

export const metadata = buildLocationMetadata(location);

export default function ChessClassesInKirtiNagarPage() {
  return <LocationPage location={location} />;
}
