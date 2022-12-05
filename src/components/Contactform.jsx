import React, { useState } from "react"

export default function ContactUs() {
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  //   Form validation
  const [errors, setErrors] = useState({})

  //   Setting button text
  const [buttonText, setButtonText] = useState("Send")

  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)

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

//   const [form, setForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()

    let isValidForm = handleValidation()

    if (isValidForm) {
      setButtonText("Sending")
      const res = await fetch("/api/sendcontactform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
      })

      const { error } = await res.json()
      if (error) {
        console.log(error)
        setShowSuccessMessage(false)
        setShowFailureMessage(true)
        setButtonText("Send")

        // Reset form fields
        // setFullname("")
        // setEmail("")
        // setMessage("")
        // setSubject("")
        return
      }
      setShowSuccessMessage(true)
      setShowFailureMessage(false)
      setButtonText("Send")
      // Reset form fields
      setFullname("")
      setEmail("")
      setMessage("")
      setSubject("")
    }
    // console.log(fullname, email, subject, message)
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label htmlFor="fullname" className=" font-light mt-4 mb-1 ">
        Full name<span className="text-stablesOrange ">*</span>
      </label>
      <input
        type="text"
        value={fullname}
        onChange={(e) => {
          setFullname(e.target.value)
        }}
        name="fullname"
        className="text-black font-light "
      />
      {errors?.fullname && (
        <p className="text-stablesOrange">Fullname cannot be empty.</p>
      )}

      <label htmlFor="email" className=" font-light mt-4 mb-1 ">
        E-mail<span className="text-stablesOrange">*</span>
      </label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
        className="text-black font-light "
      />
      {errors?.email && (
        <p className="text-stablesOrange">Email cannot be empty.</p>
      )}

      <label htmlFor="subject" className=" font-light mt-4 mb-1 ">
        Subject<span className="text-stablesOrange">*</span>
      </label>
      <input
        type="text"
        name="subject"
        value={subject}
        onChange={(e) => {
          setSubject(e.target.value)
        }}
        className="text-black font-light "
      />
      {errors?.subject && (
        <p className="text-stablesOrange">Subject cannot be empty.</p>
      )}
      <label htmlFor="message" className=" font-light mt-4 mb-1 ">
        Message<span className="text-stablesOrange">*</span>
      </label>
      <textarea
        name="message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value)
        }}
        className="text-black font-light "
      ></textarea>
      {errors?.message && (
        <p className="text-stablesOrange">Message body cannot be empty.</p>
      )}
      <div className="flex flex-row items-center justify-start">
        <button
          type="submit"
          className="bg-stablesOrange text-white font-semibold px-4 py-2 mt-4 rounded-md hover:bg-stablesOrangeDark"
        >
          {buttonText}
        </button>
      </div>
      <div className="text-left">
        {showSuccessMessage && (
          <p className="text-green-500 font-semibold text-sm my-2">
            {"Thanks for the message. We'll be in touch shortly!"}
          </p>
        )}
        {showFailureMessage && (
          <p className="text-stablesOrange">
            {"⚠️ Oops! Something went wrong, please try again."}
          </p>
        )}
      </div>
    </form>
  )
}
