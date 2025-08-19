import { motion } from "framer-motion";
import Container from "../Container";

const TermsAndConditions = () => {
  return (
    <div className=" text-white">
      {/* Header Section */}
      <div className="relative w-full overflow-hidden -mt-24">
        {/* Gradient Blob */}
        <div className="absolute w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] right-[-150px] sm:right-[-200px] top-[-200px] sm:top-[-250px] md:top-[-300px] rounded-full bg-cyan-600/60 blur-[200px] sm:blur-[250px] z-0" />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col justify-center pt-40 sm:pt-48 md:pt-56 pb-16 sm:pb-20 px-4 sm:px-6 md:px-10 lg:px-16">
          <Container>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-left uppercase"
            >
              TERMS & CONDITIONS
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0.5 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-[2px] sm:h-[3px] mt-3 sm:mt-4 mb-4 sm:mb-5 bg-gradient-to-r from-white via-white/70 to-transparent w-full"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-full sm:max-w-[95%] md:max-w-[85%] lg:max-w-[75%] xl:max-w-[720px] leading-relaxed text-left"
            >
              Please read these terms carefully before using our services. By accessing or using our platform, you agree to be bound by these terms.
            </motion.p>
          </Container>
        </div>
      </div>

      {/* Content Section */}
      <Container>
        <div className="min-h-screen bg-black text-white p-4 md:p-6 lg:p-8">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-left"
          >
            TERMS & CONDITIONS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xs md:text-sm lg:text-base mb-6 text-left"
          >
            These terms and conditions were updated on 16 May 2025.
            <br></br>
            <br></br>

            Welcome to NKB Quantum Labs. These Terms and Conditions govern your use of our website and services. By accessing or using our platform, you agree to comply with and be bound by these terms.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xs md:text-sm lg:text-base mb-6 text-left"
          >
            If you do not agree with any part of these terms, you must not use our website or services.
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
                1. ACCEPTANCE OF TERMS
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mb-2 text-sm md:text-base text-left"
              >
                By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, our Privacy Policy, and all applicable laws and regulations.
              </motion.p>
            </section>

            <section>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-left"
              >
                2. USER RESPONSIBILITIES
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mb-2 text-sm md:text-base text-left"
              >
                When using our services, you agree to:
              </motion.p>
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="list-disc pl-5 space-y-1 text-xs md:text-sm lg:text-base text-left"
              >
                <li>Provide accurate and complete information when required</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Not engage in any illegal or unauthorized activities</li>
                <li>Not attempt to disrupt or interfere with our services</li>
                <li>Comply with all applicable laws and regulations</li>
              </motion.ul>
            </section>

            <section>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-left"
              >
                3. INTELLECTUAL PROPERTY
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mb-2 text-sm md:text-base text-left"
              >
                All content on this website, including text, graphics, logos, images, and software, is the property of NKB Quantum Labs or its content suppliers and is protected by international copyright laws.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-2 text-sm md:text-base text-left"
              >
                You may not reproduce, distribute, modify, or create derivative works of any content without our express written permission.
              </motion.p>
            </section>

            <section>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-left"
              >
                4. USER-GENERATED CONTENT
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mb-2 text-sm md:text-base text-left"
              >
                If you submit content to our website, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, and distribute that content.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-2 text-sm md:text-base text-left"
              >
                You are solely responsible for any content you submit and must ensure it does not violate any third-party rights or applicable laws.
              </motion.p>
            </section>

            <section>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-left"
              >
                5. LIMITATION OF LIABILITY
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mb-2 text-sm md:text-base text-left"
              >
                NKB Quantum Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of our services.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-2 text-sm md:text-base text-left"
              >
                We do not guarantee that our services will be uninterrupted, secure, or error-free.
              </motion.p>
            </section>

            <section>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-left"
              >
                6. INDEMNIFICATION
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mb-2 text-sm md:text-base text-left"
              >
                You agree to indemnify and hold harmless NKB Quantum Labs and its affiliates from any claims, damages, or expenses arising from your use of our services or violation of these Terms and Conditions.
              </motion.p>
            </section>

            <section>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-left"
              >
                7. TERMINATION
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mb-2 text-sm md:text-base text-left"
              >
                We reserve the right to suspend or terminate your access to our services at any time, without notice, for conduct that we believe violates these Terms and Conditions or is harmful to other users or our business.
              </motion.p>
            </section>

            <section>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-left"
              >
                8. GOVERNING LAW
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mb-2 text-sm md:text-base text-left"
              >
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-2 text-sm md:text-base text-left"
              >
                Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts.
              </motion.p>
            </section>

            <section>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-left"
              >
                9. CHANGES TO TERMS
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mb-2 text-sm md:text-base text-left"
              >
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes are posted constitutes your acceptance of the modified terms.
              </motion.p>
            </section>

           
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default TermsAndConditions;