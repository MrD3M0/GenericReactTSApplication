import { Helmet } from "react-helmet-async";

const SITE_URL = "https://sumitkarki1.com.np/";
const OG_IMAGE = "https://sumitkarki1.com.np/banner.png";
const PROFILE_IMAGE = "https://sumitkarki1.com.np/profile.png";

// Keep these EXACTLY in sync with the static tags in index.html.
// index.html is what non-JS crawlers/link-preview bots see; this Helmet
// version is what browsers see after hydration. If the two ever diverge
// again, JS-executing crawlers and no-JS crawlers will report a different
// title/description for the same page.
const TITLE = "Sumit Karki (Mr DEMO) — Full-Stack Web Developer, Nepal";
const DESCRIPTION =
  "Sumit Karki (Mr DEMO) is a full-stack PERN developer from Nepal. Explore his projects, work experience, and tech stack in React, Node.js and TypeScript.";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sumit Karki",
  alternateName: "Mr DEMO",
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
      <title>{TITLE}</title>
      <meta
        name="keywords"
        content="Sumit Karki, MrD3M0, full stack developer, PERN stack developer Nepal, React developer Nepal, Node.js developer, TypeScript developer, web developer Nepal"
      />
      <meta name="description" content={DESCRIPTION} />
      <meta name="author" content="Sumit Karki" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={SITE_URL} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Sumit Karki — Full-Stack Web Developer"
      />
      <meta property="og:site_name" content="Sumit Karki" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={SITE_URL} />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta
        name="twitter:image:alt"
        content="Sumit Karki — Full-Stack Web Developer"
      />

      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
    </Helmet>
  );
}
