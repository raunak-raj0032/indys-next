import FadeIn from "./FadeIn";

const contactEmailHref =
  "https://mail.google.com/mail/?view=cm&fs=1&to=info@indysofficial.com&su=INDYS%20%2726%20Inquiry";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0d1b3e] py-16 px-4 text-center text-white sm:px-6 md:py-24">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-5xl font-bold mb-4 md:mb-5">
            Join INDYS &apos;26
          </h2>
          <p className="mx-auto mb-2 max-w-xl text-lg leading-relaxed text-white/88 md:text-xl">
            The next generation of Indian and Nepali leaders will build this region together.
          </p>
          <p className="text-[#e8b96a] font-semibold text-base mb-6 md:text-lg md:mb-8">
            INDYS is where they begin.
          </p>
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-white/78 sm:text-sm">
            INDYS Secretariat · Siliguri, 2026
          </p>
          <p className="mb-8 text-sm text-white/78 md:mb-10">
            Authorization Partner: Dr Marketing, India &amp; Nepal
          </p>
          <div className="flex flex-col gap-3 justify-center sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href={contactEmailHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c8963e] hover:bg-[#e8b96a] text-white font-semibold px-6 py-3 rounded-md transition-colors text-sm tracking-wide sm:px-8 sm:py-3.5"
            >
              Write Email
            </a>
            <a
              href="#partners"
              className="border border-white/40 hover:border-white text-white font-semibold px-6 py-3 rounded-md transition-colors text-sm tracking-wide sm:px-8 sm:py-3.5"
            >
              Partner with Us
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
