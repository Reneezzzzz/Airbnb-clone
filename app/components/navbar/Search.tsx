"use client";

import { BiSearch } from "react-icons/bi";

export default function Search() {
  return (
    <div
      className="
    border-[1px]
     w-full
     md:w-auto
     py-2
     rounded-full
     shadow-sm
     hover:shadow-md
     transition
     cursor-pointer

    "
    >
      <div
        className="
     flex
     flex-row
     items-center
     justify-betweeem

     "
      >
        <div
          className="
      text-sm
      font-semibold
      px-6
      "
        >
          anywhere
        </div>

        <div
          className="
      text-sm
      hidden
      sm:block
      font-semibold
      px-6
      border-x-[1px]
      flex-1
      text-center
      "
        >
          any week
        </div>
        <div
          className="
      text-sm
      pl-6
      pr-2
      text-gray-600
      flex
      flex-row
      items-center
      gap-3
      "
        >
          <div
            className="
      hidden
      sm:block"
          >
            add guests
          </div>
          <div
            className="
          p-2
          bg-rose-500
          rounded-full
          text-white
          "
          >
            <BiSearch size={13} />
          </div>
        </div>
      </div>
    </div>
  );
}
