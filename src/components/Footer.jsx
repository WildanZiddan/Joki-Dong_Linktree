import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8 pb-8 w-full flex flex-col items-center gap-4">
      {/* Divider Line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
      
      <div className="text-center">
        <p className="text-zinc-400 text-sm font-medium tracking-wide">
          Tugas Beres, Hati Tenang. di<span className="text-teal-500 font-bold italic"> Joki Dong</span> Aja! 🚀
        </p>
        <p className="mt-3 text-zinc-500 text-[10px] uppercase tracking-[0.25em]">
          © {currentYear} Joki Dong Team • All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;