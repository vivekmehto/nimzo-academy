export const seoConfig = {
  siteName: "Nimzo Academy",
  siteUrl: "https://nimzoacademy.com",
  defaultOgImage: "/og-image.jpg",
};

export function toAbsoluteUrl(path = "/") {
  if (!path) return seoConfig.siteUrl;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${seoConfig.siteUrl}${path}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image = seoConfig.defaultOgImage,
  noindex = false,
  keywords = [],
}) {
  const canonical = toAbsoluteUrl(path);
  const imageUrl = toAbsoluteUrl(image);
  const brandedTitle = `${title} | ${seoConfig.siteName}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: brandedTitle,
      description,
      url: canonical,
      siteName: seoConfig.siteName,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: brandedTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: [imageUrl],
    },
    ...(keywords.length ? { keywords } : {}),
    ...(noindex
      ? {
          robots: {
            index: false,
            follow: true,
          },
        }
      : {}),
  };
}

export function buildLocationMetadata(location) {
  const areaLower = location.area.toLowerCase();
  const keywordSet = new Set([
    `${location.area} chess coaching`,
    `${location.area} chess classes`,
    `Nimzo Academy ${location.area}`,
    "chess coaching in Delhi",
  ]);

  if (location.type === "Home Coaching Service Area") {
    keywordSet.add(`home chess coaching in ${areaLower}`);
    keywordSet.add(`${location.area} home chess classes`);
  }

  if (["Headquarters", "Offline Branch"].includes(location.type)) {
    keywordSet.add(`offline chess classes in ${areaLower}`);
    keywordSet.add(`${location.area} chess academy`);
  }

  if (location.type === "City Overview") {
    keywordSet.add("chess classes in Delhi");
    keywordSet.add("online chess classes for kids");
  }

  if (location.seoKeywords?.length) {
    location.seoKeywords.forEach((keyword) => keywordSet.add(keyword));
  }

  return buildMetadata({
    title: location.title,
    description: location.description,
    path: `/${location.slug}`,
    keywords: Array.from(keywordSet),
  });
}
