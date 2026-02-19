import FeaturedProduct from "@/components/recommended/FeaturedProduct";
import SecondaryProduct from "@/components/recommended/SecondaryProduct";
import Link from "next/link";
import GearFAQ from "@/components/recommended/GearFAQ";

export const metadata = {
  title: "Best Chess Equipment for Beginners | Coach Recommended",
  description:
    "Discover coach-recommended chess boards, digital clocks and books for beginners and students. Carefully selected for structured improvement and tournament preparation.",

  alternates: {
    canonical: "https://nimzoacademy.com/recommended-chess-gear",
  },

  openGraph: {
    title: "Best Chess Equipment for Beginners | Nimzo Academy",
    description:
      "Explore coach-recommended chess boards, clocks and books designed for structured improvement.",
    url: "https://nimzoacademy.com/recommended-chess-gear",
    siteName: "Nimzo Academy",
    type: "website",
    images: [
      {
        url: "https://nimzoacademy.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nimzo Academy Recommended Chess Equipment",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Chess Equipment for Beginners | Nimzo Academy",
    description:
      "Coach-recommended chess boards, clocks and books for structured improvement.",
    images: ["https://nimzoacademy.com/logo.png"],
  },
};


export default function RecommendedGearPage() {
  return (
    <main className="bg-[var(--color-light-100)]">
      {/* ================= HERO SECTION ================= */}
      <section className="pt-20 md:pt-28 pb-16 md:pb-24 px-4 sm:px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[var(--color-heading-900)] mb-5 md:mb-6 leading-tight">
          Recommended Chess Equipment for Beginners & Students
        </h1>

        <p className="text-[var(--color-body-700)] text-base sm:text-lg mb-6 max-w-2xl mx-auto">
          Carefully selected chess boards, clocks, and books used and suggested
          by Nimzo Academy coaches for serious improvement.
        </p>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-[var(--color-muted-500)]">
          <span>✔ Beginner Friendly</span>
          <span>✔ Tournament Ready</span>
          <span>✔ Coach Curated</span>
        </div>

        <p className="text-[10px] sm:text-xs text-[var(--color-muted-500)] mt-6 max-w-xl mx-auto leading-relaxed">
          As an Amazon Associate, Nimzo Academy earns from qualifying purchases.
          This does not affect the price you pay.
        </p>
      </section>

      {/* ================= BOARDS SECTION ================= */}
      <section
        id="boards"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16 md:py-20 border-t border-[var(--color-border-300)]"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-heading-900)] mb-5 md:mb-6">
          Recommended Chess Boards
        </h2>

        <p className="text-[var(--color-body-700)] text-sm sm:text-base max-w-3xl mb-10 md:mb-12 leading-relaxed">
          Choosing the right board is important for serious improvement. At
          Nimzo Academy, we encourage students to practice on tournament-sized
          boards from an early stage.
        </p>

        <FeaturedProduct
          image="/recommended/board-featured.jpg"
          alt="Wooden Handcrafted Foldable Magnetic Chess Board Set"
          badge="Our Top Recommendation"
          title="Wooden Handcrafted Foldable Magnetic Chess Board Set"
          highlights={[
            "Official tournament-style pieces",
            "Weighted and durable construction",
            "Ideal for serious students",
            "Long-term training investment",
          ]}
          description="This is the type of board we encourage students to practice on. It builds familiarity with tournament standards and improves competitive confidence."
          link="https://www.amazon.in/Best-Chess-Premium-Handcrafted-Magnetic/dp/B01AUWCRXU?crid=365APW2YIVC05&dib=eyJ2IjoiMSJ9.Ip7gkQDy_BlGtx67Bf8VelPzirENIlsljGH0OlAkILmADNG0OmAWS7fTUUBc8RC2d4e14US02HQT8XG9JWRHuOaOt7jq2PU9DfTT2OfrdMVm6P_AIp_flXsa7yg2tmSnkQQXQ7ktjoUkAmTGSxTIFIiL5vhH_YVqfJuouYlNVH1vxtolQJuXfqvoiy3DuNteDbeeb3B0jJ9AkpQVRdWimv5eqPVacs8olaVA_pt4Y4Ruhb7qxftNGb7T5w6AmTDEzh81toWsLY3eHaLxM2IWTGGRKIPyEzbaF3WSnScGOyM.X_stUACLDSpdiwqTdkvchkKzddgZKNMFP3dcvNdtQsE&dib_tag=se&keywords=chess%2Bboard%2Bwooden&qid=1771482325&sprefix=chess%2Bboard%2Caps%2C372&sr=8-7&th=1&linkCode=ll2&tag=nimzoacademys-21&linkId=3a6e0ed62441d81898701b9c4e3ab8a3&ref_=as_li_ss_tl"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <SecondaryProduct
            image="/recommended/board-budget.jpg"
            alt="Budget Friendly Vinyl Foldable Chess Board"
            title="Budget Friendly Vinyl Foldable Chess Board"
            highlights={[
              "Lightweight design",
              "Affordable price",
              "Beginner suitable",
            ]}
            description="A practical choice for beginners starting their chess journey."
            link="https://www.amazon.in/StonKraft-Tournament-Foldable-Plastic-Pieces/dp/B00HXCMO9I?crid=21KQ5WI2681X&dib=eyJ2IjoiMSJ9.KFtetIg1cAKWSDfwspw4ej1S5q0AQ_CzTGw8GIMFSILz_3bGnZ5PNmhK8QZB8BeXifALqfZIu2YhGIuswYLi0iC0K49JT8w4wXISwe3ViiJLOU3TSTCfhKvr8caGu1PO7y7rw-Ba2h8LkzZZe6E0WDFk2U1GOt7hVtGD8RJ1ZrEyaHDK6MEGxik1_6XsUyran1nSM5-ymnDS3U2s1I2HXwdy4wtCr3WAn4e-zqjn-KZlynLD2Evt3RgK1siyGxJtTBqt35kbxg2KOkhcOPxP1iPUaK4pi5YqFXyPxVb8sVQ.CaE6uk6P4qSngiNHFTFYDPdAFvOLfjtjm-OpKDT59pY&dib_tag=se&keywords=fide%2Bchess%2Bmat&nsdOptOutParam=true&qid=1771482656&sprefix=fide%2Bchess%2Bma%2Caps%2C360&sr=8-6&th=1&linkCode=ll2&tag=nimzoacademys-21&linkId=5fae2646db04ba796724f40ed15cf164&ref_=as_li_ss_tl"
          />

          <SecondaryProduct
            image="/recommended/board-travel.jpg"
            alt="Wooden Handcrafted Foldable Magnetic Chess Board"
            title="Wooden Handcrafted Foldable Magnetic Chess Board"
            highlights={[
              "Portable design",
              "Magnetic pieces",
              "Kid-friendly option",
            ]}
            description="Perfect for practice during travel and casual games."
            link="https://www.amazon.in/Best-Chess-Premium-Handcrafted-Magnetic/dp/B01AUWCRXU?crid=3M0KTUUIHXDKV&dib=eyJ2IjoiMSJ9.525qHGaqUljYJ20oPx0n_7r231fyewE0L-GbqBpAvGeADNG0OmAWS7fTUUBc8RC2v5FusdS5m6mcY5tvOdU-6utPumU-zgmzF3cyVoBkZObKwp_KnjSaTeolUZhwiasU0o3_tJsojTKH6EB_dr3sOr4WOSPIiRZT4HvV06jKn5R6jDY6qeFqQYvccVQ9NAh93RcnHiinTBWzBibhzmIA6F3yJI5sFEJhzaGwpfM_U1j8LV0qlS-jo247Rs8CrTGjPScfuOQuQB0Hflha47l2JFNNIW28MxZa3piDkN7YX4o.VYxg4R5Brjo3chjAiBCFD-IS2HSAl_0de9ikqbTzoSA&dib_tag=se&keywords=chess%2Bboard%2Bwooden%2Bfide&qid=1771482532&sprefix=chess%2Bboard%2Bwooden%2Bfide%2Caps%2C416&sr=8-7&th=1&linkCode=ll2&tag=nimzoacademys-21&linkId=228f2580b93cb70d8a27b4899e57ac26&ref_=as_li_ss_tl"
          />
        </div>
      </section>

      {/* ================= CLOCKS SECTION ================= */}
      <section
        id="clocks"
        className="bg-[var(--color-back-500)] py-14 sm:py-16 md:py-20 border-t border-[var(--color-border-300)]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-heading-900)] mb-5 md:mb-6">
            Digital Chess Clocks
          </h2>

          <p className="text-[var(--color-body-700)] text-sm sm:text-base max-w-3xl mb-10 md:mb-12 leading-relaxed">
            Time management is a critical part of tournament chess. Practicing
            with a digital clock helps students develop focus, calculation
            discipline, and competitive confidence.
          </p>

          <FeaturedProduct
            image="/recommended/dgt-2500.jpg"
            alt="DGT New 2500 Official Fide Digital Chess Clock"
            badge="Recommended for Training"
            title="DGT New 2500 Official Fide Digital Chess Clock"
            highlights={[
              "Simple and easy to use",
              "Clear digital display",
              "Multiple time controls",
              "Great for home practice",
            ]}
            description="We recommend students start using a digital clock early. It builds proper time management habits and prepares them for tournament play."
            link="https://www.amazon.in/DGT-Official-Digital-Chess-Clock/dp/B0BWQW4Z6Q?crid=3KI94NMCNZIWR&dib=eyJ2IjoiMSJ9.qEvDGSTpvmqU4adH31rXe7xSBmfMRcFYrblxPBN3kbeLbHPTlytXFjeRnSFn1kcjMmqpLM6T81D5133t6wS_XHqHjcS-dO2sHtH3sWWnqSbBd-UL8iSaVDAgyaUsNbvXyoFpaERdtGDQADFFIWz2uVvmVR85Mqzy8DyadHKS98ZZQ1gH7M-7koU_nTqEKbifIP67CtaV7CRA6OJKBX0hMure1PCPsWMoFZUs6uQS0MFr9Uafy7-QrfFSSp0jgrKCV_tEYM1E3g8sLe7BYN1Q9Hhi8lhtw7ViyvIt3_xBjEw.iPgjsJV7_KNs_rsNdLsk8LsDiQz_IypkugoEq19eZlk&dib_tag=se&keywords=chess+clock&qid=1771481885&sprefix=chess+cloc%2Caps%2C382&sr=8-5&linkCode=ll2&tag=nimzoacademys-21&linkId=c15dcdb00f58538f52c979b25f2e6a64&ref_=as_li_ss_tl"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <SecondaryProduct
              image="/recommended/dgt-3000.jpg"
              alt="DGT 3000 Digital Chess Clock"
              title="DGT 3000 Digital Chess Clock"
              highlights={[
                "FIDE-compatible time settings",
                "Advanced delay & increment modes",
                "Used in competitive tournaments",
              ]}
              description="Ideal for serious tournament players who want to practice with official time controls."
              link="https://www.amazon.in/Dgt-3000-Digital-Chess-Clock/dp/B00X65TVX8?dib=eyJ2IjoiMSJ9.5SxVK9R5pXJOpFRFceNUkXixrXGNaTmut0YA3o_pte0WcAzE9Bw73LFWqlEY4GNMgzv3iOuM6Fog6lvIA7J6wWopAd5R52Z1pYQOweZDSTrAqmbvd5-uF_1TeoyD8ZtCoamU8ty2TeZbY4GJmKZzx19olpq-9pcYj40eg4rnWULY7YXVdiNOfbDoghNF9bGq94gRb5iikv9cHxHjBjGRdDGDIEweRQ61QGgYvikp7_s.iEthW6744MvietXRBbEmAn1coFo_sIZiKr1mr7SDjhQ&dib_tag=se&keywords=dgt+3000&qid=1771482076&sr=8-2&linkCode=ll2&tag=nimzoacademys-21&linkId=baf9014c21e0a368870da1d7ac1bbd67&ref_=as_li_ss_tl"
            />
            <SecondaryProduct
              image="/recommended/dgt-2010.jpg"
              alt="DGT 2010 Digital Chess Clock"
              title="DGT 2010 Digital Chess Clock"
              highlights={[
                "FIDE-compatible time settings",
                "Advanced delay & increment modes",
                "Used in competitive tournaments",
              ]}
              description="Ideal for serious tournament players who want to practice with official time controls."
              link="https://www.amazon.in/Dgt-Digital-Chess-Clock-Red/dp/B0033Q44FA?crid=2SPVKVRT0QT6H&dib=eyJ2IjoiMSJ9.5F-Fq6tjtMq7-qj0eIpNp_T-0BZv9fXzApWNz-f0LlFiOc-gQt2tkPTQE362BDNZYf1gVCoIEijTz1I2gjJL9qVTh8hl-Jd1Dgd8pndkGix_r6kxsdaEpEno1ncSIcysgxbLZuD8Q6_JNt0OCAQO6JQtVdWA8mf-6Jv0HRX_1PA.3WrHtyo7zb-wkP9hyK76Cx5UCcGHtCcwZNKjGVzUtYI&dib_tag=se&keywords=dgt+2010&qid=1771482155&sprefix=dgt+2010%2Caps%2C365&sr=8-5&linkCode=ll2&tag=nimzoacademys-21&linkId=0226130bfa7b0f34531865fc021a2962&ref_=as_li_ss_tl"
            />
          </div>
        </div>
      </section>

      {/* ================= BOOKS SECTION ================= */}
      <section
        id="books"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16 md:py-20 border-t border-[var(--color-border-300)]"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-heading-900)] mb-5 md:mb-6">
          Chess Books We Recommend
        </h2>

        <p className="text-[var(--color-body-700)] text-sm sm:text-base max-w-3xl mb-10 md:mb-12 leading-relaxed">
          Structured reading accelerates improvement. At Nimzo Academy, we
          encourage students to build strong fundamentals through carefully
          selected books.
        </p>

        <FeaturedProduct
          image="/recommended/book-featured.jpg"
          alt="How to Win At Chess: The Ultimate Guide for Beginners and Beyond by Levy Rozman"
          badge="Best for Beginners"
          title="How to Win At Chess: The Ultimate Guide for Beginners and Beyond by Levy Rozman"
          highlights={[
            "Clear explanations with diagrams",
            "Builds strong foundational understanding",
            "Suitable for ages 6+",
            "Structured learning approach",
          ]}
          description="This is the type of book we suggest for students beginning their structured chess journey. It builds essential concepts before moving into deeper tactics and strategy."
          link="https://www.amazon.in/How-Win-At-Chess-Beginners/dp/0241676738?crid=HEYDWAWSJBWN&dib=eyJ2IjoiMSJ9.UZU05tmtVETReqzRk9R_rNiEX8Lh4ZIaLGQecMt6qD-XrkYCOdPfHrVxf9qml85OgjuwUjb2IXZpTAZzxo7c-2q8sGAddyjiXyL5BuQqVbIbLGqDF-OeihmghZrz1P50r2Ae6zAE7PBswehpjfFiFjXh3a0hT8-A7rrijwXtmGk8XzIA3AznJZ8Djl6P6s_YQ_9sZ0M1PyOG-gM5BTwWnuQV3sI13Zf9KpSyqdYXPWw.JUQlbqnT2AuO6-emu1IGybUS1nOEo0TarW7Dz37a6bs&dib_tag=se&keywords=chess+books&qid=1771481578&sprefix=chess+books%2Caps%2C368&sr=8-3&linkCode=ll2&tag=nimzoacademys-21&linkId=f38d07d81431092b58bbf6acb00df6af&ref_=as_li_ss_tl"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <SecondaryProduct
            image="/recommended/book-tactics.jpg"
            alt="Chess Tactics for Champions by Susan Polgar"
            title="Chess Tactics for Champions by Susan Polgar"
            highlights={[
              "Hundreds of tactical puzzles",
              "Improves calculation speed",
              "Progressive difficulty levels",
            ]}
            description="Tactics training sharpens pattern recognition and decision-making under pressure."
            link="https://www.amazon.in/Chess-Tactics-Champions-step-step/dp/081293671X?crid=HEYDWAWSJBWN&dib=eyJ2IjoiMSJ9.UZU05tmtVETReqzRk9R_rNiEX8Lh4ZIaLGQecMt6qD-XrkYCOdPfHrVxf9qml85OgjuwUjb2IXZpTAZzxo7c-2q8sGAddyjiXyL5BuQqVbIbLGqDF-OeihmghZrz1P50r2Ae6zAE7PBswehpjfFiFjXh3a0hT8-A7rrijwXtmGk8XzIA3AznJZ8Djl6P6s_YQ_9sZ0M1PyOG-gM5BTwWnuQV3sI13Zf9KpSyqdYXPWw.JUQlbqnT2AuO6-emu1IGybUS1nOEo0TarW7Dz37a6bs&dib_tag=se&keywords=chess+books&qid=1771481578&sprefix=chess+books%2Caps%2C368&sr=8-7&linkCode=ll2&tag=nimzoacademys-21&linkId=d36f0979bb4a9a310e355f5246034e14&ref_=as_li_ss_tl"
          />

          <SecondaryProduct
            image="/recommended/book-strategy.jpg"
            alt="The Woodpecker Method by Axel Smith"
            title="The Woodpecker Method by Axel Smith"
            highlights={[
              "Positional understanding",
              "Game examples explained",
              "Long-term improvement focus",
            ]}
            description="Ideal for intermediate players ready to understand deeper strategic concepts."
            link="https://www.amazon.in/Woodpecker-Method-Axel-Smith/dp/1784830542?crid=HEYDWAWSJBWN&dib=eyJ2IjoiMSJ9.UZU05tmtVETReqzRk9R_rNiEX8Lh4ZIaLGQecMt6qD-XrkYCOdPfHrVxf9qml85OgjuwUjb2IXZpTAZzxo7c-2q8sGAddyjiXyL5BuQqVbIbLGqDF-OeihmghZrz1P50r2Ae6zAE7PBswehpjfFiFjXh3a0hT8-A7rrijwXtmGk8XzIA3AznJZ8Djl6P6s_YQ_9sZ0M1PyOG-gM5BTwWnuQV3sI13Zf9KpSyqdYXPWw.JUQlbqnT2AuO6-emu1IGybUS1nOEo0TarW7Dz37a6bs&dib_tag=se&keywords=chess+books&qid=1771481578&sprefix=chess+books%2Caps%2C368&sr=8-6&linkCode=ll2&tag=nimzoacademys-21&linkId=e06cbbb5a1c921b476ce3476513a98e7&ref_=as_li_ss_tl"
          />
        </div>
      </section>

      {/* ================= EDUCATIONAL GUIDE ================= */}
      <section className="bg-white py-16 md:py-24 border-t border-[var(--color-border-300)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-[var(--color-heading-900)] mb-6">
            How to Choose the Right Chess Equipment
          </h2>

          <p className="text-[var(--color-body-700)] text-sm sm:text-base text-center max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed">
            Choosing the correct equipment helps students develop proper habits
            from the beginning.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-[var(--color-body-700)] text-sm sm:text-base">
            <div>
              <h3 className="font-semibold text-lg text-[var(--color-heading-900)] mb-3">
                1. Board Size & King Height Matter
              </h3>
              <p className="text-sm leading-relaxed">
                Tournament-standard boards typically use a king height of 3.75
                inches. Practicing on a properly sized board helps students
                develop spatial awareness and familiarity with competitive
                settings.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[var(--color-heading-900)] mb-3">
                2. Weighted vs Non-Weighted Pieces
              </h3>
              <p className="text-sm leading-relaxed">
                Weighted pieces feel stable and are easier to handle during
                fast-paced games. Students preparing for tournaments gain
                confidence using properly balanced pieces.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[var(--color-heading-900)] mb-3">
                3. Why Practicing with a Clock Is Important
              </h3>
              <p className="text-sm leading-relaxed">
                Time management improves focus, decision-making under pressure,
                and competitive discipline.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[var(--color-heading-900)] mb-3">
                4. When to Invest in Chess Books
              </h3>
              <p className="text-sm leading-relaxed">
                Structured books build foundational understanding first, then
                tactical awareness and positional depth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <GearFAQ />

      {/* ================= CLOSING ================= */}
      <section className="bg-[var(--color-light-100)] py-16 md:py-20 text-center border-t border-[var(--color-border-300)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--color-heading-900)] mb-4">
            Need Help Choosing the Right Equipment?
          </h3>

          <p className="text-sm sm:text-base text-[var(--color-body-700)] leading-relaxed mb-8">
            Every student progresses at a different pace. If you are unsure
            which board, clock, or book is suitable, feel free to contact Nimzo
            Academy.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center
              rounded-full
              bg-[var(--color-primary-600)]
              hover:bg-[var(--color-primary-700)]
              px-6 sm:px-8 py-3
              text-sm font-medium
              text-white
              transition"
          >
            Contact Us for Guidance
          </Link>
        </div>
      </section>
    </main>
  );
}
