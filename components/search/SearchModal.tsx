"use client";

import { X, Search } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const recent = [
  "Diabetes",
  "Hijama",
  "Hair Care",
];

const popular = [
  "Majoon",
  "Sharbat",
  "Qurs",
  "Capsule",
  "Oil",
];

export default function SearchModal({
  open,
  onClose,
}: Props) {

  if (!open) return null;

  return (

    <div className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm">

      <div className="mx-auto mt-24 w-[95%] max-w-2xl rounded-[30px] bg-white p-8 shadow-2xl">

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-2xl font-bold">

            Search Medicines

          </h2>

          <button onClick={onClose}>

            <X />

          </button>

        </div>

        <div className="flex items-center rounded-full border px-5">

          <Search />

          <input
            placeholder="Search medicine..."
            className="w-full bg-transparent p-4 outline-none"
          />

        </div>

        <div className="mt-8">

          <h3 className="font-semibold">

            Recent Searches

          </h3>

          <div className="mt-3 flex flex-wrap gap-3">

            {recent.map((item)=>(
              <button
                key={item}
                className="rounded-full bg-[#F8F6F1] px-4 py-2 hover:bg-[#C9A227] hover:text-white"
              >
                {item}
              </button>
            ))}

          </div>

        </div>

        <div className="mt-8">

          <h3 className="font-semibold">

            Popular

          </h3>

          <div className="mt-3 flex flex-wrap gap-3">

            {popular.map((item)=>(
              <button
                key={item}
                className="rounded-full border px-4 py-2 hover:bg-[#0B5D3B] hover:text-white"
              >
                {item}
              </button>
            ))}

          </div>

        </div>

      </div>

    </div>

  );

}