"use client";
import Link from "next/link";
import FeedkcabLogo from "./logo/FeedkcabLogo";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [mobileMenuShown, setMobileMenuShown] = useState(false);

  return (
    <>
      <header className="absolute w-full md:relative border-b-2 border-black bg-white h-16 px-12 py-4 flex justify-between items-center self-stretch z-20">
        <Link href="/" className="text-2xl font-bold">
          <FeedkcabLogo className="ml-2" />
        </Link>
        <div className="flex md:hidden z-20">
          <button
            tabIndex={0}
            onClick={() => setMobileMenuShown((prev) => !prev)}
            className="btn btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href={`/about-us`}
            className="text-[16px] font-roboto text-[var(--d-color-base-1000,#000)] text-center font-normal leading-[20px] hover:text-gray-600"
          >
            About Us
          </Link>
          <Link
            href="#how-it-works"
            className="text-[16px] font-roboto text-[var(--d-color-base-1000,#000)] text-center font-normal leading-[20px] hover:text-gray-600"
          >
            How it Works
          </Link>
          <Link
            href="#pricing"
            className="text-[16px] font-roboto text-[var(--d-color-base-1000,#000)] text-center font-normal leading-[20px] hover:text-gray-600"
          >
            Pricing
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-[16px] font-roboto text-[var(--d-color-base-1000,#000)] text-center font-normal leading-[20px] hover:text-gray-600"
          >
            Log In
          </Link>
          <span className="text-[var(--d-color-base-1000,#000)]">|</span>
          <Link
            href="/signup"
            className="text-[16px] font-roboto text-[var(--d-color-base-1000,#000)] text-center font-normal leading-[20px] hover:text-gray-600"
          >
            Sign Up
          </Link>
        </div>
      </header>
      {mobileMenuShown ? (
        <ul
          tabIndex={0}
          onClick={() => setMobileMenuShown(false)}
          className="top-16 fixed bg-white z-1 w-screen p-2 shadow-sm z-20"
        >
          <li>
            <Link
              href="#"
              className="py-4 block w-full text-[16px] font-roboto text-[var(--d-color-base-1000,#000)] text-center font-normal leading-[20px] active:bg-gray-300 hover:bg-gray-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="#how-it-works"
              className="py-4 block text-[16px] font-roboto text-[var(--d-color-base-1000,#000)] text-center font-normal leading-[20px] active:bg-gray-300 hover:bg-gray-300"
            >
              How it Works
            </Link>
          </li>
          <li>
            <Link
              href="#pricing"
              className="py-4 block text-[16px] font-roboto text-[var(--d-color-base-1000,#000)] text-center font-normal leading-[20px] active:bg-gray-300 hover:bg-gray-300"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="py-4 block text-[16px] font-roboto text-[var(--d-color-base-1000,#000)] text-center font-normal leading-[20px] active:bg-gray-300 hover:bg-gray-300"
            >
              Log In
            </Link>
          </li>
          <li>
            <Link
              href="/signup"
              className="py-4 block text-[16px] font-roboto text-[var(--d-color-base-1000,#000)] text-center font-normal leading-[20px] active:bg-gray-300 hover:bg-gray-300"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
