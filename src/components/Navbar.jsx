import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const items = ["home", "about", "skills", "projects", "contact"];

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur border-b z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <span className="text-2xl font-bold tracking-tight text-black">
          <span className="text-green-600">R</span>ajnish
        </span>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-8">
          {items.map((i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className="text-gray-800 font-medium hover:text-green-700 relative group"
            >
              {i.charAt(0).toUpperCase() + i.slice(1)}

              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px]
                               bg-green-600 group-hover:w-full transition-all"></span>
            </button>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-900">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-3">
          {items.map((i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className="block w-full text-left text-gray-800 font-medium"
            >
              {i.charAt(0).toUpperCase() + i.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
