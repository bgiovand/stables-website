import React from "react"
import Image from "next/image"
import Link from "next/link"
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
    <section className="bg-stablesBrown/20 p-0 m-0 bgTexture pt-1 pb-20">
      <h3 className="text-stablesYellow text-5xl  text-center font-normal m-20 mb-10">
        Compatible Equipment
      </h3>
      <p className="font-semibold text-2xl w-8/12 text-center  my-5 m-auto">
        Universal compatibility with automation equipment.
      </p>
      <p className="font-light text-2xl w-9/12 text-center  my-5 m-auto">
        We have conducted extensive testing on the most frequently used
        equipment to ensure that your product lines are not disrupted.
      </p>
      <ul class="font-light grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto container mt-10">
        {compatibility.map((brand) => (
          <li key={brand.name} class="bg-black/10 py-10 px-5 rounded-2xl">
            <div class="flex flex-col w-full">
              <Link
                href={brand.link}
                target="_blank"
                rel="noopener noreferrer"
                class=""
              >
                <Image
                  src={"/brands/" + brand.logo}
                  alt={brand.name}
                  width={200}
                  height={50}
                  class="grayscale object-scale-down mx-auto mb-3 object-bottom h-12"
                />
                <span class="text-gray-100 sr-only">{brand.name}</span>
              </Link>
              <ul class="text-gray-100">
                {brand.models.map((model) => (
                  <li
                    key={model}
                    class="font-light text-gray-400 text-lg text-center"
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
        <Link href="/contact">Contact Us.</Link>
      </p>
      <div className="flex justify-center mx-auto">
        <div className="w-8/12">{/* <ContactForm></ContactForm> */}</div>
      </div>
    </section>
  )
}
