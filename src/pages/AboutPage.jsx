import About from "../components/About";
import PageMeta from "../seo/PageMeta";

export default function AboutPage() {
  return (
    <>
      <PageMeta
        title="About Ram Acharya | B.Tech IT & Full Stack Web Developer"
        description="Learn how Ram Acharya builds clarity-first products: B.Tech Information Technology background, internship at KS Technology, React & REST focus, premium UI, and a practical approach to scalable web apps."
        path="/about"
        keywords="about Ram Acharya, B.Tech IT, web developer Vadodara, KS Technology internship, React developer story, full stack journey, personal brand, UI engineer"
        ogImageAlt="About Ram Acharya — developer story and values"
      />
      <About />
    </>
  );
}
