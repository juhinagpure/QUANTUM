// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import Container from "../Container";

const DropResume = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
    experience: "",
    file: null,
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("Please agree to the Privacy Policy.");
      return;
    }
    console.log("Submitted Data:", formData);
    alert("Resume submitted successfully!");
  };

  return (
    <div className="w-full py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.2 }}
          className="w-full flex flex-col items-center gap-12"
        >
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.2 }}
            className="text-center flex flex-col gap-4 px-4 mt-10"
          >
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-tight Container">
              post your resume
            </h2>
            <p className="text-white text-lg sm:text-xl md:text-2xl font-normal leading-relaxed tracking-wide  max-w-4xl mx-auto">
              Didn’t find our desired field of interest above? Drop your resume
              here and get notified whether the post is available.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ amount: 0.2 }}
            className="w-full max-w-4xl flex flex-col gap-6 px-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-14 px-6 bg-white rounded-full text-stone-500 text-lg sm:text-xl font-medium  outline-none"
              required
            />

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-14 px-6 bg-white rounded-full text-stone-500 text-lg sm:text-xl font-medium  outline-none"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-14 px-6 bg-white rounded-full text-stone-500 text-lg sm:text-xl font-medium  outline-none"
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                value={formData.jobTitle}
                onChange={handleChange}
                className="w-full h-14 px-6 bg-white rounded-full text-stone-500 text-lg sm:text-xl font-medium  outline-none"
                required
              />
              <input
                type="text"
                name="experience"
                placeholder="Experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full h-14 px-6 bg-white rounded-full text-stone-500 text-lg sm:text-xl font-medium  outline-none"
                required
              />
            </div>

            <div className="w-full h-14 pl-1 pr-6 bg-white rounded-full flex items-center gap-4 overflow-hidden">
              <label className="px-4 py-3 bg-zinc-300 rounded-full text-black text-base sm:text-lg font-medium  cursor-pointer">
                Choose File
                <input
                  type="file"
                  name="file"
                  onChange={handleChange}
                  className="hidden"
                  required
                />
              </label>
              <span className="text-stone-500 text-sm sm:text-base font-medium  truncate">
                {formData.file ? formData.file.name : "No file chosen"}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="w-5 h-5 accent-cyan-400 border border-white rounded-sm"
              />
              <p className="text-white text-sm sm:text-base font-medium ">
                I Acknowledge and Agree to the{" "}
                <span className="underline">Privacy Policy</span>
              </p>
            </div>

            <button
              type="submit"
              className="w-48 h-14 bg-cyan-400 rounded-full text-stone-900 text-lg sm:text-xl font-semibold  tracking-tight hover:brightness-110 transition"
            >
              Submit
            </button>
          </motion.form>
        </motion.div>
      </Container>
    </div>
  );
};

export default DropResume;
