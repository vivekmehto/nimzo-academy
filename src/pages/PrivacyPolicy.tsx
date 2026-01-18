import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">
        Last Updated: <span className="font-medium">15 December 2025</span>
      </p>

      <p className="mb-6">
        <strong>Nimzo Academy</strong> (“we”, “our”, “us”) respects your
        privacy. This Privacy Policy explains how we collect, use, and protect
        your information when you use our website or contact us.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Information We Collect
      </h2>
      <p className="mb-4">
        When you submit an enquiry or register with us, we may collect basic
        personal information such as:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Parent or guardian’s name</li>
        <li>Email address and phone number</li>
        <li>Child’s name, age, and chess level</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        How We Use Your Information
      </h2>
      <p className="mb-6">
        We use your information only to respond to enquiries, manage
        registrations, communicate about classes, and improve our services. We
        do not sell or rent your personal data.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Cookies & Analytics
      </h2>
      <p className="mb-6">
        Our website may use cookies and analytics tools to understand website
        usage and improve user experience. You can control cookies through your
        browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Children’s Privacy
      </h2>
      <p className="mb-6">
        We collect children’s information only for enrollment and coaching
        purposes and communicate directly with parents or guardians.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Data Security
      </h2>
      <p className="mb-6">
        We take reasonable measures to protect your information. However, no
        online transmission is completely secure.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Policy Updates
      </h2>
      <p className="mb-6">
        This Privacy Policy may be updated from time to time. Any changes will be
        posted on this page.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Contact Us
      </h2>
      <p>
        If you have questions about this Privacy Policy, contact us at:
        <br />
        <strong>Email:</strong> nimzoacademy@gmail.com
        <br />
        <strong>Phone:</strong> +91 97180 86186
      </p>
    </section>
  );
};

export default PrivacyPolicy;
