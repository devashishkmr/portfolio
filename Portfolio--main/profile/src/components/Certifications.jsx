import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";
import { Award } from "lucide-react";
import { useState } from "react";

const CERTIFICATIONS = [
  {
    id: 1,
    title: "Introduction to Python",
    organization: "Infosys | Springboard",
    year: 2023,
    issueDate: "June 2023",
    credentialId: "NPTEL25CS11S1537302838",
    image: "/certificates/infosys.png",
    certificateUrl: "https://drive.google.com/file/d/1C_diZj-xOfa89tbFVqa3eBvwPUaTVMeX/view?usp=drive_link",
    verified: true,
    skills: ["Python", "Python Libraries"," Pandas"],
  },
  {
    id: 2,
    title: "Akhand Jyoti Jan Kalyan Yojana",
    organization: "NGO",
    year: 2025,
    issueDate: "October 22, 2025",
    credentialId: "1029644750C25D80CP",
    image: "/certificates/ngo.png",
    certificateUrl: "https://drive.google.com/file/d/19ebGpgS7QQWAOHsL_E4MXA25WhkJJcr8/view?usp=drive_link",
    verified: true,
    skills: ["NGO Volunteer"],
  },
  {
    id: 3,
    title: "Object Oriented Programming.",
    organization: "Lovely Professional University",
    year: 2025,
    issueDate: "Aug 12, 2024",
    credentialId: "4a76b4274b5d12fb6d5a64850dc400ee41ac013505c3d37f2f5bbb94.54",
    image: "/certificates/c.png",
    certificateUrl: "https://drive.google.com/file/d/1mwHfHoUpe-QKIeqoQ0u2Hpg8gNP6an1i/view?usp=drive_link",
    verified: true,
    skills: ["Data Analysis", "Data Visualization", "Data Analytics"],
  },
  {
    id: 4,
    title: "Introduction to Hardware and Operating Systems",
    organization: "Coursera | IBM",
    year: 2024,
    issueDate: "September 2024",
    credentialId: "MS-LI-DA-2024-2",
    image: "/certificates/ibm.png",
    certificateUrl: "https://drive.google.com/file/d/1gdbOcvJmBAzUTgozRmMSK74Kl8zVdiZY/view?usp=drive_link",
    verified: true,
    skills: ["Data Analysis", "Operating Systems"],
  },
  // {
  //   id: 5,
  //   title: "Data Analytics Job Simulation by Deloitte",
  //   organization: "Deloitte",
  //   year: 2025,
  //   issueDate: "July 21, 2025",
  //   credentialId: "vhdvjcsyj0vgc8mek",
  //   image: "/certificates/deloitte-data-analytics.png",
  //   certificateUrl: "https://drive.google.com/file/d/1fzzQYGJ2dOeqBsy1aMaTCGcAIS-7y0Iv/view?usp=sharing",
  //   verified: true,
  //   skills: ["Data Analysis", "Forensic Technology"],
  // },
  {
    id: 6,
    title: "Data Analytics Essentials: Python, SQL, Power BI, Tableau",
    organization: "Lovely Professional University",
    year: 2025,
    issueDate: "June 10 - July 16, 2025",
    credentialId: "408646",
    image: "/certificates/summer.png",
    certificateUrl: "https://drive.google.com/file/d/1NsrtgiBgWBhALAU9FUnKaWBbw4fuKlRM/view?usp=drive_link",
    verified: true,
    skills: ["SQL", "Python", "Power BI", "Tableau"],
  },
];

function CertificationCard({ cert, theme }) {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className={`group relative flex h-full flex-col rounded-2xl border overflow-hidden backdrop-blur-xl transition-all duration-300 ${
          theme === "dark"
            ? "border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20"
            : "border-slate-200 bg-white hover:border-cyan-400 hover:shadow-xl"
        }`}
      >
        {/* Certificate Image */}
        <div className="relative overflow-hidden h-56 bg-white">
          <motion.img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-contain p-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            loading="lazy"
            decoding="async"
          />
          {cert.verified && (
            <motion.div
              className="absolute top-3 right-3 bg-green-500 text-white rounded-full p-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Award size={20} />
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-1 flex-col">
          <motion.h3
            className={`text-lg font-semibold transition-colors ${
              theme === "dark"
                ? "text-white group-hover:text-cyan-300"
                : "text-slate-900 group-hover:text-cyan-600"
            }`}
            whileHover={{ x: 4 }}
          >
            {cert.title}
          </motion.h3>

          <p
            className={`mt-1 text-sm font-medium ${
              theme === "dark" ? "text-slate-400" : "text-slate-500"
            }`}
          >
            {cert.organization}
          </p>

          <div
            className={`mt-3 text-xs ${
              theme === "dark" ? "text-slate-500" : "text-slate-600"
            }`}
          >
            <p>📅 Issued: {cert.issueDate}</p>
            {cert.credentialId && <p>🔐 ID: {cert.credentialId}</p>}
          </div>

          {/* Skills Tags */}
          {cert.skills && cert.skills.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {cert.skills.map((skill) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className={`text-xs font-medium px-2 py-1 rounded ${
                    theme === "dark"
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/30"
                      : "bg-cyan-50 text-cyan-700 border border-cyan-200"
                  }`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-auto flex flex-col gap-2 pt-5 sm:flex-row">
            <motion.button
              onClick={() => setShowPreview(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-1 rounded-lg px-3 py-2.5 text-xs font-semibold transition ${
                theme === "dark"
                  ? "bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border border-cyan-400/30 hover:border-cyan-400/60"
                  : "bg-cyan-50 text-cyan-700 hover:bg-cyan-100 border border-cyan-200 hover:border-cyan-400"
              }`}
            >
              👁️ Preview
            </motion.button>
            <motion.a
              href={cert.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-1 rounded-lg px-3 py-2.5 text-xs font-semibold transition ${
                theme === "dark"
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-400 hover:to-purple-400 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
                  : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 shadow-lg"
              }`}
            >
              📥 View
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Preview Modal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showPreview ? 1 : 0 }}
        exit={{ opacity: 0 }}
        onClick={() => setShowPreview(false)}
        className={`fixed inset-0 z-40 flex items-center justify-center p-4 ${
          showPreview ? "pointer-events-auto" : "pointer-events-none"
        } ${theme === "dark" ? "bg-black/70" : "bg-black/50"}`}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: showPreview ? 1 : 0.8,
            opacity: showPreview ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className={`relative max-w-2xl w-full rounded-2xl overflow-hidden ${
            theme === "dark" ? "bg-slate-900" : "bg-white"
          }`}
        >
          <button
            onClick={() => setShowPreview(false)}
            className="absolute top-4 right-4 z-50 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition"
          >
            ✕
          </button>
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-auto"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </motion.div>
    </>
  );
}

export default function Certifications() {
  const { theme } = useTheme();

  return (
    <motion.section
      id="certifications"
      className={`${theme === "dark" ? "bg-slate-950/50" : "bg-slate-50"} py-10`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className={`text-sm uppercase tracking-[0.2em] ${
                theme === "dark" ? "text-cyan-200" : "text-cyan-600"
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Achievements
            </motion.p>
            <motion.h2
              className={`text-3xl font-bold relative inline-block ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Certifications
              <motion.span
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "70%" }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </motion.h2>
          </motion.div>
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="h-full"
            >
              <CertificationCard cert={cert} theme={theme} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
