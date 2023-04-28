import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import Image from "next/image"
import Newsletter from "@/components/Newsletter"

const simpleIconLoader = ({ src, color = "EAEEB5" }) => {
  return `https://cdn.simpleicons.org/${src}/${color}`
}

const footerSection = {
  stables: [
    {
      name: "About",
      href: "/about",
    },
    // {
    //   name: "Blog",
    //   href: "/blog",
    // },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Cones",
      href: "/product",
    },
  ],
  products: [
    {
      name: "Cones",
      href: "/product",
    },
    // {
    //   name: "Blunts",
    //   href: "/product/blunts",
    // },
    // {
    //   name: "Custom",
    //   href: "/product/custom",
    // },
  ],
  community: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/getstables/",
      icon: "instagram",
    },
    // {
    //   name: "Discord",
    //   href: "https://discord.gg/YfsVtC8C",
    //   icon: "discord",
    // },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@getstables",
      icon: "tiktok",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/getstablescones",
      icon: "twitter",
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
          <div className="mt-8">
            <span className="mb-3 block text-stablesOrange">
              Sign up for The Filter
            </span>
            <Newsletter className="mt-3 pt-0" placeholder="Email Address" />
          </div>
        </div>

        <div className="flex w-4/12 flex-col mt-10 md:flex-row justify-between">
          <div>
            <h2 className="mb-6 text-xl font-semibold text-stablesBrown/60">
              Stables
            </h2>
            <ul className="text-stablesYellow">
              {footerSection.stables.map((item, index) => (
                <li className="mb-4" key={index}>
                  <Link href={item.href} className=" hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <div>
            <h2 className="mb-6 text-xl font-semibold text-stablesBrown/60">
              Products
            </h2>
            <ul className="text-stablesYellow">
              {footerSection.products.map((item, index) => (
                <li className="mb-4" key={index}>
                  <Link href={item.href} className=" hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
          <div>
            <h2 className="mb-6 text-xl font-semibold text-stablesBrown/60">
              Community
            </h2>
            <ul className="text-stablesYellow">
              {footerSection.community.map((item, index) => (
                <li className="mb-4" key={index}>
                  <Link href={item.href}
                    className=" hover:underline flex flex-row"
                  >
                    {item.icon && (
                      <Image
                        loader={simpleIconLoader}
                        src={item.icon}
                        className="float-left inline mr-2 mt-1 h-[18px] w-[18px]" 
                        alt="{item.name}"
                        width={18}
                        height={18}
                        />
                    )}
                    {item.name}
                  </Link>
                </li>
              ))}
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
