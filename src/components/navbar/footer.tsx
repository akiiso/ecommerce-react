import React from "react";
import Logo from "../shared/logo";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t-8 border-blue-500">
      <div className="grid grid-cols-3 h-80 items-center p-4 gap-4  container text-neutral-50">
        <Logo />
        <div className="flex flex-col">
          <span>contato</span>
          <span>contato</span>
          <span>contato</span>
        </div>
        <div className="flex flex-col">
          <span>+55 15 99693-5132</span>
          <span>+55 15 99693-5132</span>
          <span>+55 15 99693-5132</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
