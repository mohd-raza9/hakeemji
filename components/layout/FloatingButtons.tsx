"use client";

import { Phone, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-8 right-8 z-[999] flex flex-col items-end gap-4">

      {/* Phone */}
      <a
        href="tel:+919876543210"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_12px_30px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-110"
      >
        <Phone size={30} strokeWidth={2.3} />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white shadow-[0_12px_30px_rgba(236,72,153,0.4)] transition-all duration-300 hover:scale-110"
      >
        <FaInstagram size={34} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/917017530506?text=Hello%20Shifa%20Dawakhana,%20I%20want%20to%20know%20about%20your%20treatment."
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-18 w-18 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_15px_35px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110"
      >
        <MessageCircle size={38} strokeWidth={2.2} />
      </a>

    </div>
  );
}