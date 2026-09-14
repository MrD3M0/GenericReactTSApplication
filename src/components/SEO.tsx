import { Helmet } from "react-helmet-async";

const SITE_URL = "https://sumitkarki1.com.np/";
const OG_IMAGE = "https://sumitkarki1.com.np/banner.png";
const PROFILE_IMAGE = "https://sumitkarki1.com.np/profile.png";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sumit Karki",
  alternateName: "MrDEMO",
  url: SITE_URL,
  image: PROFILE_IMAGE,
  jobTitle: "Full Stack Developer",
  email: "mailto:sumitkarki047@gmail.com",
  address: { "@type": "PostalAddress", addressCountry: "Nepal" },
  sameAs: [
    "https://github.com/MrD3M0",
    "https://www.linkedin.com/in/sumitkarki1/",
    "https://www.instagram.com/sumit.karki1/",
  ],
};

export default function SEO() {
  return (
    <Helmet>
      <title>Sumit Karki - Portfolio</title>
      <meta
        name="description"
        content="Sumit Karki (MrDEM0) is a full-stack developer from Nepal building with PostgreSQL, Express, React, Node.js and TypeScript. Explore projects, work experience and tech stack."
      />
      <meta
        name="keywords"
        content="Sumit Karki, MrDEM0, full stack developer, PERN stack developer Nepal, React developer Nepal, Node.js developer, TypeScript developer, web developer Nepal"
      />
      <meta name="author" content="Sumit Karki" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={SITE_URL} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta
        property="og:title"
        content="Sumit Karki | Full Stack Developer (PERN + TypeScript)"
      />
      <meta
        property="og:description"
        content="Full-stack developer from Nepal building with PostgreSQL, Express, React, Node.js and TypeScript. Explore projects, work experience and tech stack."
      />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={SITE_URL} />
      <meta
        name="twitter:title"
        content="Sumit Karki | Full Stack Developer (PERN + TypeScript)"
      />
      <meta
        name="twitter:description"
        content="Full-stack developer from Nepal building with PostgreSQL, Express, React, Node.js and TypeScript. Explore projects, work experience and tech stack."
      />
      <meta name="twitter:image" content={OG_IMAGE} />

      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
    </Helmet>
  );
}
