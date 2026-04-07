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
