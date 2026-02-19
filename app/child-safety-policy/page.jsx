import Link from "next/link";

export const metadata = {
  title: "Child Safety Policy",
  description:
    "Read Nimzo Academy’s Child Safety Policy outlining our commitment to creating a safe, respectful and supportive learning environment for all students.",
};


export default function ChildSafetyPolicy() {
  return (
    <main className="bg-light-100 min-h-screen py-12 md:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-white-100 border border-border-300 rounded-lg p-6 sm:p-8 md:p-12 shadow-sm">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-heading-900 mb-3">
            Child Safety & Online Conduct Policy
          </h1>
          <p className="text-sm text-muted-500">
            Last Updated: February {new Date().getFullYear()}
          </p>
        </header>

        <div className="space-y-12 text-body-700 text-[15px] sm:text-base leading-7 sm:leading-8">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              1. Our Commitment to Student Safety
            </h2>
            <p>
              Nimzo Academy is committed to providing a safe, respectful, and
              structured learning environment for all students.
            </p>
            <p className="mt-4">
              This policy should be read together with our{" "}
              <Link
                href="/terms-and-conditions"
                className="text-primary-600 hover:underline"
              >
                Terms & Conditions
              </Link>
              .
            </p>

            <p className="mt-4">
              As a chess academy offering online, offline (Dwarka, New Delhi),
              and hybrid classes, the safety and well-being of children remain a
              top priority.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              2. Parental Involvement
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Enrollment must be completed by a parent or legal guardian.
              </li>
              <li>
                Parents are encouraged to supervise younger children during
                online sessions.
              </li>
              <li>
                Parents may request updates regarding student progress or
                classroom conduct.
              </li>
              <li>
                Active parental supervision is strongly recommended for students
                under the age of 10 during online sessions.
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              3. Safe Online Classroom Environment
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Classes are conducted through approved digital platforms only.
              </li>
              <li>
                Meeting links are shared privately with enrolled students.
              </li>
              <li>Students must not share class access links.</li>
              <li>Only enrolled students are permitted to attend sessions.</li>
              <li>Unauthorized participants may be removed immediately.</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              4. Communication Guidelines
            </h2>
            <p>
              All academic communication should occur through official academy
              channels.
            </p>
            <p className="mt-4">
              Direct private communication between students and coaches outside
              structured sessions is discouraged.
            </p>
            <p className="mt-4">
              Nimzo Academy does not encourage unsupervised one-on-one
              communication with minors outside official learning environments.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              5. Code of Conduct for Students
            </h2>
            <p>Students are expected to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Show respect toward coaches and fellow students</li>
              <li>Avoid inappropriate language or behavior</li>
              <li>Refrain from bullying, harassment, or disruptive actions</li>
            </ul>

            <div className="mt-6 p-4 bg-back-500 rounded-md border border-border-300">
              <p className="font-medium">
                Misconduct may result in a warning, temporary suspension, or
                permanent removal from the program without refund in serious
                cases.
              </p>
            </div>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              6. Recording & Privacy
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Classes are currently not recorded by the Academy.</li>
              <li>
                Students and parents may not record sessions without written
                permission.
              </li>
            </ul>
            <p className="mt-4">
              Unauthorized recording, distribution, or misuse of class content
              may result in removal from the program.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              7. Offline Class Safety (Dwarka Location)
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Classes are conducted in a supervised learning environment.
              </li>
              <li>Parents are responsible for timely drop-off and pick-up.</li>
              <li>
                Nimzo Academy is not responsible for students outside scheduled
                class hours.
              </li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              8. Anti-Bullying & Respect Policy
            </h2>
            <p>Nimzo Academy maintains a zero-tolerance approach toward:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Bullying</li>
              <li>Harassment</li>
              <li>Discrimination</li>
              <li>Intimidation</li>
            </ul>
            <p className="mt-4">
              We strive to build a disciplined, competitive, and respectful
              chess culture.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              9. Reporting Concerns
            </h2>
            <p>
              Parents may report any safety concerns or inappropriate conduct by
              contacting:
            </p>
            <p className="mt-4">
              <strong>Nimzo Academy</strong>
              <br />
              262, Block-A, Sector 8, Dwarka, New Delhi – 110077
              <br />
              Email: nimzoacademy@gmail.com
            </p>
            <p className="mt-4">
              All concerns will be reviewed seriously and handled appropriately.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-semibold text-heading-900 mb-4">
              10. Policy Updates
            </h2>
            <p>
              This policy may be updated periodically to improve safety
              standards. The latest version will always be available on our
              website.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
