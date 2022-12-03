import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import Image from "next/image"

const simpleIconLoader = ({ src, color = "EAEEB5" }) => {
  return `https://cdn.simpleicons.org/${src}/${color}`
}

const footerSection = {
  stables: [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ],
  products: [
    {
      name: "Cones",
      href: "/product",
    },
    {
      name: "Blunts",
      href: "/product",
    },
    {
      name: "Custom",
      href: "/product",
    },
  ],
  community: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/stables.cones/",
      icon: "instagram",
    },
    {
      name: "Discord",
      href: "",
      icon: "discord",
    },
    {
      name: "TikTok",
      href: "https://",
      icon: "tiktok",
    },
  ],
}

const Footer = () => {
  return (
    <footer className="px-28 pt-32">
      <div className="flex w-full justify-between">
        <div className="w-5/12">
          <h3 className="text-8xl font-semibold text-stablesOrange">Stables</h3>
          <h4>The Cone Company</h4>
        </div>

        <div className="flex w-5/12 justify-between">
          <div>
            <h2 className="mb-6 text-xl font-semibold text-stablesBrown/60">
              Stables
            </h2>
            <ul className="text-stablesYellow">
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
            <h2 className="mb-6 text-xl font-semibold text-stablesBrown/60">
              Products
            </h2>
            <ul className="text-stablesYellow">
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
            <h2 className="mb-6 text-xl font-semibold text-stablesBrown/60">
              Community
            </h2>
            <ul className="text-stablesYellow">
              <li className="mb-4">
                <Link
                  href="https://discord.gg/YfsVtC8C"
                  className="hover:underline"
                >
                  <Image
                    loader={simpleIconLoader}
                    className="float-left inline mr-2 mt-1 fill-stablesYellow"
                    src="discord"
                    color="#EAEEB5"
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
                    loader={simpleIconLoader}
                    className="float-left inline mr-2 mt-1"
                    src="twitter"
                    color="EAEEB5"
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
                    loader={simpleIconLoader}
                    className="float-left inline mr-2 mt-1"
                    src="tiktok"
                    color="gray"
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
                    loader={simpleIconLoader}
                    className="float-left inline mr-2 mt-1"
                    src="instagram"
                    color="gray"
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
      </div>
      <div className="flex py-10 justify-between">
        <span className="flex text-sm text-center text-stablesBrown/80 font-light">
          {"© 2022 Stables™"}
        </span>
        <div>
          <Link
            href="/privacy"
            className="text-sm text-center text-stablesBrown/80 font-light mr-5"
          >
            {"Privacy Policy"}
          </Link>
          <Link
            href="/terms"
            className="text-sm text-center text-stablesBrown/80 font-light"
          >
            {"Terms of Service"}
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
