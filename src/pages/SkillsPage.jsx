import Skills from "../components/Skills";
import PageMeta from "../seo/PageMeta";

export default function SkillsPage() {
  return (
    <>
      <PageMeta
        title="Full Stack Developer Skills in Vadodara | MERN & ASP.NET Expertise – Ram Acharya"
        description="I am a Full Stack Developer in Vadodara skilled in React, Node.js, ASP.NET Core, and databases like SQL Server and MongoDB. I build scalable and high-performance web applications."
        ogImage="/og-image.png"
        ogImageAlt="Ram Acharya – Full Stack Developer Skills Vadodara"
        canonical="https://ramacharya.me/skills"
      />
      <Skills />
    </>
  );
}
