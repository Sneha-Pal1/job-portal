import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-full";

  return (
    <>
      {/* Overlay background */}
      {showNav && (
        <div
          className="fixed inset-0 z-[1000] bg-black opacity-70"
          onClick={closeNav}
        ></div>
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-cyan-800 z-[1001] transform ${navOpen} transition-transform duration-500 ease-in-out`}
      >
        {/* Close Button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-4 right-4 text-white w-6 h-6 sm:w-8 sm:h-8 cursor-pointer z-[1002]"
        />

        <div className="flex flex-col space-y-6 pt-20 pl-12">
          {NavLinks.map((link) => (
            <Link key={link.id} href={link.url} onClick={closeNav}>
              <p className="text-white w-fit text-xl border-b pb-1 border-white sm:text-[30px]">
                {link.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileNav;
