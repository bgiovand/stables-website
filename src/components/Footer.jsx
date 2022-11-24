import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="">
      <div className="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
            Stables
          </h2>
          <ul className="text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <Link href="/about" className=" hover:underline">
                About
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
            Products
          </h2>
          <ul className="text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <Link href="/about" className=" hover:underline">
                Cones
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/blog" className="hover:underline">
                Blunts
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/contact" className="hover:underline">
                Custom
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
            Community
          </h2>
          <ul className="text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <Link
                href="https://discord.gg/YfsVtC8C"
                className="hover:underline"
              >
                <Image
                  className="float-left inline mr-2 mt-1"
                  src="https://cdn.simpleicons.org/discord/gray"
                  alt="Discord"
                  width={18}
                  height={18}
                />
                Discord
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/" className="hover:underline">
                <Image
                  className="float-left inline mr-2 mt-1"
                  src="https://cdn.simpleicons.org/twitter/gray"
                  alt="Discord"
                  width={18}
                  height={18}
                />
                Twitter
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/" className="hover:underline">
                <Image
                  className="float-left inline mr-2 mt-1"
                  src="https://cdn.simpleicons.org/tiktok/gray"
                  alt="Discord"
                  width={18}
                  height={18}
                />
                TikTok
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/" className="hover:underline">
                <Image
                  className="float-left inline mr-2 mt-1"
                  src="https://cdn.simpleicons.org/instagram/gray"
                  alt="Discord"
                  width={18}
                  height={18}
                />
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-6 px-4 md:flex md:items-center md:justify-between border-t-2 border-stablesOrange">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center text-stablesOrange">
          © 2022 Stables™
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
          <Link
            href="/"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            Privacy Policy
          </Link>

          <Link
            href="/"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
