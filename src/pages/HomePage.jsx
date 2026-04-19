import Hero from "../components/Hero";
import PageMeta from "../seo/PageMeta";

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="Best Full Stack Developer in Vadodara | MERN & ASP.NET Expert – Ram Acharya"
        description="Looking for a Full Stack Developer in Vadodara? I build fast, scalable web apps using React, Node.js, and ASP.NET Core. Explore real projects like Pharma Pulse and hire me today."
        path="/"
        ogImage="/og-image.png"
        ogImageAlt="Ram Acharya – Full Stack Developer in Vadodara Portfolio"
        canonical="https://ramacharya.me/"
      />
      <Hero />
    </>
  );
}
