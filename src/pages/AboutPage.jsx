import About from "../components/About";
import PageMeta from "../seo/PageMeta";

export default function AboutPage() {
  return (
    <>
      <PageMeta
        title="About Ram Acharya | Full Stack Developer in Vadodara (MERN & ASP.NET)"
        description="I am a Full Stack Developer in Vadodara specializing in React, Node.js, and ASP.NET Core. Explore my journey, internship at KS Technology, and how I build scalable web applications."
        path="/about"
        ogImage="/og-image.png"
        ogImageAlt="About Ram Acharya – Full Stack Developer Vadodara"
        canonical="https://ramacharya.me/about"
      />
      <About />
    </>
  );
}
