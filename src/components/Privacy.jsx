import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="w-full bg-white text-gray-800 px-6 py-12 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-500 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <p className="mb-6">
          At <span className="font-semibold">Sustainable Bhava</span>, your
          privacy matters to us. We are committed to protecting your personal
          information and being transparent about how we collect, use, and
          safeguard it.
        </p>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            1. Information We Collect
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, or shipping address when you contact us or place an order.
            </li>
            <li>
              <strong>Usage Data:</strong> Pages visited, time spent on the site,
              browser type, and device information.
            </li>
            <li>
              <strong>Cookies:</strong> Used to improve performance and user
              experience.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Provide and improve our products and services</li>
            <li>Respond to your queries and support requests</li>
            <li>Process orders and deliveries</li>
            <li>
              Send updates or newsletters (only if you choose to receive them)
            </li>
            <li>Analyze website usage to enhance user experience</li>
          </ul>
          <p className="mt-3 font-medium">
            We do not sell or trade your personal information.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">3. Cookies</h2>
          <p>
            Cookies help us understand how visitors interact with our website.
            You can disable cookies in your browser settings, but some features
            may not function properly.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            4. Data Protection & Security
          </h2>
          <p>
            We take reasonable measures to protect your data from unauthorized
            access or misuse. However, no online platform can guarantee complete
            security.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            5. Third-Party Services
          </h2>
          <p>
            We may use trusted third-party services such as payment gateways or
            analytics tools. These services follow their own privacy policies,
            and we are not responsible for their practices.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Withdraw consent for marketing communications</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            7. Children’s Privacy
          </h2>
          <p>
            Sustainable Bhava does not knowingly collect personal information
            from children under the age of 13.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            8. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will
            be reflected on this page with an updated date.
          </p>
        </section>

        {/* Section 9 */}
        <section>
          <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
          <p className="mb-2">
            If you have any questions about this Privacy Policy, feel free to
            contact us:
          </p>
          <p>Email: <span className="font-medium">support@sustainablebhava.com</span></p>
          <p>Website: <span className="font-medium">https://www.sustainablebhava.in</span></p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
