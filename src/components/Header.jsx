import React from "react"
import Link from "next/link"

const Header = () => {
  return (
    <header>
      <nav className="w-100">
        <div className="">
          <Link
            href="/"
            className="self-center text-2xl font-semibold whitespace-nowrap text-stablesOrange md:hidden"
          >
            Stables
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden w-full space-y-4 md:flex md:space-y-0 md:space-x-8 md:w-auto"
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 md:flex-row mx-auto w-max">
              <li>
                <Link href="/about" className="block py-2 px-4 font-regular">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="block py-2 px-4 font-regular">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block py-2 px-4 font-regular">
                  Contact
                </Link>
              </li>
              <li>
                <h1 className="self-center text-4xl font-semibold whitespace-nowrap text-stablesOrange mx-10">
                  <Link href="/">Stables</Link>
                </h1>
              </li>
              <li>
                <Link href="/product" className="block py-2 px-4 font-regular">
                  Cones
                </Link>
              </li>
              <li>
                <Link href="/blunts" className="block py-2 px-4 font-regular">
                  Blunts
                </Link>
              </li>
              <li>
                <Link href="/custom" className="block py-2 px-4 font-regular">
                  Custom
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
