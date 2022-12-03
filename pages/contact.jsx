import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import { H1, H2 } from "../src/components/Typography"
import { useState } from "react"

export default function Contact() {
  // States for contact form fields
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  //   Form validation state
  const [errors, setErrors] = useState({})

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send")

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {}
    let isValid = true

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true
      isValid = false
    }
    if (email.length <= 0) {
      tempErrors["email"] = true
      isValid = false
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true
      isValid = false
    }
    if (message.length <= 0) {
      tempErrors["message"] = true
      isValid = false
    }

    setErrors({ ...tempErrors })
    console.log("errors", errors)
    return isValid
  }

  //   Handling form submit

  const handleSubmit = async (e) => {
    e.preventDefault()

    let isValidForm = handleValidation()

    if (isValidForm) {
      setButtonText("Sending")
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })

      const { error } = await res.json()
      if (error) {
        console.log(error)
        setShowSuccessMessage(false)
        setShowFailureMessage(true)
        setButtonText("Send")
        return
      }
      setShowSuccessMessage(true)
      setShowFailureMessage(false)
      setButtonText("Send")
    }
    console.log(fullname, email, subject, message)
  }

  return (
    <div className="bgTexture">
      <Head>
        <title>Stables</title>
        <meta name="description" content="Stables is The Cone Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="">
        <H1 title="Contact" />
        <H2 title="Get in touch" />

        <section className="">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <form className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <label for="name" className="text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  autoFocus={true}
                  className="bg-stablesBrown/20 border border-stablesBrown/80 rounded-md px-4 py-2 text-md text-white/80 focus:outline-none outline-0 focus:border-stablesOrange/80 leading-relaxed placeholder-gray-500 tracking-wider"
                />

                <label
                  for="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-stablesBrown/20 border border-stablesBrown/80 rounded-md px-4 py-2 text-md text-white/80 focus:outline-none focus:border-stablesOrange/80 leading-relaxed placeholder-gray-500 tracking-wider"
                />

                <label
                  for="message"
                  className="text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="bg-stablesBrown/20 border border-stablesBrown/80 rounded-md px-4 py-2 text-md text-white/80 focus:outline-none focus:border-stablesOrange/80 leading-relaxed placeholder-gray-500 tracking-wider"
                ></textarea>

                <button
                  type="submit"
                  className="flex flex-row items-center justify-center px-8 py-3 mt-5 text-2xl text-white bg-stablesOrange rounded-md hover:bg-stablesOrange/80 transition-all"
                >
                  Send
                </button>

                <p className="text-sm text-gray-500">
                  We&lsquo;ll never share your email with anyone else.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
