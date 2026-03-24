"use client";
import React, { JSX, useState } from "react";
import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaEnvelope,
  FaFileAlt,
  FaLinkedinIn,
  FaBars,
  FaBrain,
  FaTimes,
  FaServer,
  FaDatabase,
  FaNetworkWired,
  FaTerminal,
  FaShieldAlt,
  FaCheckCircle,
  FaAward,
} from "react-icons/fa";
import { ReactTyped } from "react-typed";
import {
  PythonOriginal,
  MysqlOriginal,
  MongodbOriginal,
  DockerOriginal,
  AmazonwebservicesOriginalWordmark,
  GitOriginal,
  GithubOriginal,
  LinuxOriginal,
  BashOriginal,
} from "devicons-react";
import { FaCertificate } from "react-icons/fa6";

interface TimelineCardProps {
  side: "left" | "right";
  role: string;
  company: string;
  date: string;
  points: string[];
}

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const TimelineCard: React.FC<TimelineCardProps> = ({
    side,
    role,
    company,
    date,
    points,
  }) => {
    const isLeft = side === "left";

    return (
      <div
        className={`
        relative mb-16 flex
        pl-12 sm:pl-16 md:pl-8
        ${isLeft ? "md:justify-start md:pr-10" : "md:justify-end md:pl-10"}
      `}
      >
        {/* Dot */}
        <div
          className="
    absolute top-6
    left-6 md:left-1/2
    -translate-x-1/2
    w-4 h-4 bg-white rounded-full z-10
  "
        ></div>

        {/* Card */}
        <div className="bg-[#2a2a2a] text-white w-full md:w-[45%] p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold">{role}</h3>
          <p className="text-cyan-400 font-semibold">{company}</p>
          <p className="text-orange-400 text-sm mb-4">{date}</p>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-200">
            {points.map((point: string, idx: number) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-gray-800 text-white rounded-full"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-start space-y-3 w-16 transition-all duration-300 
      md:w-64 md:flex ${
        isOpen
          ? "translate-x-0 bg-[#ffcf8e] z-20 w-[50%] py-56"
          : "-translate-x-full md:translate-x-0 -left-11 z-10"
      }`}
      >
        <NavItem href="#home" icon={<FaHome size={22} />} text="Home" download={false} />
        <NavItem href="#about" icon={<FaUser size={22} />} text="About" download={false} />
        <NavItem href="#experience" icon={<FaBriefcase size={22} />} text="Experience" download={false} />
        <NavItem href="#education" icon={<FaGraduationCap size={22} />} text="Education" download={false} />
        <NavItem href="#skills" icon={<FaBrain size={22} />} text="Skills" download={false} />
        <NavItem href="#certification" icon={<FaCertificate size={22} />} text="Certifications" download={false} />
        <NavItem href="#contact" icon={<FaEnvelope size={22} />} text="Contact" download={false} />
        <NavItem href="/Resume.pdf" icon={<FaFileAlt size={24} />} text="Resume" download={true} />
      </aside>

      <main className="flex-1 font-merri flex flex-col justify-center items-center md:px-0 overflow-x-hidden">
        <div className="w-full space-y-8">

          {/* ── HERO SECTION ── */}
          <section
            id="home"
            className="h-screen flex flex-col justify-center items-start text-left px-16 md:items-center md:text-center md:px-20 transition-all
        bg-[url('/Gradient1.png')]"
          >
            <h1 className="font-dancing md:text-6xl text-4xl sm:text-5xl font-bold mt-40 md:mt-36">
              Anuj Rana
            </h1>
            <p className="font-merri text-lg sm:text-xl text-black mt-2">
              I&apos;m a{" "}
              <span className="text-white">
                <ReactTyped
                  strings={[
                    "Associate Process Manager",
                    "Systems & Cloud Engineer",
                    "Database Administrator",
                    "DevOps Enthusiast",
                  ]}
                  typeSpeed={55}
                  backSpeed={40}
                  loop
                />
              </span>
            </p>

            {/* Social Links */}
            <div className="mt-4 flex flex-wrap justify-center gap-6">
              <SocialLink
                href="https://www.linkedin.com/in/anuj-ranab0a014166"
                icon={<FaLinkedinIn size={24} />}
              />
              <SocialLink
                href="mailto:rana1995anuj@gmail.com"
                icon={<FaEnvelope size={24} />}
              />
            </div>
          </section>

          {/* ── ABOUT SECTION ── */}
          <section
            id="about"
            className="p-10 md:p-30 flex flex-col justify-between"
          >
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-bold text-center mb-6">About Me</h1>
              <hr className="w-1/3 md:w-1/4 border-t-2 border-[#fd8439] mb-6 mx-auto rounded-lg transition-all duration-300 hover:border-[#fd8439]" />
              <p className="text-lg text-center mb-6">
                Results-driven <strong>Associate Process Manager</strong> and Systems Engineer with{" "}
                <strong>8+ years</strong> of experience in infrastructure management, cloud operations,
                and technical process optimization. Recognized as{" "}
                <strong>Employee of the Year FY&apos;2024</strong>. Seeking to leverage a strong
                systems background and growing expertise in Python, SQL, and MongoDB toward a{" "}
                <strong>Data Engineering / Platform Engineering / MLOps</strong> role.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4">
              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
                {[
                  { label: "Name", value: "Anuj Rana" },
                  { label: "Location", value: "Pune, Maharashtra, India" },
                  { label: "Email", value: "rana1995anuj@gmail.com", isLink: true },
                  { label: "Phone", value: "+91-7248131691" },
                  { label: "LinkedIn", value: "linkedin.com/in/anuj-rana", isLink: true, href: "https://www.linkedin.com/in/anuj-ranab0a014166" },
                  { label: "Experience", value: "8+ Years" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-[#1a1a1a] rounded-xl p-4 border border-[#fd8439]/20 hover:border-[#fd8439]/60 transition-all"
                  >
                    <p className="text-xs text-[#fd8439] font-semibold uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    {item.isLink ? (
                      <a
                        href={item.href || `mailto:${item.value}`}
                        className="text-gray-200 hover:text-[#fd8439] transition-colors text-sm break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-200 text-sm">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="flex flex-col gap-4 w-full max-w-sm mt-6 md:mt-0">
                {[
                  { icon: <FaAward className="text-yellow-400" size={18} />, text: "Employee of the Year FY'2024 — eClerx" },
                  { icon: <FaAward className="text-[#fd8439]" size={18} />, text: "Values Award — eClerx" },
                  { icon: <FaCheckCircle className="text-green-400" size={18} />, text: "~30% MTTR reduction via automated monitoring" },
                  { icon: <FaCheckCircle className="text-green-400" size={18} />, text: "20% ticket volume reduction over two quarters" },
                  { icon: <FaShieldAlt className="text-cyan-400" size={18} />, text: "<4-hour RTO for critical systems" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-[#1a1a1a] rounded-xl p-4 border border-[#fd8439]/20"
                  >
                    <div className="mt-0.5">{item.icon}</div>
                    <p className="text-sm text-gray-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── EXPERIENCE SECTION ── */}
          <section id="experience" className="py-16 px-4">
            <h1 className="text-3xl font-bold text-center text-white mb-6">
              Experience
            </h1>
            <hr className="w-1/3 md:w-1/4 border-t-2 border-[#fd8439] mb-6 mx-auto rounded-lg transition-all duration-300 hover:border-[#fd8439]" />

            <div className="relative max-w-6xl mx-auto -mb-20">
              {/* Vertical line */}
              <div className="absolute top-0 left-6 md:left-1/2 md:-translate-x-1/2 w-1 h-full bg-[#fd8439]"></div>

              <TimelineCard
                side="left"
                role="Associate Process Manager"
                company="eClerx Services Ltd."
                date="June 2022 – Present"
                points={[
                  "Lead a cross-functional operations team overseeing infrastructure health, SLA adherence, and process optimization across Linux-based production environments.",
                  "Designed and implemented automated monitoring solutions, reducing MTTR by ~30%.",
                  "Managed DBA tasks for Microsoft SQL Server and MySQL including backup/recovery, query tuning, and high-availability user access control.",
                  "Collaborated with data & analytics stakeholders to streamline data pipelines for downstream reporting and BI workflows.",
                  "Recognized with Employee of the Year FY'2024 and Values Award for outstanding performance and leadership.",
                ]}
              />

              <TimelineCard
                side="right"
                role="Support Engineer"
                company="Entrib Analytics Technology Pvt. Ltd."
                date="April 2021 – July 2022"
                points={[
                  "Provided L2/L3 technical support for analytics platform infrastructure, resolving complex OS, network, and application-level incidents within SLA windows.",
                  "Performed root cause analysis on recurring system failures, reducing ticket volume by 20% over two quarters.",
                  "Managed user administration, password policy, ACL configuration, and SELinux hardening across multi-tenant Linux environments.",
                  "Coordinated with deployment and development teams to validate hotfixes and patches prior to production release.",
                ]}
              />

              <TimelineCard
                side="left"
                role="Deployment Engineer"
                company="Entrib Analytics Technology Pvt. Ltd."
                date="March 2018 – April 2021"
                points={[
                  "Deployed enterprise-grade services (HTTPD, DNS, DHCP, NFS, SAMBA, SMTP, NTP, iSCSI) on RHEL/CentOS servers for production and staging.",
                  "Automated OS provisioning workflows using shell scripts, reducing new server setup time from hours to under 30 minutes.",
                  "Managed LVM and SWAP configurations to support dynamic storage needs, improving I/O throughput and stability.",
                  "Administered VMware vSphere virtual infrastructure: VM provisioning, snapshot management, and resource pool optimization.",
                  "Maintained backup and disaster recovery protocols ensuring <4-hour RTO for critical systems.",
                ]}
              />
            </div>
          </section>

          {/* ── EDUCATION SECTION ── */}
          <section
            id="education"
            className="bg-black py-16 px-4 flex flex-col items-center"
          >
            <h1 className="text-3xl font-bold text-center text-white mb-6">
              Education
            </h1>
            <hr className="w-1/3 md:w-1/4 border-t-2 border-[#fd8439] mb-10 mx-auto rounded-lg" />

            <div className="flex flex-col gap-6 w-full max-w-3xl">
              {[
                {
                  degree: "Master of Computer Applications (MCA)",
                  branch: "Computer Science & Information Systems",
                  university: "Dr. A.P.J. Abdul Kalam Technical University",
                  location: "Uttar Pradesh, India",
                  years: "June 2016 – June 2018",
                },
                {
                  degree: "Bachelor of Computer Applications (BCA)",
                  branch: "Information Technology",
                  university: "Radha Govind Engineering College, Meerut",
                  location: "Uttar Pradesh, India",
                  years: "June 2013 – June 2016",
                },
              ].map((edu, i) => (
                <div
                  key={i}
                  className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-md border border-[#fd8439]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#fd8439]/40 hover:-translate-y-1"
                >
                  <div className="bg-[#fd8439] py-6 px-6 flex items-center gap-3">
                    <FaGraduationCap size={28} className="text-black" />
                    <span className="text-black font-bold text-lg">{edu.university}</span>
                  </div>
                  <div className="bg-[#2a2a2a] text-center px-6 py-8">
                    <h2 className="text-2xl font-bold text-white mb-2">{edu.degree}</h2>
                    <p className="text-cyan-400 text-lg font-semibold">{edu.branch}</p>
                    <p className="text-gray-300 italic mt-1">{edu.location}</p>
                    <p className="text-orange-400 font-semibold mt-4">{edu.years}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SKILLS SECTION ── */}
          <section
            id="skills"
            className="p-10 md:p-30 flex flex-col justify-between"
          >
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-bold text-center mb-6">Technical Skills</h1>
              <hr className="w-1/3 md:w-1/4 border-t-2 border-[#fd8439] mb-6 mx-auto rounded-lg transition-all duration-300 hover:border-[#fd8439]" />

              {/* Devicon skills */}
              <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-9 gap-4 mt-6 text-black mb-8">
                {[
                  { icon: <LinuxOriginal size={40} />, label: "Linux" },
                  { icon: <PythonOriginal size={40} />, label: "Python" },
                  { icon: <BashOriginal size={40} />, label: "Bash" },
                  { icon: <MysqlOriginal size={40} />, label: "MySQL" },
                  { icon: <MongodbOriginal size={40} />, label: "MongoDB" },
                  { icon: <DockerOriginal size={40} />, label: "Docker" },
                  { icon: <AmazonwebservicesOriginalWordmark size={40} />, label: "AWS" },
                  { icon: <GitOriginal size={40} />, label: "Git" },
                  { icon: <GithubOriginal size={40} />, label: "GitHub" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="pt-2 sm:p-4 bg-white rounded-lg shadow-md text-center hover:bg-[#fd8439] hover:text-white transition-all duration-300"
                  >
                    <div className="flex justify-center items-center">{s.icon}</div>
                    <span className="md:text-lg text-sm font-medium block mt-3">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Category skill cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-5xl">
                {[
                  {
                    icon: <FaServer size={18} className="text-[#fd8439]" />,
                    title: "OS & Infrastructure",
                    tags: ["RHEL / CentOS / Ubuntu", "Kernel Management", "RPM / YUM", "SELinux", "iptables / firewalld"],
                  },
                  {
                    icon: <FaShieldAlt size={18} className="text-[#fd8439]" />,
                    title: "Cloud & Virtualization",
                    tags: ["VMware vSphere", "VM Deployment", "Infrastructure Automation", "Backup & Recovery"],
                  },
                  {
                    icon: <FaDatabase size={18} className="text-[#fd8439]" />,
                    title: "Databases",
                    tags: ["Microsoft SQL Server", "MySQL", "MongoDB", "Query Optimization", "Data Backup"],
                  },
                  {
                    icon: <FaNetworkWired size={18} className="text-[#fd8439]" />,
                    title: "Networking & Services",
                    tags: ["HTTP/HTTPD", "FTP / DHCP / DNS", "NFS / SAMBA / SMTP", "NTP / iSCSI / SSH", "LVM / SWAP"],
                  },
                  {
                    icon: <FaTerminal size={18} className="text-[#fd8439]" />,
                    title: "Programming & Scripting",
                    tags: ["Python", "Bash / Shell Scripting", "SQL"],
                  },
                  {
                    icon: <FaCheckCircle size={18} className="text-[#fd8439]" />,
                    title: "Process & Operations",
                    tags: ["SLA Management", "Incident Management", "ITIL", "Root Cause Analysis", "Team Leadership"],
                  },
                ].map((cat) => (
                  <div
                    key={cat.title}
                    className="bg-[#1f1f1f] rounded-2xl p-5 border border-[#fd8439]/30 hover:border-[#fd8439]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#fd8439]/20"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      {cat.icon}
                      <h3 className="font-semibold text-white">{cat.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-[#fd8439]/10 text-orange-300 border border-[#fd8439]/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CERTIFICATIONS & AWARDS SECTION ── */}
          <section
            id="certification"
            className="p-6 md:p-10 flex flex-col justify-center items-center w-full relative"
          >
            <h1 className="text-3xl font-bold text-center mb-6">
              Certifications &amp; Awards
            </h1>
            <hr className="w-1/3 md:w-1/4 border-t-2 border-[#fd8439] mb-6 mx-auto rounded-lg transition-all duration-300 hover:border-[#fd8439]" />

            <div className="md:mt-6 mt-4 flex flex-col gap-5 md:ml-12 ml-3 w-full max-w-[850px]">
              {[
                { num: "🏆", title: "Employee of the Year – FY'2024", org: "eClerx Services Ltd.", isAward: true },
                { num: "🏅", title: "Values Award", org: "eClerx Services Ltd.", isAward: true },
                { num: "1", title: "Complete Microsoft SQL Server Database Administration", org: "Udemy" },
                { num: "2", title: "VMware vSphere Fundamentals", org: "VMware Learning" },
                { num: "3", title: "Python for Absolute Beginners", org: "Online Certification" },
                { num: "4", title: "The MongoDB Shell", org: "MongoDB University" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-wrap sm:flex-nowrap items-center gap-4 bg-[#1f1f1f] rounded-xl p-4 border border-[#fd8439]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#fd8439]/30"
                >
                  <div className="min-w-[42px] h-[42px] md:min-w-[60px] md:h-[60px] flex items-center justify-center bg-[#fd8439] rounded-full border-2 border-black text-black text-xl md:text-3xl font-bold shadow-md">
                    {item.num}
                  </div>
                  <div>
                    <div className="text-sm sm:text-xl font-semibold text-white">{item.title}</div>
                    <div className="text-xs sm:text-lg text-gray-400 mt-1">{item.org}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── CONTACT SECTION ── */}
          <section
            id="contact"
            className="p-6 md:p-10 flex flex-col justify-center items-center"
          >
            <h1 className="text-3xl font-bold text-center mb-6">Contact Me</h1>
            <hr className="w-1/3 md:w-1/4 border-t-2 border-[#fd8439] mb-6 mx-auto rounded-lg transition-all duration-300 hover:border-[#fd8439]" />

            <div className="w-full max-w-[90%] sm:max-w-[600px] md:max-w-[750px] lg:max-w-[850px] bg-black rounded-md shadow-lg border-none border-[#fd8439] overflow-hidden p-6 sm:p-8 relative">
              <div className="text-center text-white text-lg sm:text-xl md:text-4xl font-medium">
                Looking for a Data Engineering / Platform Engineering / MLOps opportunity?
              </div>
              <div className="mt-4 text-center text-white text-sm sm:text-lg font-normal px-2 sm:px-4">
                Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
              </div>
              <div className="mt-6 sm:mt-8 flex justify-center">
                <a href="mailto:rana1995anuj@gmail.com">
                  <button className="px-5 sm:px-6 py-2 sm:py-3 bg-[#fd8439] rounded-full border-4 border-white text-black text-sm sm:text-lg font-bold cursor-pointer transition-all hover:bg-white">
                    Let&apos;s get in touch ✉️
                  </button>
                </a>
              </div>
            </div>
          </section>

          {/* ── FOOTER ── */}
          <section className="flex justify-between items-center p-4 bg-black flex-wrap md:flex-nowrap">
            <div className="flex space-x-2 md:ml-10 mt-2 md:mt-0">
              <span className="text-white md:text-[18px] text-[16px] font-normal font-['Poppins'] tracking-wide">
                Copyright © 2025
              </span>
              <span className="text-[#fd6f00] md:text-[18px] text-[16px] font-bold font-['Poppins'] tracking-wide">
                Anuj Rana |
              </span>
            </div>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <SocialLink
                href="https://www.linkedin.com/in/anuj-ranab0a014166"
                icon={<FaLinkedinIn size={22} />}
              />
              <SocialLink
                href="mailto:rana1995anuj@gmail.com"
                icon={<FaEnvelope size={22} />}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;

// NavItem Component
interface NavItemProps {
  href: string;
  icon: JSX.Element;
  text: string;
  download: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, text, download = false }) => (
  <a
    href={href}
    className="group flex items-center justify-start p-2 rounded-full transition-all transform hover:scale-95 hover:bg-[#fd8439] hover:opacity-80"
    download={download ? true : undefined}
  >
    <div className="bg-white p-2 rounded-full inline-flex items-center justify-center">
      <span className="text-[#fd8439]">{icon}</span>
    </div>
    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-1">
      {text}
    </span>
  </a>
);

// SocialLink Component
interface SocialLinkProps {
  href: string;
  icon: JSX.Element;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-gray-800 transition-colors"
  >
    {icon}
  </a>
);
