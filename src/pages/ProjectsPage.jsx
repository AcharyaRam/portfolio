import FeaturedPulseProject from "../components/FeaturedPulseProject";
import OtherProjects from "../components/OtherProjects";
import Projects from "../components/Projects";
import PageMeta from "../seo/PageMeta";

export default function ProjectsPage() {
  return (
    <>
      <PageMeta
        title="Projects & Case Studies | Pulse Pharma, Fixit Marketplace & Portfolio"
        description="Deep dives: Pulse Pharma — ASP.NET Core, C#, Entity Framework, SQL Server, live Azure demo; Fixit — React, Node, Express, MongoDB marketplace; personal portfolio with Vite & Tailwind. Repos, stacks, and highlights."
        path="/projects"
        keywords="Pulse Pharma project, pharmacy management system, ASP.NET Core portfolio, Fixit marketplace, MERN project GitHub, React portfolio Vite, case study, live demo Azure, SQL Server CRUD, Ram Acharya projects"
        ogImageAlt="Ram Acharya — featured projects and case studies"
      />
      <FeaturedPulseProject />
      <Projects />
      <OtherProjects />
    </>
  );
}
