import LocationPage from "@/components/location/LocationPage";
import { locationPages } from "@/data/locations";
import { buildMetadata } from "@/lib/seo";

const location = locationPages.find((item) => item.slug === "chess-classes-in-kirti-nagar");

export const metadata = buildMetadata({
  title: location.title,
  description: location.description,
  path: `/${location.slug}`,
});

export default function ChessClassesInKirtiNagarPage() {
  return <LocationPage location={location} />;
}
