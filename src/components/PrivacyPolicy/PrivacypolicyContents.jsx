import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Container from '../Container';

function PrivacypolicyContents() {
    return (
        <Container>
            <div className="min-h-screen bg-black text-white p-4 md:p-6 lg:p-8">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-left"
                >
                    PRIVACY POLICY
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-xs md:text-sm lg:text-base mb-6 text-left"
                >
                    The privacy policy was updated on 16 May 2025.
                    <br></br>
                    <br></br>

                    Welcome to NKB Quantum Labs. We are committed to protecting your privacy and ensuring transparency in how we collect, use, and safeguard your personal information.

                    This Privacy Policy outlines how we collect, use, disclose, and protect your information when you visit our website or use our services.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-xs md:text-sm lg:text-base mb-6 text-left"
                >
                    This Privacy Policy outlines how we collect, use our services, and protect your information when you visit our website or use our services.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="space-y-6 md:space-y-8 lg:space-y-10"
                >
                    <section>
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-left"
                        >
                            1. INFORMATION WE COLLECT
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="mb-2 text-sm md:text-base text-left"
                        >
                            We collect different types of information to provide and improve our services. This includes:
                        </motion.p>
                        <motion.ul
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="list-disc pl-5 space-y-1 text-xs md:text-sm lg:text-base text-left"
                        >
                           <ul className="list-none space-y-3">
  <li className="text-xs md:text-sm lg:text-base text-left">
    <span className="font-medium">a. Personal Information</span>
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="list-disc pl-6 space-y-1 text-xs md:text-sm lg:text-base text-left"
    >
      When you voluntarily subscribe to our newsletter, leave a comment, or contact us via our Blog, we may collect:
      <br />
      <li>Name</li>
      <li>Email address</li>
      <li>Other information you provide</li>
    </motion.ul>
  </li>

  <li className="text-xs md:text-sm lg:text-base text-left">
    <span className="font-medium">b. Non-Personal Information</span>
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="list-disc pl-6 space-y-1 text-xs md:text-sm lg:text-base text-left"
    >
      When you visit our Blog, we may automatically collect:
      <br />
      <li>IP address</li>
      <li>Browser type</li>
      <li>Operating system</li>
      <li>Referring URL</li>
      <li>Pages viewed and the time spent on the Blog</li>
      <li>Other analytical data</li>
    </motion.ul>
  </li>

  <li className="text-xs md:text-sm lg:text-base text-left">
    <span className="font-medium">c. Cookies and Tracking Technologies</span>
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="list-disc pl-6 space-y-1 text-xs md:text-sm lg:text-base text-left"
    >
      We use cookies and similar technologies to:
      <br />
      <li>Enhance your browsing experience</li>
      <li>Analyze website traffic</li>
      <li>Understand user behavior</li>
      <li>You can manage or disable cookies through your browser settings.</li>
    </motion.ul>
  </li>
</ul>

                        </motion.ul>
                    </section>

                    <section>
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-left"
                        >
                            2. HOW WE USE YOUR INFORMATION
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="mb-2 text-sm md:text-base text-left"
                        >
                            We may use the information we collect for the following purposes:
                        </motion.p>
                        <motion.ul
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="list-disc pl-5 space-y-1 text-xs md:text-sm lg:text-base text-left"
                        >
                            <li>To personalize and improve the Blog</li>
                            <li>To send newsletters and updates (if you have subscribed)</li>
                            <li>To respond to your inquiries or comments</li>
                            <li>To monitor and analyze Blog usage</li>
                            <li>To detect and prevent fraudulent activities</li>
                            <li>To comply with legal obligations</li>
                        </motion.ul>
                    </section>

                    <section>
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-left"
                        >
                            3. SHARING YOUR INFORMATION
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="mb-2 text-sm md:text-base text-left"
                        >
                            We do not sell, rent, or trade your information to third parties. However, we may share your information:
                        </motion.p>
                        <motion.ul
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="list-disc pl-5 space-y-1 text-xs md:text-sm lg:text-base text-left"
                        >
                            <li>With service providers who assist us in operating our Blog (e.g., email delivery services)</li>
                            <li>When required by law or to protect our rights</li>
                            <li>In connection with a merger, acquisition, or sale of assets</li>
                        </motion.ul>
                    </section>

                    <section>
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-left"
                        >
                            4. THIRD-PARTY SERVICES
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="mb-2 text-sm md:text-base text-left"
                        >
                            Our Blog may include links to third-party websites or services. We are not responsible for their privacy practices, so we encourage you to read their privacy policies.
                        </motion.p>
                    </section>

                    <section>
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-left"
                        >
                            5. YOUR RIGHTS
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="mb-2 text-sm md:text-base text-left"
                        >
                            Depending on your location, you may have the following rights:
                        </motion.p>
                        <motion.ul
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="list-disc pl-5 space-y-1 text-xs md:text-sm lg:text-base text-left"
                        >
                            <li>Access and Portability: Request a copy of your personal data.</li>
                            <li>Correction: Request corrections to your data.</li>
                            <li>Deletion: Request deletion of your personal data.</li>
                            <li>Objection and Restriction: Restrict or object to processing of your data.</li>
                            <li>Withdraw Consent: Withdraw consent for data processing at any time.</li>
                            <li>To exercise these rights, please contact us at support@nkbquantumlabs.com.</li>
                        </motion.ul>
                    </section>

                    <section>
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-left"
                        >
                            6. DATA SECURITY
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="mb-2 text-sm md:text-base text-left"
                        >
                            We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                        </motion.p>
                    </section>

                    <section>
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-left"
                        >
                            7. CHILDREN’S PRIVACY
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="mb-2 text-sm md:text-base text-left"
                        >
                            Our Blog is not intended for children under the age of 13, and we do not knowingly collect personal information from them. If you believe we have collected such information, please contact us immediately.
                        </motion.p>
                    </section>

                    <section>
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-left"
                        >
                            8. CHANGES TO THIS PRIVACY POLICY
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="mb-2 text-sm md:text-base text-left"
                        >
                            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically.
                        </motion.p>
                    </section>

                    <section>
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-left"
                        >
                            9. CONTACT US
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="mb-2 text-sm md:text-base text-left"
                        >
                            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                        </motion.p>
                        <motion.ul
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="list-disc pl-5 space-y-1 text-xs md:text-sm lg:text-base text-left"
                        >
                            <li>Email: support@nkbquantumlabs.com</li>
                            <li>Address: 27, Janhit Society, Near London Street, NIT Complex, Nagpur, 440025</li>
                        </motion.ul>
                    </section>
                </motion.div>
            </div>
        </Container>
    );
}

export default PrivacypolicyContents;