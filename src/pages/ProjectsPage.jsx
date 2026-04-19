import FeaturedPulseProject from "../components/FeaturedPulseProject";
import OtherProjects from "../components/OtherProjects";
import Projects from "../components/Projects";
import PageMeta from "../seo/PageMeta";

export default function ProjectsPage() {
  return (
    <>
      <PageMeta
        title="Best Full Stack Developer Projects in Vadodara | MERN & ASP.NET – Ram Acharya"
        description="Looking to hire a Full Stack Developer in Vadodara? Explore real-world projects by Ram Acharya including Pharma Pulse and MERN marketplace apps. View tech stack, case studies, and results."
        path="/projects"
        ogImage="/og-image.png"
        ogImageAlt="Ram Acharya – Full Stack Developer Projects Vadodara"
        canonical="https://ramacharya.me/projects"
      />
      <FeaturedPulseProject />
      <Projects />
      <OtherProjects />
    </>
  );
}
