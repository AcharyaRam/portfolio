import Hero from "../components/Hero";
import PageMeta from "../seo/PageMeta";

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="Ram Acharya | Full Stack Developer in Vadodara — MERN & .NET"
        description="Full Stack Developer portfolio: premium React UI, Node.js & Express APIs, ASP.NET Core & Entity Framework apps. Featured Pulse Pharma, Fixit MERN marketplace, skills, experience, and contact."
        path="/"
        keywords="Ram Acharya, Full Stack Developer, Vadodara, Gujarat, MERN stack, React developer, Node.js, ASP.NET Core, C#, Entity Framework, SQL Server, MongoDB, portfolio, web developer India"
        ogImageAlt="Ram Acharya — Full Stack Developer portfolio home"
      />
      <Hero />
    </>
  );
}
