import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

const Header = () => {
  const menu = [
    { name: "Home", url: "/" },
    { name: "Cones", url: "/product" },
    { name: "Blunts", url: "/product/blunts" },
    { name: "Custom", url: "/product/custom" },
    { name: "Blog", url: "/blog" },
    { name: "Contact", url: "/contact" },
    { name: "About", url: "/about" },
  ]

  const router = useRouter()
  const currentRoute = router.pathname
  console.log(router.route)

  const [isNavOpen, setIsNavOpen] = useState(false) // initiate isNavOpen state with false

  return (
    <header>
      <nav className="w-100 p-5">
        <div className="flex flex-row justify-between w-100  md:flex-col ">
          <Link href="/" className="text-stablesOrange text-5xl md:text-center">
            Stables
          </Link>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-stablesYellow rounded-lg md:hidden hover:bg-stablesOrange focus:outline-none focus:ring-2 focus:ring-stablesOrange hover:text-white"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-10 h-10"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${isNavOpen ? "visible" : "hidden"} 
          w-full 
          md:flex md:flex-col md:items-center 
          `}
        >
          <ul
            className="flex flex-col bg-stablesBlack/80 rounded-2xl p-2
          md:flex-row md:bg-stablesBlack/0"
          >
            {menu.map((page, index) => (
              <li key={index} className={`hover:border-stablesOrange`}>
                <Link
                  href={page.url}
                  className={`w-full px-3 py-4 justify-end hover:text-stablesOrange font-regular text-5xl flex flex-row 
                  md:text-2xl
                  
                  ${
                    currentRoute.split("/")[1] == page.url.split("/")[1]
                      ? "text-stablesOrange"
                      : "text-stablesBlue"
                  }
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
      </nav>
    </header>
  )
}

export default Header
