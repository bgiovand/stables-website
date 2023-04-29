import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"

export default function Terms() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stables</title>
        <meta name="description" content="Stables is The Cone Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="">
        <section className="max-w-max min-w-full ">
          <div className="px-20 py-10 prose prose-slate text-white mx-auto">
            <h1 className="text-white">Terms of Service</h1>
            <p>
              Welcome to our website, which showcases our paper cones products.
              Please read these terms of service carefully before using our
              website. By using our website, you agree to be bound by these
              terms of service.
            </p>
            <ol className="text-white marker:text-white">
              <li className="text-white">
                <h3 className="p-0 m-0 text-white">Personal Information:</h3> We
                are committed to protecting your privacy and personal
                information. We comply with the Personal Information Protection
                and Electronic Documents Act (PIPEDA) and any other applicable
                privacy laws. We collect only the personal information that is
                necessary for us to respond to your inquiries and to provide you
                with the best possible service. We do not share your personal
                information with third parties unless required by law.
              </li>
              <li className="text-white">
                <h3 className="p-0 m-0 text-white">Use of Cookies:</h3> Our
                website uses cookies to provide you with a better browsing
                experience. Cookies are small text files that are stored on your
                device when you visit our website. They help us to improve our
                website and to provide you with personalized content. You can
                disable cookies in your browser settings if you do not want us
                to use them.
              </li>
              <li className="text-white">
                <h3 className="p-0 m-0 text-white">Product Information:</h3> We
                make every effort to provide accurate and up-to-date information
                about our products on our website. However, we make no
                warranties or representations about the accuracy, reliability,
                or completeness of any information on our website.
              </li>
              <li className="text-white">
                <h3 className="p-0 m-0 text-white">Intellectual Property:</h3>{" "}
                All content on our website, including text, images, and logos,
                is the property of our company and is protected by copyright
                laws. You may not use any content from our website without our
                prior written consent.
              </li>
              <li className="text-white">
                <h3 className="p-0 m-0 text-white">Disclaimer of Liability:</h3>{" "}
                We are not liable for any damages or losses that may arise from
                your use of our website. We do not guarantee that our website
                will be free from errors, viruses, or other harmful components.
              </li>
              <li className="text-white">
                <h3 className="p-0 m-0 text-white">Changes to these Terms:</h3>{" "}
                We reserve the right to modify these terms of service at any
                time. Any changes will be posted on our website, and your
                continued use of our website after any such changes will
                constitute your acceptance of the revised terms.
              </li>
            </ol>
            <p>
              If you have any questions about these terms of service or our
              privacy policy, please contact us.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
