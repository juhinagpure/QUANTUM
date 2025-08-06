// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import Container from "../Container";
import Footer from "../Footer";

export function ContactComp() {
  // Animation variants
  const ContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative w-full h-auto mb-0">
      {/* Background image with animated text */}
      <div className="w-full h-[350px] xs:h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[775px] relative overflow-hidden -mt-32">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/ContactUs/Bg.jpg"
          alt="Contact us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="px-4 sm:px-6 lg:px-8">
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight sm:leading-snug"
              >
                CONTACT US
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scaleX: 0.5 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-[2px] mt-2 xs:mt-3 mb-3 xs:mb-4 bg-gradient-to-r from-white via-white/70 to-transparent w-16 xs:w-20 sm:w-24 md:w-32 lg:w-48 xl:w-64 2xl:w-80 origin-left"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-[95%] xs:max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[65%] xl:max-w-[700px] leading-relaxed"
              >
                Have a project in mind or want to inquire? We love to hear from
                you.
              </motion.p>
            </div>
          </Container>
        </div>
      </div>

      {/* Contact Form + Newsletter */}
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 mt-8 xs:mt-10 sm:mt-12 md:mt-16 text-center space-y-3 xs:space-y-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-neutral-50 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase leading-tight"
          >
            Get in touch
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-neutral-50 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed tracking-wide max-w-4xl mx-auto px-2"
          >
            Need assistance or more information? Our team is here to help!
            Expect a response within 3–5 working days.
          </motion.div>
        </motion.div>

        <div className="flex flex-col xl:flex-row justify-between gap-6 xs:gap-8 sm:gap-10 lg:gap-12 py-8 xs:py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          {/* Form Section */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 flex flex-col gap-3 xs:gap-4 sm:gap-6"
          >
            <motion.form
              variants={ContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-3 xs:gap-4 sm:gap-6"
            >
              {/* Type of enquiry dropdown */}
              <motion.div variants={itemVariants} className="relative">
                <motion.select
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ scale: 1.02 }}
                  className="w-full h-12 xs:h-14 sm:h-16 px-4 xs:px-6 bg-neutral-50 rounded-2xl xs:rounded-3xl sm:rounded-[36px] text-stone-500 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wider appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                >
                  <option value="">Type of enquiry</option>
                  <option value="general">General Inquiry</option>
                  <option value="business">Business Partnership</option>
                  <option value="support">Technical Support</option>
                  <option value="career">Career Opportunities</option>
                  <option value="other">Other</option>
                </motion.select>
                <div className="absolute right-4 xs:right-6 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <div className="size-4 xs:size-5 sm:size-6 relative overflow-hidden">
                    <div className="w-2 xs:w-2.5 h-1 xs:h-[5px] left-[6px] xs:left-[7px] top-[7px] xs:top-[9px] absolute outline outline-2 outline-offset-[-1px] outline-zinc-800" />
                  </div>
                </div>
              </motion.div>

              {/* Name */}
              <motion.input
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Name"
                className="w-full h-12 xs:h-14 sm:h-16 px-4 xs:px-6 bg-neutral-50 rounded-2xl xs:rounded-3xl sm:rounded-[36px] text-stone-500 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wider placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              />

              {/* Email and Phone */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 xs:gap-4"
              >
                <motion.input
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 h-12 xs:h-14 sm:h-16 px-4 xs:px-6 bg-neutral-50 rounded-2xl xs:rounded-3xl sm:rounded-[36px] text-stone-500 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wider placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                />
                <motion.input
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ scale: 1.02 }}
                  type="tel"
                  placeholder="Phone Number"
                  className="flex-1 h-12 xs:h-14 sm:h-16 px-4 xs:px-6 bg-neutral-50 rounded-2xl xs:rounded-3xl sm:rounded-[36px] text-stone-500 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wider placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                />
              </motion.div>

              {/* Job Title and Organisation */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 xs:gap-4"
              >
                <motion.input
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="Job Title"
                  className="flex-1 h-12 xs:h-14 sm:h-16 px-4 xs:px-6 bg-neutral-50 rounded-2xl xs:rounded-3xl sm:rounded-[36px] text-stone-500 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wider placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                />
                <motion.input
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="Organisation"
                  className="flex-1 h-12 xs:h-14 sm:h-16 px-4 xs:px-6 bg-neutral-50 rounded-2xl xs:rounded-3xl sm:rounded-[36px] text-stone-500 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wider placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                />
              </motion.div>

              {/* Message textarea - consistent height */}
              <motion.textarea
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
                placeholder="How can we help you?"
                rows="6"
                className="w-full h-32 xs:h-32 sm:h-32 md:h-32 lg:h-32 xl:h-32 p-4 xs:p-6 bg-neutral-50 rounded-2xl xs:rounded-3xl sm:rounded-[36px] lg:rounded-[50px] text-stone-500 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wider placeholder:text-stone-500 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              ></motion.textarea>

              {/* Privacy Policy checkbox */}
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-2 xs:gap-3 mt-1 xs:mt-2"
              >
                <motion.input
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="checkbox"
                  id="privacy"
                  className="size-4 xs:size-5 sm:size-6 border border-neutral-50 rounded-[3px] mt-0.5 xs:mt-1 flex-shrink-0 cursor-pointer accent-cyan-400 transition-transform duration-200"
                />
                <motion.label
                  whileHover={{ scale: 1.01 }}
                  htmlFor="privacy"
                  className="text-neutral-50 text-xs sm:text-sm font-medium leading-relaxed cursor-pointer"
                >
                  I Acknowledge and Agree to the{" "}
                  <span className="underline">Privacy Policy</span>
                </motion.label>
              </motion.div>

              {/* Submit button */}
              <motion.button
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(6, 182, 212, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-fit px-4 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-3 bg-cyan-400 rounded-2xl xs:rounded-3xl sm:rounded-[40px] lg:rounded-[50px] cursor-pointer hover:bg-cyan-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-600"
              >
                <div className="text-stone-900 text-xs xs:text-sm sm:text-base md:text-lg font-semibold tracking-tight">
                  Submit
                </div>
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 max-w-full xl:max-w-md h-fit px-4 xs:px-6 py-6 xs:py-8 sm:py-10 bg-cyan-300 rounded-2xl xs:rounded-3xl sm:rounded-[36px] lg:rounded-[40px] flex flex-col gap-4 xs:gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-black text-base xs:text-lg sm:text-xl md:text-2xl font-bold tracking-wide">
                Our Newsletter
              </h3>
              <p className="mt-2 text-black text-xs xs:text-sm sm:text-base font-medium leading-relaxed">
                Subscribe to get the latest insights, trends, and tips on
                design, development, and digital marketing — straight to your
                inbox.
              </p>
            </motion.div>

            <motion.form
              variants={ContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-4 xs:gap-6"
            >
              <motion.input
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Email"
                className="w-full h-12 xs:h-14 sm:h-16 px-4 xs:px-6 bg-neutral-50 rounded-2xl xs:rounded-3xl sm:rounded-[36px] text-stone-500 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wider placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-cyan-600 transition-all duration-300"
              />

              <motion.button
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full h-12 xs:h-14 sm:h-16 px-4 xs:px-6 sm:px-8 py-1.5 bg-neutral-900 rounded-2xl xs:rounded-3xl sm:rounded-[36px] lg:rounded-[50px] flex justify-center items-center cursor-pointer hover:bg-neutral-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-700"
              >
                <div className="text-neutral-50 text-xs xs:text-sm sm:text-base md:text-lg font-semibold tracking-tight">
                  Submit
                </div>
              </motion.button>
            </motion.form>
          </motion.div>
        </div>

        {/* Contact Cards */}
        <motion.div
          variants={ContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 xs:gap-6 w-full mb-8 xs:mb-10 sm:mb-12 px-4 sm:px-6 lg:px-8"
        >
          {/* Address Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              boxShadow: "0 15px 35px rgba(6, 182, 212, 0.2)",
            }}
            transition={{ duration: 0.3 }}
            className="w-full sm:w-[300px] md:w-[320px] lg:w-[350px] xl:w-[380px] 2xl:w-[403px] min-h-[180px] xs:min-h-[200px] sm:min-h-[217px] px-4 xs:px-6 sm:px-8 lg:px-16 xl:px-20 2xl:px-[113px] py-4 xs:py-6 sm:py-[21px] bg-[#322B2B] rounded-3xl xs:rounded-4xl sm:rounded-[50px] flex flex-col justify-center items-center cursor-pointer"
          >
            <div className="w-full max-w-[177px] flex flex-col items-center gap-4 xs:gap-6">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="w-10 xs:w-12 h-10 xs:h-12 flex justify-center items-center bg-cyan-400 rounded-full flex-shrink-0"
              >
                <MapPin className="text-black w-5 xs:w-6 h-5 xs:h-6" />
              </motion.div>
              <div className="w-full flex flex-col items-center gap-1 xs:gap-2">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-center text-[#FAFAFA] text-xs xs:text-sm sm:text-base font-medium leading-5 xs:leading-6 "
                >
                  27, Janhit Society, Near London Street, NIT Complex, Nagpur,
                  440025.
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              boxShadow: "0 15px 35px rgba(6, 182, 212, 0.2)",
            }}
            transition={{ duration: 0.3 }}
            className="w-full sm:w-[300px] md:w-[320px] lg:w-[350px] xl:w-[380px] 2xl:w-[403px] min-h-[180px] xs:min-h-[200px] sm:min-h-[217px] px-4 xs:px-6 sm:px-8 lg:px-16 xl:px-20 2xl:px-[113px] py-4 xs:py-6 sm:py-[21px] bg-[#322B2B] rounded-3xl xs:rounded-4xl sm:rounded-[50px] flex flex-col justify-center items-center cursor-pointer"
          >
            <div className="w-full max-w-[177px] flex flex-col items-center gap-4 xs:gap-6">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="w-10 xs:w-12 h-10 xs:h-12 flex justify-center items-center bg-cyan-400 rounded-full flex-shrink-0"
              >
                <PhoneCall className="text-black w-5 xs:w-6 h-5 xs:h-6" />
              </motion.div>
              <div className="w-full flex flex-col items-center gap-1 xs:gap-2">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-center text-[#FAFAFA] text-xs xs:text-sm sm:text-base font-medium leading-5 xs:leading-6 "
                >
                  +91 9209723149
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-white text-xs xs:text-sm sm:text-base font-medium leading-5 xs:leading-6  text-center"
                >
                  Connect us on Whatsapp
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              boxShadow: "0 15px 35px rgba(6, 182, 212, 0.2)",
            }}
            transition={{ duration: 0.3 }}
            className="w-full sm:w-[300px] md:w-[320px] lg:w-[350px] xl:w-[380px] 2xl:w-[403px] min-h-[180px] xs:min-h-[200px] sm:min-h-[217px] px-4 xs:px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-[83px] py-4 xs:py-6 sm:py-[29px] bg-[#322B2B] rounded-3xl xs:rounded-4xl sm:rounded-[50px] flex flex-col justify-center items-center cursor-pointer"
          >
            <div className="w-full max-w-[223px] flex flex-col items-center gap-4 xs:gap-6">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="w-10 xs:w-12 h-10 xs:h-12 flex justify-center items-center bg-cyan-400 rounded-full flex-shrink-0"
              >
                <Mail className="text-black w-5 xs:w-6 h-5 xs:h-6" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-[#FAFAFA] text-xs xs:text-sm sm:text-base font-medium leading-5 xs:leading-6  text-center break-all sm:break-normal"
              >
                support@nkbquantumlabs.com
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Google Maps */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="w-full h-[200px] xs:h-[250px] sm:h-[297px] rounded-lg xs:rounded-xl sm:rounded-[25px] overflow-hidden mb-8 xs:mb-10 sm:mb-12 bg-transparent mx-4 sm:mx-6 lg:mx-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29775.993077626787!2d79.01684628544261!3d21.11260067348707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf6689246e49%3A0xafc577ad7f9dfbec!2sNKB%20QUANTUM%20LABS!5e0!3m2!1sen!2sin!4v1753853608187!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0 block"
            title="NKB Quantum Labs Location"
          ></iframe>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Footer />
        </motion.div>
      </Container>
    </div>
  );
}
