import React, { useState } from "react"

const Newsletter = (props) => {
  const [mail, setMail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const load = async (response) => {
    const data = await response.json()
    setLoading(false)
    if (data.error) {
      setError(data.error)
    } else {
      setSuccess("You're in! We'll keep you posted.")
    }
  }

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const subscribe = async (event) => {
    event.preventDefault()
    if (!validateEmail(mail)) {
      setError("Please enter a valid email address.")
      return
    }
    setLoading(true)
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: "https://getstables.com",
        },
        body: JSON.stringify({ email: mail }),
      })
      await load(response)
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
  }

  return (
    <div className={props.className}>
      <form className="flex flex-row" onSubmit={subscribe}>
        <input
          onChange={(e) => {
            setMail(e.target.value)
          }}
          type="email"
          placeholder={props.placeholder ? props.placeholder : "Your Email"}
          className="w-full rounded-md text-black rounded-r-none outline-none border-white border-2 place-items-stretch"
        />
        <button
          type="submit"
          className={`bg-stablesOrange text-white px-5 py-2 rounded-md -ml-1 border-white border-2 ${
            loading ? "btn-disabled loading" : "btn-primary"
          }`}
        >
          {"Subscribe*"}
        </button>
      </form>
      {error && (
        <div className="text-xs text-red-500 font-light mt-2">{error}</div>
      )}
      {success && (
        <div className="text-xs text-green-500 font-light mt-2">{success}</div>
      )}
      <div className="text-xs text-gray-500 font-light mt-2">
        {"*We care about your privacy. No spam, ever."}
      </div>
    </div>
  )
}

export default Newsletter
