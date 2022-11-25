import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stables</title>
        <meta name="description" content="Stables is The Cone Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 301.7552 70.3059"
            className="w-full h-full fill-stablesOrange hidden"
          >
            <path d="M0,55.5816c0-7.4608,.4905-10.896,3.5335-10.896,2.749,0,2.749,1.5706,4.5153,5.3989,4.6136,10.1107,10.9943,14.5277,17.6698,14.5277,6.7729,0,11.2882-3.73,11.2882-8.9323,0-18.1603-33.9638-6.3807-33.9638-34.4551C3.043,9.7391,13.3494,.0207,27.1909,.0207,39.9523,.0207,46.8235,4.6351,46.8235,11.9968c0,5.8902-.1965,7.9513-2.6507,7.9513-2.2576,0-2.9447-.9818-4.8101-4.3188-4.1222-7.6573-7.46-10.3072-13.1537-10.3072-5.8894,0-10.3072,3.8283-10.3072,8.9323,0,16.394,35.2405,7.0677,35.2405,33.5724,0,13.0554-9.8159,22.479-26.3073,22.479-13.4484,0-24.835-5.4971-24.835-14.7243Z" />
            <path d="M57.654,54.698V29.9605h-1.6689c-1.4723,0-2.749-1.2758-2.749-2.8464,0-1.4723,1.2766-2.7482,2.749-2.7482h1.2758c5.1049,0,7.166-2.5524,10.4055-8.8349,1.3741-2.6507,4.8101-2.0619,4.8101,1.0793v7.7556h6.3807c1.5706,0,2.8464,1.2758,2.8464,2.7482,0,1.5706-1.2758,2.8464-2.8464,2.8464h-6.3807v23.3634c0,3.1412,1.0801,6.1842,5.2023,6.1842,4.0248,0,5.4971-3.8283,7.6565-3.043,3.436,1.2758-.687,13.8407-13.3494,13.8407-9.0314,0-14.332-6.6747-14.332-15.6078Z" />
            <path d="M90.4607,57.2505c0-12.4666,11.0925-14.332,26.7986-14.332v-3.436c0-4.5153-1.1775-10.896-5.7919-10.896-5.6928,0-3.2387,12.0744-11.4848,12.0744-3.73,0-6.3807-1.9637-6.3807-5.5954,0-6.1842,6.1842-11.3873,17.4732-11.3873,21.0067,0,21.0067,15.3139,21.0067,20.1239v11.4848c0,6.0859,2.1602,3.8283,3.2395,5.5954,1.3741,2.2576-1.0793,9.3254-8.4418,9.3254-4.8101,0-7.853-2.3559-9.0314-7.0677-1.6689,3.2395-6.0859,7.166-12.5649,7.166-8.8341,0-14.8225-5.2023-14.8225-13.0554Zm19.7309,4.5153c4.6136,0,7.0677-4.3196,7.0677-8.4418v-5.3014c-8.8349,0-13.0554,3.1412-13.0554,8.0496,0,4.0248,2.3559,5.6937,5.9876,5.6937Z" />
            <path d="M140.477,64.6122V10.3279c0-5.1041-2.1594-4.7118-2.1594-6.4782,0-.6879,.4905-1.3749,1.2766-1.4723L151.9626,.1189c2.4534-.4905,3.436,.5896,3.436,2.2585V31.0406c2.9447-4.3196,7.46-7.3625,14.1338-7.3625,11.6821,0,20.4196,9.5219,20.4196,23.2652,0,13.939-8.8357,23.3626-20.4196,23.3626-9.8151,0-13.0546-5.0066-17.9629-5.0066-4.7118,0-5.6928,5.0066-8.7358,5.0066-1.9637,0-2.3567-1.6689-2.3567-5.6937Zm24.4419-1.7671c5.3014,0,9.8167-6.0859,9.8167-15.5096,0-9.3254-4.1222-15.5096-10.0116-15.5096-5.6945,0-9.3254,6.2824-9.3254,15.4113,0,9.5219,4.2205,15.6078,9.5203,15.6078Z" />
            <path d="M193.9498,68.5387c0-2.0611,2.1586-1.8646,2.1586-6.9695V10.3279c0-5.1041-2.1586-4.7118-2.1586-6.4782,0-.6879,.4897-1.2766,1.2758-1.4723,1.2758-.1965,9.6202-1.7671,12.3683-2.2585,2.5516-.3922,3.436,.5896,3.436,2.2585V61.5692c0,5.1049,2.1586,4.9084,2.1586,6.9695,0,.687-.4897,.9818-1.2758,.9818h-16.6871c-.6879,0-1.2758-.2948-1.2758-.9818Z" />
            <path d="M216.4002,47.3355c0-13.5459,9.7185-23.6574,23.0678-23.6574,13.2527,0,18.8473,9.1297,18.8473,17.9646,0,3.1412-1.4723,4.5153-5.4963,4.5153h-22.7747c1.7671,7.6565,7.5583,12.8589,16.1974,12.8589,7.5583,0,9.2271-4.8093,11.484-3.4352,3.7308,2.0611-2.7482,14.7243-17.6681,14.7243-13.8423,0-23.6574-9.3254-23.6574-22.9704Zm28.0744-8.147c.2948-6.872-2.3567-10.602-6.2824-10.602-4.1222,0-8.5409,4.8101-8.6392,12.0744l14.9216-1.4723Z" />
            <path d="M262.9797,60.2934c0-5.6937,.8844-7.6565,2.8481-7.6565,1.7671,0,2.4534,.1957,4.024,4.024,1.9637,4.7118,6.3807,8.4426,12.1718,8.4426,3.5343,0,5.7927-1.5706,5.7927-4.3196,0-8.7366-22.9712-5.0058-22.9712-21.792,0-8.7366,6.5772-15.3139,18.2594-15.3139,8.2445,0,16.2941,3.8291,16.2941,8.6384,0,5.3014-.981,6.7738-2.5516,6.7738-2.455,0-3.1412-1.6689-4.7118-4.3196-2.2585-3.6317-5.0066-5.9876-9.5219-5.9876-2.8464,0-4.9084,1.7671-4.9084,4.5153,0,8.2461,24.0505,6.6755,24.0505,20.3197,0,9.2271-7.7548,16.6879-19.3386,16.6879-9.915,0-19.4369-3.6317-19.4369-10.0124Z" />
          </svg>
        </h1>

        

        <section className="max-w-max min-w-full">
          <h2 className="text-stablesOrange text-7xl font-ultralight text-center">
            Smoke Easy
          </h2>
        </section>

        <section class="md:m-20">
          <p class="font-normal text-3xl mx-0 md:mx-5 md:text-5xl leading-tight font-mellow">
            In Cannabis, the Smokers are represented by two separate, yet
            equally important groups. The Licensed Producers who grow the crop
            and the Cone Manufacturers, who provide the papers. These are their
            stories…
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 238.83 72.53"
            className="fill-stablesOrange w-1/4 mx-auto my-20"
          >
            <path
              class="cls-1"
              d="M0,71.85c0-.8,1.27-1.03,1.27-3V3.38C1.27,1.41,0,1.18,0,.38,0,.11,.33,0,.77,0H15.91c11.66,0,22.1,49.74,22.1,58.93s-10.44,13.3-22.1,13.3H.77c-.44,0-.77-.11-.77-.38Zm15.8-3.12c5.58,0,8.51-4.64,8.51-9.8S21.38,3.5,15.8,3.5c-1.44,0-2.04,.61-2.04,1.67v61.9c0,1.06,.61,1.67,2.04,1.67Z"
            />
            <path
              class="cls-1"
              d="M40.96,62.5V3.38c0-1.98-1.22-2.2-1.22-3,0-.27,.28-.38,.72-.38h13.48c.39,0,.72,.11,.72,.38,0,.8-1.22,1.03-1.22,3V62.5c0,4.45,3.04,6.38,7.57,6.38s6.96-2.62,6.96-6.38V3.19c0-2.05-1.21-2.01-1.21-2.81,0-.27,.33-.38,.83-.38h5.86c.55,0,.83,.11,.83,.38,0,.8-1.22,.76-1.22,2.81V62.5c0,4.94-3.98,10.03-14.81,10.03s-17.29-4.45-17.29-10.03Z"
            />
            <path
              class="cls-1"
              d="M77.15,71.85c0-.8,1.22-.76,1.22-2.81V3.38c0-1.98-1.22-2.2-1.22-3,0-.27,.28-.38,.72-.38h9.06c2.32,0,3.26,.46,4.42,1.52l15.14,60.19V3.19c0-2.05-1.27-2.01-1.27-2.81,0-.27,.33-.38,.83-.38h5.86c.55,0,.88,.11,.88,.38,0,.8-1.27,.76-1.27,2.81V70.44c0,1.1-1.05,1.79-2.71,1.79h-3.31c-2.38,0-3.48-.72-4.25-1.44-.88-.87-12.43-57.11-17.79-62.05v60.3c0,2.05,1.22,2.01,1.22,2.81,0,.27-.33,.38-.83,.38h-5.86c-.55,0-.83-.11-.83-.38Z"
            />
            <path
              class="cls-1"
              d="M126.05,71.85c0-.8,1.27-1.03,1.27-3V3.38c0-1.98-1.27-2.2-1.27-3,0-.27,.33-.38,.77-.38h15.14c11.66,0,22.1,49.74,22.1,58.93s-10.44,13.3-22.1,13.3h-15.14c-.44,0-.77-.11-.77-.38Zm15.8-3.12c5.58,0,8.51-4.64,8.51-9.8s-2.93-55.44-8.51-55.44c-1.44,0-2.04,.61-2.04,1.67v61.9c0,1.06,.61,1.67,2.04,1.67Z"
            />
            <path
              class="cls-1"
              d="M167.01,62.5V3.38c0-1.98-1.22-2.2-1.22-3,0-.27,.28-.38,.72-.38h13.48c.39,0,.72,.11,.72,.38,0,.8-1.22,1.03-1.22,3V62.5c0,4.45,3.04,6.38,7.57,6.38s6.96-2.62,6.96-6.38V3.19c0-2.05-1.22-2.01-1.22-2.81,0-.27,.33-.38,.83-.38h5.86c.55,0,.83,.11,.83,.38,0,.8-1.22,.76-1.22,2.81V62.5c0,4.94-3.98,10.03-14.81,10.03s-17.29-4.45-17.29-10.03Z"
            />
            <path
              class="cls-1"
              d="M203.2,71.85c0-.8,1.22-.76,1.22-2.81V3.38c0-1.98-1.22-2.2-1.22-3,0-.27,.28-.38,.72-.38h9.06c2.32,0,3.26,.46,4.42,1.52l15.14,60.19V3.19c0-2.05-1.27-2.01-1.27-2.81,0-.27,.33-.38,.83-.38h5.86c.55,0,.88,.11,.88,.38,0,.8-1.27,.76-1.27,2.81V70.44c0,1.1-1.05,1.79-2.71,1.79h-3.31c-2.38,0-3.48-.72-4.25-1.44-.88-.87-12.43-57.11-17.79-62.05v60.3c0,2.05,1.22,2.01,1.22,2.81,0,.27-.33,.38-.83,.38h-5.86c-.55,0-.83-.11-.83-.38Z"
            />
          </svg>
        </section>

        <section class="m-20">
          <h2 className={styles.title}>Sign up for THE FILTER</h2>
          <p className={styles.description}>
            A industry newsletter for the next generation of coneissieurs
          </p>
          <form className={styles.form} action="https" method="POST">
            <div class="mb-6">
              <label
                for="email-newsletter"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email Newsletter
              </label>
              <input
                type="email"
                id="email-newsletter"
                aria-describedby="Email address for newsletter"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your email"
                autoComplete="email"
                required
              />
              <p
                id="helper-text-explanation"
                class="mt-2 text-sm text-gray-500 dark:text-gray-400"
              >
                We’ll never share your details. Read our{" "}
                <Link
                  href="/privacy"
                  class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <div class="mb-6">
              <button
                type="button"
                class="text-white bg-stablesOrange hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"
              >
                Sign Up
              </button>
            </div>
          </form>
        </section>

        <section className={styles.grid}>
          <h2 className={styles.title}>About Us</h2>
          <p className={styles.description}>
            Exercitation incididunt occaecat deserunt deserunt. Aute cillum nisi
            cupidatat exercitation veniam proident deserunt laboris ad ex enim
            enim esse dolor voluptate. Occaecat excepteur pariatur consectetur
            proident in veniam aliquip commodo ipsum ex. Velit tempor laborum
            sunt esse duis aliquip et. Qui ad in do. Sunt officia consectetur
            fugiat. Consequat consequat anim reprehenderit. Laborum culpa ad
            aliquip est excepteur incididunt ex. Ut ex eu irure anim sint
            ullamco qui laboris. Reprehenderit consectetur esse aute ex duis sit
            officia magna sint consectetur excepteur pariatur cillum aliquip
            aliqua.
          </p>
        </section>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  )
}
