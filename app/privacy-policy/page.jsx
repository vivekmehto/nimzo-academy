import Link from "next/link";

export const metadata = {
  title:
    "Privacy Policy | Nimzo Academy – Chess Classes in Dwarka, Delhi & Online",
  description:
    "Privacy Policy of Nimzo Academy, offering professional online, offline and hybrid chess classes in Dwarka, New Delhi and internationally for children and tournament players.",
  keywords: [
    "Nimzo Academy privacy policy",
    "chess classes in Dwarka",
    "online chess academy India",
    "chess coaching for kids",
  ],
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-light-100 min-h-screen py-12 md:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-white-100 border border-border-300 rounded-lg p-6 sm:p-8 md:p-12 shadow-sm">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-heading-900 mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-500">
            Last Updated: February {new Date().getFullYear()}
          </p>
        </header>

        {/* Content */}
        <div className="space-y-12 text-body-700 text-[15px] sm:text-base leading-7 sm:leading-8">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              1. Introduction
            </h2>
            <p>
              Nimzo Academy (“we”, “our”, or “the Academy”) is an independent
              chess training service operated from India, offering online,
              offline (Dwarka, New Delhi), and hybrid chess coaching programs
              for students in India and internationally.
            </p>
            <p className="mt-4">
              This Privacy Policy explains how we collect, use, store, and
              protect personal information when you:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Visit our website</li>
              <li>Enroll in our chess programs</li>
              <li>Submit a demo or inquiry form</li>
              <li>Communicate with us</li>
            </ul>
            <p className="mt-4">
              By using our services, you agree to this Privacy Policy and our{" "}
              <Link
                href="/terms-and-conditions"
                className="text-primary-600 hover:underline"
              >
                Terms & Conditions
              </Link>
              .
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              2. Information We Collect
            </h2>

            <h3 className="font-semibold mb-2">
              A. Information Provided by Parents/Guardians
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Parent/Guardian Name</li>
              <li>Student Name</li>
              <li>Student Age</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Country/Location</li>
            </ul>

            <h3 className="font-semibold mt-6 mb-2">B. Payment Information</h3>
            <p>
              Currently, payments are accepted via bank transfer. We do not
              collect or store card details on our website.
            </p>
            <p className="mt-3">
              If online payment gateways are introduced in the future, this
              policy will be updated accordingly.
            </p>

            <h3 className="font-semibold mt-6 mb-2">
              C. Technical Information
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device type</li>
              <li>Website usage analytics</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Schedule and conduct chess classes</li>
              <li>Confirm enrollment and payments</li>
              <li>Communicate important updates</li>
              <li>Provide academic progress support</li>
              <li>Respond to inquiries</li>
              <li>Improve our training programs</li>
            </ul>
            <p className="mt-4 font-medium">
              We do not sell, rent, or trade personal data to third parties.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              4. Children’s Privacy
            </h2>
            <p>
              Personal information of students is collected only through parents
              or legal guardians. By enrolling a child, the parent/guardian
              confirms consent for data collection.
            </p>
            <p className="mt-3">
              We do not knowingly collect personal data directly from children
              without parental involvement.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              5. Online & Offline Class Data
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Classes are not recorded.</li>
              <li>We do not store video or audio recordings of students.</li>
            </ul>
            <p className="mt-4">
              If recording is introduced in the future, this policy will be
              updated and prior notice will be provided.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              6. Data Storage & Security
            </h2>
            <p>
              We take reasonable measures to protect personal information from
              unauthorized access, misuse, or data breaches.
            </p>
            <p className="mt-3">
              While we implement security safeguards, no digital system can
              guarantee absolute security.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              7. International Students
            </h2>
            <p>
              By enrolling from outside India, you acknowledge that your data
              may be processed and stored in India and governed by applicable
              Indian laws.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              8. Data Sharing
            </h2>
            <p>
              We may share limited information with trusted service providers
              when necessary or when required by law. We never sell student
              data.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              9. Data Retention
            </h2>
            <p>
              Personal information is retained only as long as necessary to
              provide services or meet legal obligations.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              10. Cookies & Analytics
            </h2>
            <p>
              Our website may use basic cookies and analytics tools to improve
              performance and user experience.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              11. Your Rights
            </h2>
            <p>
              Parents may request access, correction, or deletion of personal
              data by contacting us.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              12. Policy Updates
            </h2>
            <p>
              We may update this Privacy Policy periodically. Continued use of
              our services constitutes acceptance of updates.
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
