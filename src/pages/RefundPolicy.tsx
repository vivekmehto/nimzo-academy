import React from "react";

const RefundPolicy: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-3xl font-bold mb-2">Refund & Cancellation Policy</h1>
      <p className="text-sm text-gray-500 mb-8">
        Last Updated: <span className="font-medium">14 December 2025</span>
      </p>

      <p className="mb-6">
        This Refund & Cancellation Policy outlines the terms under which refunds
        may be requested for programs offered by{" "}
        <strong>Nimzo Academy</strong>. By enrolling your child, you agree
        to this policy.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Group Classes
      </h2>
      <p className="mb-6">
        If a student attends the first group class and decides not to continue,
        a full refund may be requested provided the request is made at least
        <strong> 2 days before </strong>
        the next scheduled group session.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Individual / One-to-One Coaching
      </h2>
      <p className="mb-6">
        For individual coaching programs, refunds may be issued only for unused
        sessions if notice of discontinuation is given at least{" "}
        <strong>7 days</strong> before the next scheduled session.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Trial / Demo Sessions
      </h2>
      <p className="mb-6">
        Trial or demo sessions are intended for evaluation purposes only and are
        generally non-refundable unless explicitly stated otherwise.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        How to Request a Refund
      </h2>
      <p className="mb-6">
        All refund requests must be submitted in writing via email or through
        official communication channels provided by the Academy. Refund requests
        made verbally will not be considered.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Processing of Refunds
      </h2>
      <p className="mb-6">
        Once approved, refunds will be processed within a reasonable period
        using the original payment method, subject to applicable administrative
        or banking delays.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Non-Refundable Cases
      </h2>
      <p className="mb-6">
        Refunds will not be provided for:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Missed classes without prior notice</li>
        <li>Partially attended sessions</li>
        <li>Failure to attend classes due to technical or connectivity issues</li>
        <li>Requests made outside the stated timelines</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Policy Changes
      </h2>
      <p className="mb-6">
        The Academy reserves the right to update this Refund Policy at any time.
        Changes will be posted on this page, and continued enrollment implies
        acceptance of the updated policy.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Contact Information
      </h2>
      <p>
        <strong>Nimzo Academy</strong>
        <br />
        <strong>Email:</strong> nimzoacademy@gmail.com
        <br />
        <strong>Phone:</strong> +91 97180 86186
      </p>
    </section>
  );
};

export default RefundPolicy;
