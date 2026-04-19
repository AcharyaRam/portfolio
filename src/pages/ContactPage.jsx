import Contact from "../components/Contact";
import PageMeta from "../seo/PageMeta";

export default function ContactPage() {
  return (
    <>
      <PageMeta
        title="Contact Ram Acharya | Hire, Collaborate & Project Inquiries"
        description="Reach Ram Acharya for freelance, full-time, or collaboration: contact form with WhatsApp handoff, direct email (mailto), LinkedIn, GitHub, and resume PDF. Based in Vadodara; replies typically within 24–48 hours."
        path="/contact"
        keywords="contact Ram Acharya, hire full stack developer Vadodara, collaborate MERN, LinkedIn Ram Acharya, GitHub AcharyaRam, portfolio email, WhatsApp contact developer, resume download"
        ogImageAlt="Contact Ram Acharya — hire and collaborate"
      />
      <Contact />
    </>
  );
}
