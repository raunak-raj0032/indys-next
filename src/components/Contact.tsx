import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0d1b3e] py-24 px-6 text-center text-white">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-5">
            Join INDYS &apos;26
          </h2>
          <p className="text-white/65 mb-2 text-lg">
            The next generation of Indian and Nepali leaders will build this region together.
          </p>
          <p className="text-[#e8b96a] font-semibold text-lg mb-8">
            INDYS is where they begin.
          </p>
          <p className="text-white/35 text-xs tracking-widest uppercase mb-1">
            INDYS Secretariat · Siliguri, 2026
          </p>
          <p className="text-white/35 text-xs mb-10">
            Authorization Partner: Dr Marketing, India &amp; Nepal
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:secretariat@indys26.org"
              className="bg-[#c8963e] hover:bg-[#e8b96a] text-white font-semibold px-8 py-3.5 rounded-md transition-colors text-sm tracking-wide"
            >
              Contact Secretariat
            </a>
            <a
              href="#partners"
              className="border border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 rounded-md transition-colors text-sm tracking-wide"
            >
              Partner with Us
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
