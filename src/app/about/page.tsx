import Link from "next/link";

export const metadata = {
  title: "About — Loevre des Arts",
  description:
    "A brand built around classical images, heavy cotton and oversized silhouettes.",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-16 md:py-24 border-b border-brand-stone">
        <p className="font-sans text-[10px] tracking-widest uppercase text-brand-gray mb-6">
          Loevre des Arts
        </p>
        <h1 className="font-serif text-6xl md:text-8xl text-brand-black leading-[0.9]">
          About
          <br />
          <em>the label.</em>
        </h1>
      </div>

      {/* Main text */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          {/* Main column */}
          <div className="md:col-span-7">
            <p className="font-serif text-2xl md:text-3xl text-brand-black leading-relaxed mb-10">
              A brand built around classical images, heavy cotton and oversized
              silhouettes. Each piece transforms historical artwork into a
              contemporary uniform — somewhere between a museum poster, a
              gallery object and a streetwear essential.
            </p>

            <div className="space-y-6 font-sans text-sm text-brand-charcoal leading-relaxed max-w-prose">
              <p>
                We work exclusively with works from the Italian Renaissance —
                a period that defined Western visual culture for five centuries.
                Michelangelo, Raphael, Botticelli, Leonardo. Names so embedded
                in the canon that they function almost as archetypes.
              </p>
              <p>
                Our process begins in the archive. Each artwork is sourced
                from museum-grade reproduction files, treated as a primary
                document, and printed with precision on natural cream cotton.
                The result is not a licensed reproduction. It is a study — a
                wearable interpretation of a historical artifact.
              </p>
              <p>
                The garment itself is part of the concept. 280gsm heavyweight
                cotton. Oversized fit. Off-white natural tone. A blank ground
                for images that have outlasted empires, popes and centuries of
                cultural revision.
              </p>
              <p>
                We release in limited runs. When a piece sells out, it
                returns to the archive. No restocks. No reprints.
              </p>
            </div>
          </div>

          {/* Side column */}
          <div className="md:col-span-5 space-y-10">
            {/* Values */}
            <div>
              <p className="font-sans text-[10px] tracking-widest uppercase text-brand-gray mb-6">
                What We Stand For
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: "Archive Quality",
                    text: "Museum-grade prints sourced from historical archives.",
                  },
                  {
                    title: "Limited Editions",
                    text: "Each drop is finite. Once archived, it stays archived.",
                  },
                  {
                    title: "Heavyweight Cotton",
                    text: "280gsm fabric. Natural cream tone. Built to last.",
                  },
                  {
                    title: "Oversized Silhouette",
                    text: "A uniform for contemporary life. Not a costume.",
                  },
                  {
                    title: "Cultural Integrity",
                    text: "We treat each artwork with the seriousness it deserves.",
                  },
                ].map(({ title, text }) => (
                  <li key={title} className="border-b border-brand-stone pb-4">
                    <p className="font-sans text-xs font-medium text-brand-black mb-1">
                      {title}
                    </p>
                    <p className="font-sans text-sm text-brand-gray">{text}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-brand-off-white p-8">
              <p className="font-sans text-[10px] tracking-widest uppercase text-brand-gray mb-4">
                Enter
              </p>
              <p className="font-serif text-2xl text-brand-black mb-6">
                Browse the current collection.
              </p>
              <Link
                href="/shop"
                className="inline-block font-sans text-xs tracking-widest uppercase border border-brand-black px-6 py-3 hover:bg-brand-black hover:text-white transition-all duration-300"
              >
                View Collection
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="border-t border-b border-brand-stone bg-brand-off-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-brand-stone">
            {[
              { number: "1400–1600", label: "Era" },
              { number: "5", label: "Artworks in Archive" },
              { number: "280g", label: "Cotton Weight" },
              { number: "Ltd.", label: "Edition Format" },
            ].map(({ number, label }) => (
              <div key={label} className="md:px-10 text-center">
                <p className="font-serif text-3xl md:text-4xl text-brand-black mb-1">
                  {number}
                </p>
                <p className="font-sans text-xs tracking-widest uppercase text-brand-gray">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-16 text-center">
        <p className="font-sans text-[10px] tracking-widest uppercase text-brand-gray mb-4">
          Contact
        </p>
        <p className="font-serif text-2xl text-brand-black mb-2">
          For inquiries and collaborations:
        </p>
        <a
          href="mailto:contact@loevredesarts.com"
          className="font-sans text-sm text-brand-charcoal hover-underline hover:text-brand-black transition-colors"
        >
          contact@loevredesarts.com
        </a>
      </div>
    </div>
  );
}
