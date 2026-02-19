import Link from "next/link";

export const metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "Learn about Nimzo Academy’s refund and cancellation policy for online, offline and hybrid chess coaching programs.",
};


export default function RefundPolicy() {
  return (
    <main className="bg-light-100 min-h-screen py-12 md:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-white-100 border border-border-300 rounded-lg p-6 sm:p-8 md:p-12 shadow-sm">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-heading-900 mb-3">
            Refund & Cancellation Policy
          </h1>
          <p className="text-sm text-muted-500">
            Last Updated: February {new Date().getFullYear()}
          </p>
        </header>

        <div className="space-y-12 text-body-700 text-[15px] sm:text-base leading-7 sm:leading-8">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              1. Overview
            </h2>
            <p>
              This Refund & Cancellation Policy applies to all online, offline
              (Dwarka, New Delhi), and hybrid chess coaching programs offered by
              Nimzo Academy.
            </p>
            <p className="mt-4">
              By enrolling in any program, parents/guardians agree to the{" "}
              <Link
                href="/terms-and-conditions"
                className="text-primary-600 hover:underline"
              >
                Terms & Conditions
              </Link>{" "}
              in addition to this policy.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              2. Refund Eligibility
            </h2>
            <p>
              Refunds are permitted only if a written request is submitted
              before the student attends the first scheduled class session.
            </p>

            <div className="mt-4 p-4 bg-back-500 rounded-md border border-border-300">
              <p className="font-medium">
                Once the student has attended the first class, fees become
                strictly non-refundable and non-transferable.
              </p>
            </div>

            <p className="mt-4">
              Enrollment and payment confirmation indicate acceptance of this
              condition.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              3. How to Request a Refund
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Submit a written request via email before the first class.
              </li>
              <li>Include student name and batch details.</li>
              <li>Provide payment reference details for verification.</li>
            </ul>
            <p className="mt-4">
              Approved refunds will be processed within a reasonable timeframe
              after payment verification.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              4. Non-Refundable Situations
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>After attending the first scheduled class</li>
              <li>For missed classes</li>
              <li>For partial attendance</li>
              <li>Due to personal schedule conflicts</li>
              <li>Due to dissatisfaction with performance outcomes</li>
              <li>For lack of participation or commitment</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              5. Batch Transfers
            </h2>
            <p>
              Instead of a refund, Nimzo Academy may allow a one-time batch
              transfer subject to:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Seat availability</li>
              <li>Administrative approval</li>
            </ul>
            <p className="mt-4">
              Batch transfers are not guaranteed and remain at the discretion of
              the Academy.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              6. Class Cancellation by Academy
            </h2>
            <p>
              If Nimzo Academy cancels a batch before commencement, a full
              refund will be issued.
            </p>
            <p className="mt-3">
              If classes are discontinued mid-program due to unforeseen
              operational reasons, reasonable adjustments or partial refunds may
              be considered at the Academy’s discretion.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              7. International Payments
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Currency conversion fees or bank transfer charges are
                non-refundable.
              </li>
              <li>
                Refunds will be processed through the original payment method
                wherever possible.
              </li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              8. Policy Updates
            </h2>
            <p>
              Nimzo Academy reserves the right to modify this policy at any
              time. The latest version will always be available on our website.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              Contact
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
