import Skills from "../components/Skills";
import PageMeta from "../seo/PageMeta";

export default function SkillsPage() {
  return (
    <>
      <PageMeta
        title="Tech Stack & Skills | React, ASP.NET Core, Node.js, SQL & MongoDB"
        description="Skills explained through real usage: Frontend with React, JavaScript ES6+, HTML5/CSS3, responsive design; Backend with ASP.NET Core, C#, Node.js & Express; databases SQL Server, MongoDB, MySQL; auth and API design."
        path="/skills"
        keywords="React skills, JavaScript ES6, HTML5 CSS3, responsive design, ASP.NET Core, C# developer, Entity Framework, Node.js Express, REST API, SQL Server, MongoDB, MySQL, JWT authentication, MERN, tech stack"
        ogImageAlt="Ram Acharya — skills and technologies"
      />
      <Skills />
    </>
  );
}
