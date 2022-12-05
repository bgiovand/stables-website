import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import Image from "next/image"
import Newsletter from "@/components/Mewsletter"

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
    <footer className="md:px-28 md:pt-32 p-10">
      <div className="flex w-full justify-between flex-col md:flex-row">
        <div className="md:w-5/12 w-full mb-14 md:mb-0">
          <h3 className="text-8xl font-semibold text-stablesOrange">Stables</h3>
          <h4>The Cone Company</h4>
          <Newsletter className="mt-10 pt-8" placeholder="Enter your email and subscribe to our newsletter"/>
        </div>

        <div className="flex w-5/12 justify-between flex-col md:flex-row">
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
              <li className="mb-4 ">
                <Link
                  href="https://discord.gg/YfsVtC8C"
                  className="hover:underline flex flex-row"
                >
                  <Image
                    loader={simpleIconLoader}
                    className="float-left inline mr-2 mt-1 h-[18px] w-[18px]"
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
                <Link href="/" className="hover:underline flex flex-row">
                  <Image
                    loader={simpleIconLoader}
                    className="float-left inline mr-2 mt-1 h-[18px] w-[18px]"
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
                <Link href="/" className="hover:underline flex flex-row">
                  <Image
                    loader={simpleIconLoader}
                    className="float-left inline mr-2 mt-1 h-[18px] w-[18px]"
                    src="tiktok"
                    color="gray"
                    alt="Discord"
                    width={18}
                    height={18}
                    layout="fill"
                  />
                  TikTok
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/" className="hover:underline flex flex-row">
                  <Image
                    loader={simpleIconLoader}
                    className="float-left inline mr-2 mt-1 h-[18px] w-[18px]"
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
      <div className="flex py-10 justify-between align-baseline">
        <span className="flex text-sm text-center text-stablesBrown/80 font-light">
          {"© 2022 Stables™"}
        </span>
        <div>
          <Link
            href="/privacy"
            className="text-sm text-center text-stablesBrown/80 font-light mr-2"
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
