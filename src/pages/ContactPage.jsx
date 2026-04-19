import Contact from "../components/Contact";
import PageMeta from "../seo/PageMeta";

export default function ContactPage() {
  return (
    <>
      <PageMeta
        title="Hire Web Developer in Vadodara | Full Stack MERN & ASP.NET – Ram Acharya"
        description="Looking to hire a Full Stack Developer in Vadodara? Contact Ram Acharya for freelance or full-time projects. Reach via WhatsApp, email, or LinkedIn. Fast response within 24 hours."
        path="/contact"
        ogImage="/og-image.png"
        ogImageAlt="Contact Ram Acharya – Hire Full Stack Developer Vadodara"
        canonical="https://ramacharya.me/contact"
      />
      <Contact />
    </>
  );
}
