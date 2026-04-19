import Experience from "../components/Experience";
import PageMeta from "../seo/PageMeta";

export default function ExperiencePage() {
  return (
    <>
      <PageMeta
        title="Experience & Education | Internship, Timeline & Full Stack Work"
        description="Professional timeline: internship experience at KS Technology, academic milestones, and hands-on delivery of MERN and .NET full-stack applications including inventory, billing, and role-based modules."
        path="/experience"
        keywords="Ram Acharya experience, KS Technology internship, Vadodara developer jobs, B.Tech IT timeline, full stack internship, MERN projects, ASP.NET production experience, education Gujarat"
        ogImageAlt="Ram Acharya — experience and education"
      />
      <Experience />
    </>
  );
}
