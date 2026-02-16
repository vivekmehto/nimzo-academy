import Link from "next/link";

export const metadata = {
  title:
    "Terms & Conditions | Nimzo Academy – Chess Classes in Dwarka & Online",
  description:
    "Terms & Conditions of Nimzo Academy covering enrollment, payments, attendance, intellectual property, and participation in online and offline chess classes in Dwarka, New Delhi and internationally.",
  keywords: [
    "Nimzo Academy terms",
    "chess academy terms and conditions",
    "chess classes in Dwarka policies",
    "online chess coaching India terms",
  ],
};

export default function TermsAndConditions() {
  return (
    <main className="bg-light-100 min-h-screen py-12 md:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-white-100 border border-border-300 rounded-lg p-6 sm:p-8 md:p-12 shadow-sm">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-heading-900 mb-3">
            Terms & Conditions
          </h1>
          <p className="text-sm text-muted-500">
            Last Updated: February {new Date().getFullYear()}
          </p>
        </header>

        <div className="space-y-12 text-body-700 text-[15px] sm:text-base leading-7 sm:leading-8">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              1. Introduction
            </h2>
            <p>
              These Terms & Conditions (“Terms”) govern enrollment and
              participation in chess coaching programs offered by Nimzo Academy,
              an independent chess training service operated from India.
            </p>
            <p className="mt-4">
              By enrolling in our online, offline (Dwarka, New Delhi), or hybrid
              chess programs, parents/guardians and students agree to comply
              with these Terms.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              2. Enrollment & Seat Confirmation
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Enrollment is confirmed only after full payment is received.
              </li>
              <li>
                Seats are limited and allocated on a first-come, first-served
                basis.
              </li>
              <li>No seats are reserved without payment.</li>
              <li>
                The Academy reserves the right to decline enrollment at its
                discretion.
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              3. Fees & Payment Policy
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fees must be paid in advance before batch commencement.</li>
              <li>Payments are currently accepted via bank transfer.</li>
              <li>
                Batch confirmation is issued only after payment verification.
              </li>
              <li>
                If online payment gateways are introduced in the future,
                additional payment terms may apply.
              </li>
            </ul>
            <p className="mt-4">
              Fees once paid are subject to the{" "}
              <Link
                href="/refund-policy"
                className="text-primary-600 hover:underline"
              >
                Refund Policy
              </Link>{" "}
              published separately on our website.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              4. Class Format
            </h2>
            <p>Nimzo Academy offers:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Offline classes in Dwarka, New Delhi</li>
              <li>Online live interactive sessions</li>
              <li>Hybrid learning formats</li>
            </ul>
            <p className="mt-4">
              The Academy reserves the right to adjust batch timings, shift
              between online/offline modes if required, or modify curriculum
              structure for academic improvement.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              5. Attendance & Missed Classes
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Regular attendance is expected.</li>
              <li>Missed classes are non-refundable.</li>
              <li>
                Make-up sessions may be offered at the Academy’s discretion.
              </li>
              <li>
                Repeated absenteeism may result in removal without refund.
              </li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              6. Code of Conduct
            </h2>
            <p>Students must:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Show respect to coaches and fellow students</li>
              <li>Avoid disruptive or inappropriate behavior</li>
              <li>Follow class rules and instructions</li>
            </ul>
            <p className="mt-4">
              Nimzo Academy reserves the right to suspend or remove students for
              misconduct without refund.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              7. Intellectual Property
            </h2>
            <p>
              All training materials, worksheets, curriculum content,
              strategies, and teaching methods are the intellectual property of
              Nimzo Academy.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Recording sessions without permission is prohibited.</li>
              <li>Sharing or redistributing materials is not allowed.</li>
              <li>Commercial use of academy materials is prohibited.</li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              8. Performance & Results Disclaimer
            </h2>
            <p>
              Chess improvement depends on student dedication, practice, and
              participation in competitive environments.
            </p>
            <p className="mt-3">
              Nimzo Academy does not guarantee rating increases, tournament
              victories, or specific competitive outcomes.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              9. Safety & Communication
            </h2>
            <p>
              Official communication occurs through approved channels. Private
              unsupervised communication outside structured sessions is
              discouraged.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              10. Limitation of Liability
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tournament decisions by third-party organizers</li>
              <li>Internet disruptions or platform outages</li>
              <li>Indirect or consequential losses</li>
            </ul>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              11. International Students
            </h2>
            <p>
              Services are governed by Indian laws. Any disputes shall fall
              under the jurisdiction of courts located in India.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              12. Policy Updates
            </h2>
            <p>
              Nimzo Academy reserves the right to modify these Terms at any
              time. Continued participation constitutes acceptance of updated
              terms.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              13. Contact Information
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
