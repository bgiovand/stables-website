import Head from "next/head"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { H1, H2, H3, H4 } from "@/components/Typography"
import Newsletter from "@/components/Newsletter"
import { Button } from "@/components/buttons"
import PopularCones from "@/components/PopularCones"

export default function Home() {
  return (
    <div className="bgTexture">
      <Head>
        <title>Stables</title>
        <meta name="description" content="Stables is The Cone Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <section className="max-w-max min-w-full bgTexture bg-stablesBlue">
          <Header className="text-stablesBrown" />
          <div className="px-10 py-0">
            <H1 title="Smoke Easy" className="p-0 m-0" />
            <div className="block">
              <Image
                src="/cone.svg"
                alt="Picture of the author"
                width={400}
                height={500}
                className="mx-auto m-10 bgTexture bg-stablesBlue"
              />

              {/* <Coney className="p-20 dev as" /> */}
            </div>
            <div className="flex justify-center pb-20">
              <p className="text-stablesBrown w-8/12 text-2xl font-light">
                {
                  "At Stables, we deliver an unparalleled experience, exceptional quality, and service that exceeds expectations. From inception to inhalation, we ensure the highest quality product at a price point that allows you to stay competitive."
                }
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 pb-24 bg-stablesBrown/40 bgTexture">
          <H1 title="Popular Cones" />
          <PopularCones />

          <div className="relative my-10"></div>
          <Button icon="→" iconPosition="right">
            All Products
          </Button>
        </section>

        <section className="py-10 pb-24 bg-stablesYellow bgTexture">
          <H1 title="The Filter" className="mt-0 pt-0" />
          <H2
            title="A Cannabis Industry Newsletter"
            className="mb-5 text-stablesBrown"
          />
          <p className="font-light text-center mb-8 text-stablesBrown text-xl">
            {
              "Get industry hot takes, news, and analysis delivered to your inbox."
            }
          </p>
          <Newsletter className="block w-10/12 md:w-8/12 lg:w-4/12 mx-auto" />
        </section>

        {/* <section className="py-40 bg-gray-200 bgTexture">
          <div className="mx-auto px-4 text-[#EB2024] center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 208.4724"
              width={600}
              className="mx-auto w-full px-5 md:w-8/12 object-scale-down"
            >
              <g>
                <g>
                  <path
                    d="M3.466,107.3046c0-11.394,.7512-16.6405,5.4091-16.6405,4.2065,0,4.2065,2.3982,6.911,8.2457,7.0614,15.4414,16.8273,22.188,27.0437,22.188,10.3668,0,17.2783-5.6975,17.2783-13.6432,0-27.7345-51.9847-9.7449-51.9847-52.6218,0-17.5406,15.7759-32.3829,36.9599-32.3829,19.5318,0,30.0489,7.0466,30.0489,18.2906,0,8.9948-.3007,12.1431-4.0566,12.1431-3.4558,0-4.5071-1.4991-7.362-6.5966-6.3102-11.6931-11.4186-15.7414-20.1327-15.7414-9.0147,0-15.7754,5.8475-15.7754,13.6432,0,25.0363,53.9375,10.794,53.9375,51.2726,0,19.9388-15.0247,34.3311-40.2654,34.3311-20.5837,0-38.0118-8.3958-38.0118-22.488Z"
                    fill="currentcolor"
                  />
                  <path
                    d="M91.22,105.9555v-37.7794h-2.5542c-2.2536,0-4.2069-1.9492-4.2069-4.3484,0-2.2482,1.9534-4.1974,4.2069-4.1974h1.9529c7.813,0,10.9681-3.8974,15.9262-13.4922,2.1032-4.0483,7.3615-3.1483,7.3615,1.6491v11.8431h9.7659c2.4039,0,4.3573,1.9492,4.3573,4.1974,0,2.3992-1.9534,4.3484-4.3573,4.3484h-9.7659v35.6803c0,4.7974,1.6527,9.4458,7.9629,9.4458,6.1603,0,8.4139-5.8475,11.7193-4.6484,5.2583,1.9492-1.0519,21.1389-20.4333,21.1389-13.8225,0-21.9352-10.1939-21.9352-23.8372Z"
                    fill="currentcolor"
                  />
                  <path
                    d="M140.9317,109.8538c0-19.0397,16.9776-21.889,41.0165-21.889v-5.2465c0-6.8966-1.803-16.6415-8.8644-16.6415-8.7141,0-4.9581,18.4407-17.5785,18.4407-5.7093,0-9.7659-2.9992-9.7659-8.5458,0-9.4449,9.4657-17.3906,26.7435-17.3906,32.1522,0,32.1522,23.3871,32.1522,30.7338v17.5406c0,9.2948,3.3054,5.8465,4.9581,8.5448,2.1032,3.4483-1.6527,14.2423-12.921,14.2423-7.362,0-12.0195-3.5974-13.8225-10.794-2.5542,4.9474-9.3149,10.944-19.2312,10.944-13.5218,0-22.6869-7.9457-22.6869-19.9388Zm30.1993,6.8956c7.0614,0,10.8173-6.5956,10.8173-12.8932v-8.0948c-13.5218,0-19.9823,4.7974-19.9823,12.2931,0,6.1466,3.6061,8.6948,9.1651,8.6948Z"
                    fill="currentcolor"
                  />
                  <path
                    d="M216.996,121.0979V38.1923c0-7.7967-3.3054-7.1966-3.3054-9.8949,0-1.0501,.7512-2.0992,1.9534-2.2492l18.9305-3.4483c3.7559-.7491,5.2588,.9001,5.2588,3.4483v43.777c4.5071-6.5966,11.4181-11.244,21.6346-11.244,17.8791,0,31.2511,14.5423,31.2511,35.5312,0,21.288-13.5223,35.6803-31.2511,35.6803-15.0242,0-19.9823-7.6457-27.4942-7.6457-7.2117,0-8.7141,7.6457-13.3715,7.6457-3.0052,0-3.6061-2.5482-3.6061-8.6948Zm37.4105-2.6992c8.1132,0,15.0247-9.2948,15.0247-23.6872,0-14.2423-6.3106-23.6872-15.3249-23.6872-8.7141,0-14.273,9.5949-14.273,23.5371,0,14.5423,6.46,23.8372,14.5732,23.8372Z"
                    fill="currentcolor"
                  />
                  <path
                    d="M298.3347,127.0944c0-3.1483,3.3054-2.8483,3.3054-10.644V38.1923c0-7.7967-3.3054-7.1966-3.3054-9.8949,0-1.0501,.7512-1.9492,1.9534-2.2492,1.9529-.3,14.7236-2.6983,18.9305-3.4483,3.9063-.5991,5.2588,.9001,5.2588,3.4483V116.4504c0,7.7957,3.3054,7.4957,3.3054,10.644,0,1.0491-.7517,1.4991-1.9534,1.4991h-25.5413c-1.0519,0-1.9534-.45-1.9534-1.4991Z"
                    fill="currentcolor"
                  />
                  <path
                    d="M332.2123,94.7115c0-20.6889,14.8744-36.1303,35.3072-36.1303,20.283,0,28.8467,13.9423,28.8467,27.4355,0,4.7974-2.2536,6.8956-8.4134,6.8956h-34.8567c2.7046,11.694,11.569,19.6398,24.7901,19.6398,11.569,0,14.1232-7.3457,17.5785-5.2475,5.7093,3.1483-4.2065,22.488-27.0437,22.488-21.1841,0-36.2088-14.2423-36.2088-35.0812Zm42.9699-12.4431c.4505-10.494-3.6061-16.1915-9.6156-16.1915-6.3106,0-13.0713,7.3457-13.2217,18.4407l22.8372-2.2492Z"
                    fill="currentcolor"
                  />
                </g>
                <g>
                  <path
                    d="M73.1153,206.9955c0-1.7227,1.8908-1.5582,1.8908-5.8243v-42.2488c0-2.2153-.9864-3.6099-3.124-3.6099h-2.7952c-5.1793,0-7.3169,9.5165-11.099,9.5165-1.3976,0-1.8908-1.1488-1.7264-2.3789l1.3976-9.681c.2468-1.8863,1.1513-2.3789,2.6309-2.3789h42.1761c1.4796,0,2.384,.4926,2.6309,2.3789,.4932,3.3641,1.2332,8.1219,1.3976,9.681,.2464,1.2301-.3288,2.3789-1.7264,2.3789-3.7821,0-5.9198-9.5165-11.099-9.5165h-2.7952c-2.1377,0-3.124,1.3946-3.124,3.6099v42.2488c0,4.2661,1.8908,4.1016,1.8908,5.8243,0,.5749-.4932,.8207-1.0688,.8207h-14.3875c-.5756,0-1.0688-.2458-1.0688-.8207Z"
                    fill="currentcolor"
                  />
                  <path
                    d="M108.6772,206.9955c0-1.7227,1.8908-1.5582,1.8908-5.8243v-44.136c0-4.2661-1.8908-4.1016-1.8908-5.8243,0-.5749,.4932-.8207,1.0688-.8207h14.3875c.5756,0,1.0688,.2458,1.0688,.8207,0,1.7227-1.8908,1.5582-1.8908,5.8243v17.9664h24.664v-17.9664c0-4.2661-1.8908-4.1016-1.8908-5.8243,0-.5749,.4932-.8207,1.0688-.8207h14.305c.6581,0,1.1513,.2458,1.1513,.8207,0,1.7227-1.8908,1.5582-1.8908,5.8243v44.136c0,4.2661,1.8908,4.1016,1.8908,5.8243,0,.5749-.4932,.8207-1.1513,.8207h-14.305c-.5756,0-1.0688-.2458-1.0688-.8207,0-1.7227,1.8908-1.5582,1.8908-5.8243v-21.166h-24.664v21.166c0,4.2661,1.8908,4.1016,1.8908,5.8243,0,.5749-.4932,.8207-1.0688,.8207h-14.3875c-.5756,0-1.0688-.2458-1.0688-.8207Z"
                    fill="currentcolor"
                  />
                  <path
                    d="M167.8095,206.9955c0-1.7227,1.8089-1.5582,1.8089-5.8243v-44.136c0-4.2661-1.8089-4.1016-1.8089-5.8243,0-.5749,.4112-.8207,1.0688-.8207h14.3055c.5752,0,1.0688,.2458,1.0688,.8207,0,1.7227-1.8089,1.5582-1.8089,5.8243v44.136c0,4.2661,1.8089,4.1016,1.8089,5.8243,0,.5749-.4937,.8207-1.0688,.8207h-14.3055c-.6576,0-1.0688-.2458-1.0688-.8207Z"
                    fill="currentcolor"
                  />
                  <path
                    d="M188.7894,206.9955c0-1.804,2.4665-1.6404,2.4665-6.1524v-43.8079c0-4.2661-2.4665-4.1016-2.4665-5.8243,0-.5749,.4932-.8207,1.0688-.8207h10.9342c3.2065,0,3.6177,.9843,5.3441,3.2818,.822,1.2301,27.6237,39.5418,27.6237,39.5418v-35.9329c0-4.4297-2.4665-4.3474-2.4665-6.0701,0-.5749,.4112-.8207,1.2332-.8207h7.3994c.822,0,1.3157,.2458,1.3157,.8207,0,1.7227-2.5489,1.6404-2.5489,6.0701v46.6794c0,2.3789-1.562,3.8558-4.0285,3.8558h-2.3021c-2.9596,0-4.2748-1.5591-5.4261-3.1173-1.3976-2.0508-23.102-31.9126-30.6658-42.331v38.4753c0,4.5119,2.4665,4.3484,2.4665,6.1524,0,.5749-.4932,.8207-1.2332,.8207h-7.4813c-.74,0-1.2332-.2458-1.2332-.8207Z"
                    fill="currentcolor"
                  />
                  <path
                    d="M244.173,180.0052c0-17.227,12.2498-30.2712,29.3506-30.2712,7.3169,0,8.797,1.805,12.8255,1.805,2.5484,0,2.9596-1.1488,4.7685-1.1488,1.4796,0,2.0552,.5739,2.3016,2.3789,.4937,3.7735,1.3981,9.7623,1.7269,11.8954,.3288,2.2153-.9869,3.1996-2.4665,3.1996-5.4261,0-5.0973-13.1254-18.0052-13.1254-9.619,0-17.0183,10.2539-17.0183,23.1345,0,14.2742,9.1258,24.9385,20.3073,24.9385,2.2196,0,4.1929-.3281,5.9193-.9843v-16.1615c0-4.2661-1.8089-4.0193-1.8089-5.8243,0-.4926,.4932-.8207,1.0688-.8207h14.3055c.6576,0,1.0683,.3281,1.0683,.8207,0,1.805-1.8084,1.5582-1.8084,5.8243v11.485c0,3.036-6.1661,11.3214-21.7044,11.3214-16.9364,0-30.8307-10.5007-30.8307-28.4672Z"
                    fill="currentcolor"
                  />
                  <path
                    d="M301.448,196.1667c0-6.2346,.4108-9.1061,2.9596-9.1061,2.3021,0,2.3021,1.3133,3.7816,4.5119,3.8641,8.4499,9.2082,12.1421,14.7987,12.1421,5.6725,0,9.4546-3.1173,9.4546-7.4657,0-15.1772-28.4462-5.3326-28.4462-28.7953,0-9.5978,8.6326-17.7196,20.2248-17.7196,10.6878,0,16.4427,3.8558,16.4427,10.0081,0,4.9223-.1644,6.645-2.2196,6.645-1.8913,0-2.4665-.8197-4.0285-3.609-3.4533-6.3992-6.2486-8.6145-11.0171-8.6145-4.9324,0-8.6321,3.1996-8.6321,7.4657,0,13.7003,29.5145,5.9065,29.5145,28.0568,0,10.9111-8.2213,18.7862-22.0332,18.7862-11.2634,0-20.8-4.5942-20.8-12.3057Z"
                    fill="currentcolor"
                  />
                </g>
                <line
                  y1="3.4724"
                  x2="400"
                  y2="3.4724"
                  fill="none"
                  stroke="currentcolor"
                  strokeMiterlimit="10"
                  strokeWidth="6.9447"
                />
                <line
                  y1="153.9319"
                  x2="50.3744"
                  y2="153.9319"
                  fill="none"
                  stroke="currentcolor"
                  strokeMiterlimit="10"
                  strokeWidth="6.9447"
                />
                <line
                  x1="346.3172"
                  y1="153.9319"
                  x2="400"
                  y2="153.9319"
                  fill="none"
                  stroke="currentcolor"
                  strokeMiterlimit="10"
                  strokeWidth="6.9447"
                />
              </g>
            </svg>
            <H4 title="The Merchandise" className="text-black/80 mt-10 mb-0" />
            <p className="text-black/30">Coming Soon...</p>
            <Image
              src="/merch/hat.png"
              alt="Things"
              width={200}
              height={200}
              className="mx-auto mb-20 mt-10"
            />
            <div className="grid md:grid-cols-3 gap-0 mt-10">
              <Image
                src="/merch/shirt1.png"
                alt="Things"
                width={500}
                height={500}
                className="mix-blend-multiply"
              />
              <Image
                src="/merch/shirt2.png"
                alt="Things"
                width={500}
                height={500}
                className="mix-blend-multiply"
              />
              <Image
                src="/merch/shirt3.png"
                alt="Things"
                width={500}
                height={500}
                className="mix-blend-multiply"
              />
            </div>
          </div>
        </section> */}

        <Footer className="bg-gray-200" />
      </main>
    </div>
  )
}
