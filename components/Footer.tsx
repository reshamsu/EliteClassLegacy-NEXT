"use client";

import Link from "next/link";
import {
  FaWhatsapp,
  FaRegCopyright,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const handleNavClick = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.push(path);
  };

  return (
    <footer className="bg-black text-gray-600 border-t border-white/10">
      <div className="max-w-5xl mx-auto py-14 2xl:pt-20 px-8 2xl:px-0 flex flex-col items-center gap-10">
        {/* Footer Links */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full text-xs 2xl:text-sm px-6 md:px-10 lg:px-0">
          <div className="flex flex-col items-center text-center gap-6 w-full lg:w-fit">
            <Link href="/" className="flex flex-col items-center gap-2">
              <Image
                src="/favicon.ico"
                alt="TQ"
                width={55}
                height={55}
                className="object-contain"
              />
            </Link>
            {/* Company */}
            <div className="">
              <h6 className="text-lg font-semibold mb-3 text-white">
                Elite Class Legacy Vacation Homes LLC
              </h6>
              <p className="text-sm text-gray-500">
                Short-term rental management for Downtown Dubai apartments.
              </p>
            </div>

            <ul className="flex gap-2 text-lg 2xl:text-xl">
              <li>
                <Link
                  href="https://wa.me/971"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex border rounded-2xl border-gray-900 p-2 hover:text-white hover:bg-gray-900 hover:scale-105 transition-all duration-500"
                >
                  <FaWhatsapp />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex border rounded-2xl border-gray-900 p-2 hover:text-white hover:bg-gray-900 hover:scale-105 transition-all duration-500"
                >
                  <FaFacebook />
                </Link>
              </li>
              {/* <li>
                <Link
                  href="mailto:info@eliteclasslegacy.com"
                  className="flex border rounded-2xl border-gray-900 p-2 hover:text-white hover:bg-gray-900 hover:scale-105 transition-all duration-500"
                >
                  <TbMail />
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Explore */}
          <div className="ml-0 lg:ml-30">
            <h6 className="text-base font-semibold mb-4 text-white">
              Quick Links
            </h6>
            <ul className="flex flex-col gap-2.5 text-sm">
              {[
                "Home",
                "Property Management",
                "How It Works",
                "Why Choose Us",
                "Partner With Us",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href="/"
                    className="hover:text-white/60 hover:font-semibold transition-all duration-500"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="ml-0 lg:ml-30">
            <h6 className="text-base font-semibold mb-5 text-white">
              Contact Point
            </h6>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <Link
                href="https://wa.me/971"
                className="select-none btn-light-sm"
              >
                Chat on Whatsapp
              </Link>
              <Link href="mailto:info@eliteclasslegacy.com" className="select-none btn-light-sm">
                Send us an Email
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-gray-900 w-full flex items-center justify-center">
          <p className="text-sm flex items-center text-center gap-1">
            <FaRegCopyright /> 2025 Elite Class Legacy Vacation Homes LLC. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
