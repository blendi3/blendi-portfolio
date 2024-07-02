import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/blendi3",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/blendi-ivanja-214586250/",
  },
  {
    icon: <IoMailSharp />,
    path: "https://mail.google.com/mail/?view=cm&fs=1&to=blendiivanja2@gmail.com",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
