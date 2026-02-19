import Link from "next/link"; 

export const metadata = {
  title: "Disclaimer",
  description:
    "Read the disclaimer of Nimzo Academy regarding website content, educational materials and coaching services.",
};


export default function Disclaimer() {
  return (
    <main className="bg-light-100 min-h-screen py-12 md:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-white-100 border border-border-300 rounded-lg p-6 sm:p-8 md:p-12 shadow-sm">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-heading-900 mb-3">
            Disclaimer
          </h1>
          <p className="text-sm text-muted-500">
            Last Updated: February {new Date().getFullYear()}
          </p>
        </header>

        <div className="space-y-12 text-body-700 text-[15px] sm:text-base leading-7 sm:leading-8">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              1. General Information
            </h2>
            <p>
              Nimzo Academy provides structured chess coaching programs through
              online, offline (Dwarka, New Delhi), and hybrid learning formats.
            </p>
            <p className="mt-4">
              This Disclaimer forms part of our{" "}
              <Link
                href="/terms-and-conditions"
                className="text-primary-600 hover:underline"
              >
                Terms & Conditions
              </Link>
              .
            </p>

            <p className="mt-4">
              All information presented on our website, marketing materials, and
              during classes is intended for educational purposes only.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              2. No Guarantee of Results
            </h2>
            <p>Chess improvement depends on various factors including:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Student dedication and effort</li>
              <li>Consistency in practice</li>
              <li>Tournament participation</li>
              <li>Individual learning pace</li>
            </ul>

            <div className="mt-6 p-4 bg-back-500 rounded-md border border-border-300">
              <p className="font-medium">
                Nimzo Academy does not guarantee rating increases, tournament
                victories, titles, scholarships, or specific competitive
                achievements.
              </p>
            </div>

            <p className="mt-4">
              Results vary for each student based on commitment and performance.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              3. Tournament Participation
            </h2>
            <p>
              Participation in tournaments organized by third parties is
              voluntary.
            </p>
            <p className="mt-4">Nimzo Academy is not responsible for:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Tournament decisions or pairings</li>
              <li>Organizer policies or rule changes</li>
              <li>External administrative decisions</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              4. Website Content Accuracy
            </h2>
            <p>
              While we strive to maintain accurate and up-to-date information,
              Nimzo Academy makes no warranties regarding completeness,
              reliability, or accuracy of website content.
            </p>
            <p className="mt-4">
              We reserve the right to modify schedules, programs, fees, or
              policies without prior notice.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              5. External Links
            </h2>
            <p>
              Our website may contain links to third-party websites for
              informational purposes.
            </p>
            <p className="mt-4">
              Nimzo Academy is not responsible for the content, policies, or
              practices of external websites.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              6. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Nimzo Academy shall not be
              liable for:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Internet connectivity issues during online sessions</li>
              <li>Technical platform disruptions</li>
              <li>Indirect or consequential losses</li>
              <li>Losses arising from misuse of website content</li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              7. Jurisdiction
            </h2>
            <p>
              This Disclaimer shall be governed by and interpreted in accordance
              with the laws of India.
            </p>
            <p className="mt-4">
              Any disputes shall be subject to the jurisdiction of courts
              located in India.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              Contact Information
            </h2>
            <p>
              <strong>Nimzo Academy</strong>
              <br />
              262, Block-A, Sector 8, Dwarka, New Delhi – 110077
              <br />
              Email: nimzoacademy@gmail.com
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
