import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Secretariat from "@/components/Secretariat";
import CaseFor from "@/components/CaseFor";
import Committees from "@/components/Committees";
import Dates from "@/components/Dates";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Secretariat />
        <CaseFor />
        <Committees />
        <Dates />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
