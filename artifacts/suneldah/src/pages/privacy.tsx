import React from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 max-w-3xl pt-32 pb-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-10">Last updated: April 18, 2025</p>

        <div className="prose prose-slate max-w-none space-y-8 text-foreground">

          <section>
            <h2 className="text-2xl font-bold mb-3">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Hovina ("we", "us", or "our") operates websites, WhatsApp bots, AI agents, and other digital products and services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you interact with any of our products or services. Please read this policy carefully. If you disagree with its terms, please discontinue use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">We may collect the following categories of information:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Contact Information:</strong> Name, email address, phone number, and any other details you voluntarily provide through contact forms or bot interactions.</li>
              <li><strong className="text-foreground">Usage Data:</strong> Information about how you interact with our services, including pages visited, features used, and timestamps.</li>
              <li><strong className="text-foreground">Messaging Data:</strong> When you interact with our WhatsApp bots or AI agents, we may process the content of messages to provide our service.</li>
              <li><strong className="text-foreground">Device & Technical Data:</strong> IP address, browser type, operating system, and device identifiers collected automatically.</li>
              <li><strong className="text-foreground">User-Provided Content:</strong> Any information you choose to share with us directly.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">We use collected information to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide, operate, and maintain our services</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Improve, personalise, and expand our services</li>
              <li>Communicate with you about updates, offers, and relevant information</li>
              <li>Monitor and analyse usage patterns to improve user experience</li>
              <li>Detect, prevent, and address technical issues or fraudulent activity</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">4. WhatsApp and Meta Platform Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              Some of our services are built on Meta's platforms, including the WhatsApp Business API. When you interact with our WhatsApp bots, your phone number and message content are processed in accordance with Meta's Data Policy as well as this Privacy Policy. We do not sell or share WhatsApp conversation data with third parties for advertising purposes. Data obtained through Meta platforms is used solely to operate and improve the specific service you engaged with.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">5. Data Sharing and Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">We do not sell your personal information. We may share your data with:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Service Providers:</strong> Trusted third-party vendors who assist us in operating our services (e.g., cloud hosting, email delivery), bound by confidentiality obligations.</li>
              <li><strong className="text-foreground">Legal Authorities:</strong> When required by law, regulation, or valid legal process.</li>
              <li><strong className="text-foreground">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your data may be transferred as part of the transaction.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">6. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain personal data only for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. When data is no longer needed, we securely delete or anonymise it. You may request deletion of your data at any time — see Section 9.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">7. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">8. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Access the personal data we hold about you</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict certain processing activities</li>
              <li>Data portability</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              To exercise any of these rights, please use our <Link href="/data-deletion" className="text-primary underline">Data Deletion & Request form</Link> or contact us directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">9. User Data Deletion</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to request deletion of your personal data at any time. To submit a deletion request, visit our <Link href="/data-deletion" className="text-primary underline">User Data Deletion page</Link>. We will process your request within 30 days and confirm when your data has been deleted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">10. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our websites may use cookies and similar tracking technologies to enhance your experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. Some features of our services may not function properly without cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">11. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such data, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">12. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the date at the top of this page. Your continued use of our services after such changes constitutes your acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">13. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions or concerns about this Privacy Policy, please <Link href="/#contact" className="text-primary underline">contact us</Link> through our website.
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
