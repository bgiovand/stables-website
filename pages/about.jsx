import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import Link from "next/link"
import { H1, H2, H3, H4 } from "../src/components/Typography"

export default function About() {
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
    {
      name: "Procepack",
      logo: "procepack.png",
      link: "",
      description: "",
      models: ["Procepak"],
    },
    {
      name: "AutoCone",
      logo: "autocone.png",
      link: "",
      description: "",
      models: ["AutoCone"],
    },
  ]

  const certifications = [
    {
      name: "9001:2015",
      type: "ISO",
    },
    {
      name: "45001:2018",
      type: "ISO",
    },
    {
      name: "14001:2015",
      type: "ISO",
    },
    {
      name: "Good Manufacturing Practices",
      type: "GMP",
    },
  ]

  const team = [
    {
      name: "Brett Young",
      title: "CEO",
      image: "/brett.png",
      bio: "Brett Young is an accomplished Operations Executive and Automation Expert from the Food and Beverage and Cannabis industries. He holds 20 years of experience driving profitability and operational cost reduction in many of his past roles. Over the last six years, Brett has operated his own companies, delivering key Automation Technology and Consulting Services to the Food and Beverage and Cannabis Industry. Brett’s Cannabis portfolio includes over 15 million in turnkey Automaton Lines sold and installed, including a few Pre-Roll Operations that resulted in more than 30 million joints filled and sold to the provinces. Brett prides himself on Lean Management, Customer Services, Project Management and Execution. Brett’s passion outside of the office is the Outdoors, Growing and consuming Cannabis, Cottaging and Fishing trips, especially Fall Musky.",
    },
    {
      name: "Tyler Kibler",
      title: "COO",
      image: "/tyler.png",
      bio: "Tyler Kibler is an accomplished inventor, trailblazer, collaborator, innovator, and farmer. Focused on building a self-sustaining, soil-enriching licensed hemp farmstead, Kibler’s passion is Cannabis. Since his first cannabis invention in 2016,he’s never looked back. Today he holds an array of cannabis-related patents and launched first-to-market products in Canada that have helped shaped the industry and enriched the lives of many consumers. Tyler's approach is always client first, whether an end-user or process integrator, an internal collaborator or external customer, his focus is their focus. Having scaled multiple Licensed Producers to manufacture over 1 million pre-rolls per month each, he’s a knowledge powerhouse when it comes to making the perfect pre-roll at scale. From Dog Walkers to Cannagars, and dried flower to terpene-enriched extract pre-rolls he’s a true pre-roll professional. He is happiest with his wife, Annaliese, sharing a fine pre-roll in their hot tub overlooking the farm, and watching the animals roam.",
    },
    {
      name: "Bruce Giovando",
      title: "CMO",
      image: "/bruce.png",
      bio: "Bruce has an extensive background in creative direction and entrepreneurship. Notable clients include: NASA, MTV, Red Bull, Rocky Mountain Bikes, Google and author/artist Douglas Coupland. Recently he worked with Tyler at Aurora Cannabis as the Director of Innovation and Best Practices. An early hire through the acqui-hire of his startup Canlio he brought many of Aurora’s initial product offerings to market, developed the first mobile app for medical patients (bringing in excess of 30 million revenue) and realized millions in cost savings applying lean manufacturing principals. A contributing member of the GS1 Cannabis work group, he improved the standards for packaging and barcoding in the medical and recreational cannabis space. Bruce is passionate about entrepreneurship, the outdoors, and technology.",
    },
  ]

  const values = [
    {
      name: "Quality",
      description:
        "We are focused on providing the highest quality pre-rolled cones and blunts to our Customers. In doing so, we are bringing the first high quality North American Hemp Blunts to market. Our focus on quality extends beyond the product, making sure we’re doing the best to meet your Customers needs.",
    },
    {
      name: "Service",
      description:
        "We see our product more as a service: we know the struggles you’re facing - we’ve lived them. Our job is done when your Customers have cone in hand. So, think of Stables more like a cone consultancy than simply a single commercial exchange.",
    },
    {
      name: "Fun",
      description:
        "Fun natured at heart. We strive for it to be a part of our process. After all we’re in the Cannabis business; it should be fun. You should be able to reflect your brands uniqueness in the Cones you sell. That is why we’re here to customize to your hearts content.",
    },
  ]

  const clients = [
    {
      name: "Alefia Health",
      logo: "alefia.svg",
      link: "https://aleafiahealth.com/",
    }
  ]

  const testimonials = [
    {
      name: "Brett Young",
      title: "CEO",
      company: "Alefia Health",
      image: "/brett.png",
      quote:
        "Their products are top notch and their customer service is second to none. I would highly recommend them to anyone looking for a reliable and quality supplier.",
    },
  ]

  const about = {
    title: "About",
    intro:
      "The world deserves a better cone... So, three Canadian Amigos got together to create something better for consumers and producers alike. Our expertise is unmatched - collectively bringing 20 years from the cannabis space. We are the namesake of Bert Kelly’s Jazz Stables - a speak easy in Chicago 1920’s and later in NYC in the 1930’s.",
    quality: {
      title: "Quality &amp; Automation",
      description: "",
    },
  }

  return (
    <div className="bgTexture">
      <Head>
        <title>Stables</title>
        <meta name="description" content="Stables is The Cone Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="max-w-max min-w-full md:max-w-lg">
        <section className="pb-0 mb-20">
          <div className="bg-stablesYellow pb-0 mb-20 bgTexture">
            <H1 title="Built by Coneisseurs" />
            <h2 className="text-center text-3xl font-normal text-stablesBrown">
              for Coneisseurs
            </h2>
            <Image
              className="m-auto -mt-20 z-0"
              src="/hand.svg"
              width={500}
              height={558}
              alt="hand"
            />
          </div>
        </section>

        <section className="bgTexture">
          <H2 title="The Principals" />
          <div className="container mx-auto">
            {team.map((principal, index) => (
              <div key={principal.name} className="mx-10 my-20">
                <div className="flex flex-col md:flex-row">
                  <div
                    className={`flex flex-col items-center justify-center w-full md:w-1/2 ${
                      index % 2 ? "md:order-2" : ""
                    }`}
                  >
                    <Image
                      src={
                        principal.image ? principal.image : "placeholder.png"
                      }
                      alt={principal.name}
                      width={200}
                      height={200}
                      className=""
                    />
                    <H3 title={principal.name} className=" mb-0 p-0" />
                    <H4
                      title={principal.title}
                      className=" mt-0 p-0 text-stablesBrown"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center w-full md:w-1/2 flex-2">
                    <p className=" text-lg font-light mt-2">{principal.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bgTexture bg-stablesBlue py-24 text-stablesBrown">
          <p className="container px-10 mx-auto text-4xl leading-snug">
            {about.intro}
          </p>
        </section>

        <section className="mx-auto py-20 ">
          <div className="container mx-auto">
            <H2 title="Our Values" className="" />
            <ul className="flex flex-col md:flex-row">
              {values.map((value) => (
                <li key={value.name} className="flex flex-col items-center m-5">
                  <H3 title={value.name} />
                  <p className="">{value.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto py-20">
          <H2 title="Clients & Testimonials" />
          <ul className="flex flex-col md:flex-row justify-center">
            {clients.map((client) => (
              <li key={client.name} className="flex flex-col items-center m-5">
                <Link href={client.link}>
                  <Image
                    src={client.logo ? "/brands/" + client.logo : ""}
                    alt={client.name}
                    width={240}
                    height={200}
                  />
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col md:flex-row justify-center">
            {testimonials.map((testimonial) => (
              <li
                key={testimonial.name}
                className="flex flex-col items-center m-5 md:w-1/3"
              >
                <p className="text-2xl italic font-light text-stablesBlue my-3 before:content-['❝'] relative before:absolute before:-top-2 before:-left-2 before:block before:-translate-x-0 before:scale-[4] before:text-stablesBrown before:-z-10 before:opacity-20">
                  {testimonial.quote}
                </p>
                <Image
                  src={
                    testimonial.image ? testimonial.image : "placeholder.png"
                  }
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full bg-stablesYellow"
                />
                <div className="m-2 text-center">
                  <span className="text-stablesYellow text-2xl block">
                    {testimonial.name}
                  </span>
                  <span className="">{testimonial.company}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto py-20 ">
          <H2 title="Quality &amp; Automation" />

          <div className="flex flex-col">
            <p className="font-semibold text-2xl w-8/12 text-center my-5 m-auto">
              Everyone says they have the best slow burn cones but, is it really
              true if said quality isn’t consistent. With our expertise in
              manufacturing we can assure you that our quality is the most
              consistent.
              {"Our cones and blunts don't canoe (burn unevenly)"}
            </p>
          </div>

          <h3 className="text-stablesYellow text-5xl  text-center font-normal m-20 mb-10">
            Certifications
          </h3>
          <div className="mx-auto">
            <ul className="flex flex-col md:flex-row justify-center align-middle">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="flex flex-col items-center justify-top text-center m-5 md:w-2/12 bg-black/10 h-max p-10 my-5 rounded-2xl max-h-max"
                >
                  {/* {cert.type} */}
                  <svg
                    data-name="ISO"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 70.125 58.091"
                    fill="currentColor"
                    className="flex-shrink-0 w-30 h-20 mb-5 align-middle  text-stablesBlue"
                  >
                    <polygon points="16.235 22.3539 16.235 16.134 0 16.134 0 22.3539 3.725 22.3539 3.725 35.6589 0 35.6589 0 41.8799 16.235 41.8799 16.235 35.6589 12.51 35.6589 12.51 22.3539 16.235 22.3539" />
                    <path d="M34.152,26.013c-1.004-.292-6.167-1.77-7.061-2.062-.894-.291-1.624-.712-1.624-1.24,0-.53,.821-1.095,2.482-1.095,5.236,0,7.752,3.23,7.752,3.23,0,0,.283,.376,.378,.512h5.052v-8.811h-5.424v1.604c-.413-.287-3.472-2.282-8.215-2.282-6.257,0-9.742,3.247-9.742,8.101s4.397,6.859,5.619,7.369c1.223,.512,6.003,1.861,8.046,2.501,2.043,.639,2.792,1.094,2.792,1.422,0,.33-.895,1.187-3.448,1.187-4.45,0-6.741-2.624-7.143-3.133v-.004c-.128-.171-.278-.374-.328-.45-.059-.088-.197-.284-.292-.42h-5.051v9.409h5.671v-1.964c.66,.438,4.038,2.546,8.091,2.546,4.525,0,10.29-1.97,10.29-8.12s-6.842-8.008-7.845-8.3" />
                    <path d="M56.397,15.782c-7.543,0-13.729,3.772-13.729,13.399s6.716,13.233,13.762,13.233,13.695-3.574,13.695-13.134-6.648-13.498-13.728-13.498m.066,20.213c-2.58,0-4.234-.595-4.234-6.848s1.223-6.914,4.333-6.914c1.885,0,4.168,.133,4.168,6.716s-1.687,7.046-4.267,7.046" />
                    <path d="M10.819,13.295c1.695-2.503,3.78-4.723,6.17-6.567,.967,.715,1.994,1.364,3.074,1.941-1.809,2.017-3.431,4.252-3.699,4.626h1.086c.651-.879,1.999-2.646,3.421-4.212,1.553,.763,3.204,1.389,4.928,1.864-.459,.973-.806,1.823-1.009,2.348h.943c.217-.539,.535-1.292,.931-2.123,2.198,.536,4.5,.838,6.856,.884v1.239h.876v-1.236c2.339-.017,4.629-.282,6.818-.784,.374,.79,.675,1.503,.883,2.02h.943c-.195-.503-.523-1.308-.955-2.232,1.753-.457,3.437-1.065,5.021-1.816,1.367,1.524,2.645,3.2,3.274,4.048h1.086c-.26-.363-1.797-2.483-3.544-4.453,1.201-.621,2.339-1.327,3.404-2.114,2.39,1.844,4.476,4.064,6.17,6.567h1.054C53.37,5.3,44.372,0,34.157,0S14.944,5.3,9.764,13.295h1.055Zm15.371-3.149c-1.64-.442-3.212-1.023-4.695-1.733,.202-.209,.404-.411,.603-.603,2.029-1.959,5.368-4.107,6.1-4.57,.594,.326,1.242,.601,1.931,.822-.535,.701-1.587,2.126-2.731,3.934-.446,.703-.852,1.443-1.208,2.15m7.33,1.034c-2.217-.045-4.386-.321-6.459-.813,.324-.634,.686-1.285,1.076-1.903,1.319-2.082,2.509-3.645,2.906-4.155,.791,.187,1.621,.305,2.477,.343v6.528Zm.876,.004V4.662c.844-.015,1.669-.104,2.46-.264,.454,.587,1.587,2.0941,2.836,4.066,.411,.65,.791,1.338,1.128,2.003-2.066,.456-4.222,.7-6.424,.717m7.302-.925c-.371-.741-.797-1.523-1.265-2.263-1.086-1.714-2.088-3.085-2.645-3.821,.732-.206,1.425-.473,2.06-.798,1.028,.659,4.011,2.627,5.884,4.433,.249,.239,.5,.495,.752,.761-1.513,.698-3.116,1.265-4.786,1.688m8.895-4.078c-1.028,.742-2.126,1.407-3.282,1.99-.322-.346-.649-.681-.97-.992-1.752-1.688-4.361-3.462-5.638-4.2939,.434-.28,.83-.592,1.184-.931,3.164,.904,6.1,2.35,8.706,4.227M34.157,.876c2.313,0,4.561,.282,6.713,.81-1.633,1.326-4.08,2.105-6.713,2.105-2.643,0-5.083-.776-6.715-2.104,2.154-.529,4.402-.811,6.715-.811m-7.73,1.078c.288,.276,.604,.534,.945,.772-1.158,.746-4.009,2.647-5.882,4.453-.27,.26-.542,.537-.813,.824-1.036-.543-2.024-1.151-2.954-1.822,2.605-1.877,5.541-3.323,8.704-4.227" />
                    <path d="M57.499,44.796c-1.66,2.451-3.693,4.63-6.02,6.449-1.108-.833-2.298-1.578-3.556-2.228,1.516-1.71,2.873-3.531,3.376-4.221h-1.09c-.673,.899-1.85,2.421-3.101,3.8181-1.585-.7531-3.267-1.361-5.021-1.817,.37-.795,.663-1.498,.863-2.001h-.947c-.2,.4901-.466,1.111-.787,1.789-2.188-.5-4.478-.767-6.819-.784v-1.005h-.876v1.009c-2.357,.047-4.66,.346-6.856,.883-.343-.718-.627-1.377-.837-1.892h-.946c.208,.527,.521,1.275,.916,2.116-1.722,.476-3.374,1.099-4.928,1.864-1.305-1.439-2.548-3.046-3.247-3.98h-1.09c.519,.712,1.953,2.636,3.531,4.395-1.137,.609-2.216,1.295-3.227,2.054-2.326-1.819-4.36-3.998-6.019-6.449h-1.052c5.18,7.995,14.178,13.295,24.392,13.295s19.213-5.3,24.393-13.295h-1.052Zm-15.8,2.8051c1.67,.424,3.274,.989,4.787,1.688-.252,.265-.504,.522-.752,.763-1.868,1.8-4.843,3.762-5.877,4.426-.636-.325-1.329-.593-2.064-.799,.558-.737,1.557-2.105,2.64-3.814,.47-.742,.895-1.523,1.266-2.264m-7.302-.924c2.203,.016,4.359,.259,6.424,.717-.338,.664-.716,1.353-1.128,2.002-1.247,1.97-2.379,3.475-2.834,4.062-.788-.156-1.614-.245-2.462-.259v-6.522Zm-.876,.005v6.527c-.859,.038-1.691,.153-2.481,.338-.399-.513-1.585-2.071-2.902-4.151-.391-.617-.753-1.27-1.077-1.905,2.072-.489,4.24-.765,6.46-.809m-7.332,1.031c.358,.709,.764,1.447,1.209,2.152,1.145,1.806,2.194,3.231,2.73,3.933-.69,.218-1.337,.494-1.931,.822-.734-.464-4.07-2.613-6.099-4.568-.199-.193-.4-.395-.602-.605,1.482-.711,3.054-1.29,4.693-1.7339m-8.624,4.082c.976-.717,2.017-1.365,3.112-1.938,.27,.287,.544,.564,.813,.825,1.873,1.806,4.724,3.705,5.882,4.451-.412,.289-.789,.607-1.123,.951-3.159-.926-6.088-2.391-8.684-4.289m16.593,5.42c-2.388,0-4.707-.299-6.923-.862,1.618-1.421,4.187-2.283,6.923-2.283,2.733,0,5.305,.863,6.923,2.283-2.216,.563-4.535,.862-6.923,.862m7.909-1.131c-.398-.41-.851-.783-1.358-1.113,1.28-.833,3.883-2.603,5.632-4.289,.323-.312,.648-.647,.972-.993,1.214,.614,2.365,1.317,3.439,2.106-2.596,1.898-5.526,3.363-8.685,4.289" />
                  </svg>
                  <span className="text-2xl font-semibold text-gray-100">
                    {cert.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

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
          <H4 title="Don't see your equipment?" />
          <p className="text-gray-100 text-lg text-center">
            {"We're constantly adding new equipment to our compatibility list. If you don't see your equipment and would like to see it added, please contact us."}
          </p>
          <Link href="/contact?subject=Equipment Validation" className="text-center">
            Contact us
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}
