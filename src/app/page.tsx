import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Secretariat from "@/components/Secretariat";
import CaseFor from "@/components/CaseFor";
import RegistrationCountdown from "@/components/RegistrationCountdown";
import RegistrationPopup from "@/components/RegistrationPopup";
import Committees from "@/components/Committees";
import Dates from "@/components/Dates";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {
  baseOrganizationJsonLd,
  eventJsonLd,
  homePageJsonLd,
  jsonLd,
  websiteJsonLd,
} from "@/lib/seo";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            baseOrganizationJsonLd,
            websiteJsonLd(),
            eventJsonLd,
            homePageJsonLd(),
          ]),
        }}
      />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <RegistrationCountdown />
        <Secretariat />
        <CaseFor />
        <Committees />
        <Dates />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <RegistrationPopup />
    </>
  );
}
