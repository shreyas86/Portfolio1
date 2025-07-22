import { FaHome, FaGithub, FaLinkedin, FaEnvelope, FaSun } from "react-icons/fa";

const FloatingBar = () => {
  const links = [
    { icon: <FaHome />, url: "#home", label: "Home" },
    { icon: <FaGithub />, url: "https://github.com/shreyas86", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/shreyashegde10", label: "LinkedIn" },
    {
      icon: <FaEnvelope />,
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=shreyasin153@gmail.com&su=Let's%20Connect&body=Hi%20Shreyas%2C%20I%20would%20like%20to%20connect%20with%20you.",
      label: "Email"
    },
    // { icon: <FaSun />, url: "#", label: "Theme" }
  ];

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-white shadow-xl px-4 py-2 rounded-full flex items-center gap-1 z-50 border border-gray-200">
      {links.map((link, index) => (
        <div
          key={index}
          className="group relative flex items-center justify-center p-2 rounded-full hover:bg-gray-200 hover:px-3 transition-all duration-200"
        >
          <a
            href={link.url}
            target={link.url.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="text-black text-sm md:text-base"
          >
            {link.icon}
          </a>
          {/* Tooltip */}
          <span className="absolute bottom-10 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded-md pointer-events-none whitespace-nowrap">
            {link.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FloatingBar;
