import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-8 text-base">
      <p className="text-white/60">&copy; 2024, Developed by Blendi Ivanja.</p>
      <p className="text-white/60">
        Designed by{" "}
        <Link
          href="https://buymeacoffee.com/cristianmihai/e/254945"
          className="text-accent  hover:underline"
          target="_blank"
        >
          Cristian Mihai
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
