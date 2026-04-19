import Experience from "../components/Experience";
import PageMeta from "../seo/PageMeta";

export default function ExperiencePage() {
  return (
    <>
      <PageMeta
        title="Full Stack Developer Experience in Vadodara | Internship & Projects – Ram Acharya"
        description="Discover my journey as a Full Stack Developer in Vadodara, including internship experience and real-world projects like Pharma Pulse built using MERN and ASP.NET technologies."
        path="/experience"
        ogImage="/og-image.png"
        ogImageAlt="Ram Acharya – Full Stack Developer Experience Vadodara"
        canonical="https://ramacharya.me/experience"
      />
      <Experience />
    </>
  );
}
