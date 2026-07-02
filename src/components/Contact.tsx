import FadeIn from "./FadeIn";

const contactEmailHref =
  "https://mail.google.com/mail/?view=cm&fs=1&to=info@indysofficial.com&su=INDYS%20%2726%20Inquiry";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0d1b3e] py-24 px-6 text-center text-white">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl font-bold mb-5">
            Join INDYS &apos;26
          </h2>
          <p className="mx-auto mb-2 max-w-xl text-xl leading-relaxed text-white/88">
            The next generation of Indian and Nepali leaders will build this region together.
          </p>
          <p className="text-[#e8b96a] font-semibold text-lg mb-8">
            INDYS is where they begin.
          </p>
          <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-white/78">
            INDYS Secretariat · Siliguri, 2026
          </p>
          <p className="mb-10 text-sm text-white/78">
            Authorization Partner: Dr Marketing, India &amp; Nepal
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={contactEmailHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c8963e] hover:bg-[#e8b96a] text-white font-semibold px-8 py-3.5 rounded-md transition-colors text-sm tracking-wide"
            >
              Write Email
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
