import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#4f5864] text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Joseph.B. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
