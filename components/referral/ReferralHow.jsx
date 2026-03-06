export default function ReferralHow() {
  return (
    <section className="py-24 bg-[var(--color-light-100)]">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading-900)]">
            How the Chess Referral Program Works
          </h2>

          <p className="text-lg text-[var(--color-body-700)]">
            A simple and transparent process designed to maintain fairness 
            while strengthening structured chess coaching in Dwarka.
          </p>
        </div>

        {/* STEPS GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* STEP 1 */}
          <div className="bg-[var(--color-white-100)] p-8 rounded-[var(--radius-lg)] shadow-sm animate-fade-up">
            <div className="w-12 h-12 flex items-center justify-center rounded-full 
              bg-[var(--color-primary-600)] text-white font-bold mb-6">
              01
            </div>

            <h3 className="text-xl font-semibold mb-4 text-[var(--color-heading-900)]">
              Submit a Nomination
            </h3>

            <p className="text-[var(--color-body-700)]">
              Use the official referral form on this page to nominate a child 
              interested in learning chess the right way.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="bg-[var(--color-white-100)] p-8 rounded-[var(--radius-lg)] shadow-sm animate-fade-up">
            <div className="w-12 h-12 flex items-center justify-center rounded-full 
              bg-[var(--color-primary-600)] text-white font-bold mb-6">
              02
            </div>

            <h3 className="text-xl font-semibold mb-4 text-[var(--color-heading-900)]">
              Student Completes 30 Days
            </h3>

            <p className="text-[var(--color-body-700)]">
              The referral becomes valid once the student enrolls, pays the 
              first month fee, and completes 30 days of active training.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="bg-[var(--color-white-100)] p-8 rounded-[var(--radius-lg)] shadow-sm animate-fade-up">
            <div className="w-12 h-12 flex items-center justify-center rounded-full 
              bg-[var(--color-primary-600)] text-white font-bold mb-6">
              03
            </div>

            <h3 className="text-xl font-semibold mb-4 text-[var(--color-heading-900)]">
              Receive Scholarship Credits
            </h3>

            <p className="text-[var(--color-body-700)]">
              Community Scholarship Credits are issued as per the official 
              referral reward structure outlined below.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}