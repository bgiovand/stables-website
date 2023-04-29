import React from "react";
import Image from "next/image";
import Link from "next/link";
import { H1, H2, H3, H4 } from "../../src/components/Typography"


export default function Compatible() {
    const compatibility = [
      {
        name: "Futurola",
        logo: "futurola.png",
        link: "https://futurola.com",
        description: "",
        models: ["Knockbox"],
      },
      {
        name: "STM",
        logo: "stm.png",
        link: "https://stmcanna.com/rocketbox-2-0-commercial-joint-rolling-machine/",
        description: "",
        models: ["STM RocketBox 2.0"],
      },
      {
        name: "Canapa",
        logo: "canapa.png",
        link: "https://www.canapasolutions.com/pre-roll-packaging-machine/",
        description: "",
        models: ["Juanaroll"],
      },
      {
        name: "PreRoll-Er",
        logo: "preroll-er.png",
        link: "https://preroll-er.com/#",
        description: "",
        models: ["PREROLL-ER 50", "PREROLL-ER 100", "PREROLL-ER 200"],
      },
      // {
      //   name: "Procepack",
      //   logo: "procepack.png",
      //   link: "",
      //   description: "",
      //   models: ["Procepak"],
      // },
      {
        name: "AutoCone",
        logo: "autocone.png",
        link: "https://www.autoconesystems.com",
        description: "",
        models: ["AutoCone"],
      },
    ]
    return (
    <section className="">

            <h3 className="text-stablesYellow text-5xl  text-center font-normal m-20 mb-10">
            Compatible Equipment
          </h3>
          <p className="font-semibold text-2xl w-8/12 text-center  my-5 m-auto">
            Universal compatibility with automation equipment.
          </p>
          <p className="font-light text-2xl w-8/12 text-center  my-5 m-auto">
            We’ve done rigorous testing on the most common equipment to make
            sure there’s no disruption to your product lines.
          </p>
          <ul className="font-light flex flex-col md:flex-row flex-3 flex-wrap mx-auto justify-center">
            {compatibility.map((brand) => (
              <li
                key={brand.name}
                className="flex flex-col md:flex-row mx-5 bg-black/10 h-max p-10 my-5 rounded-2xl max-h-max"
              >
                <div className="flex flex-col w-full">
                  <Link
                    href={brand.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <Image
                      src={"/brands/" + brand.logo}
                      alt={brand.name}
                      width={200}
                      height={50}
                      className="grayscale w-30 h-20 object-contain mx-auto mb-5"
                    />
                    <span className="text-gray-100 sr-only">{brand.name}</span>
                  </Link>
                  <ul className="text-gray-100">
                    {brand.models.map((model) => (
                      <li
                        key={model}
                        className="font-light text-gray-400 text-lg text-center"
                      >
                        {model}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
          <H4 title="Don't see your equipment?" className="pt-10" />
          <p className="text-gray-100 text-lg text-center container mx-auto">
            {
              "We're constantly adding new equipment to our compatibility list. If you don't see your equipment and would like to see it added, please "
            }
            <Link href="/contact">
              Contact Us.
            </Link>
          </p>
          <div className="flex justify-center mx-auto">
            <div className="w-8/12">
              {/* <ContactForm></ContactForm> */}
            </div>
          </div>
          </section>
    )
}
