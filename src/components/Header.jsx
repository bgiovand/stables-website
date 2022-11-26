import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

const Header = () => {
  const menu = [
    { name: "Home", url: "/", alt: "Stables" },
    { name: "About", url: "/about" },
    { name: "Blog", url: "/blog" },
    { name: "Contact", url: "/contact" },
    { name: "Cones", url: "/product" },
    { name: "Blunts", url: "/blunts" },
    { name: "Custom", url: "/custom" },
  ]

  const router = useRouter()
  const currentRoute = router.pathname

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
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden w-full space-y-4 md:flex md:space-y-0 md:space-x-8 md:w-auto"
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 md:flex-row mx-auto w-max align-text-baseline">
              {menu.map((page, index) => (
                <li
                  key={index}
                  className={` align-bottom  border-transparent hover:border-stablesOrange flex
                      ${page.name === "Home" ? "order-1" : `order-${index+1}`}
                    `}
                >
                  <Link
                    href={page.url}
                    className={`pb-0 px-10 hover:text-stablesOrange font-regular text-lg align-bottom flex justify-end flex-col ${
                      currentRoute === page.url
                        ? "text-stablesOrange"
                        : "text-stablesBlue"
                    } ${page.name === "Home" ? "text-4xl" : ""} 
                    `}
                  >
                    {page.alt ? page.alt : page.name}
                    {currentRoute === page.url && (
                      <span className="sr-only">(current)</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
