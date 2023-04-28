import React, { useState } from "react"

const Newsletter = (props) => {
  const [mail, setMail] = useState("")
  const [loading, setLoading] = useState(true)

  const subscribe = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: mail }),
      })
      const data = await response.json()
      setLoading(false)
      if (data.error) {
        alert(data.error)
      } else {
        alert("You're in! We'll keep you posted.")
      }
    } catch (error) {
      setLoading(false)
      alert(error)
    }
  }

  return (
    <div className={props.className}>
      <form className="flex flex-row">
        <input
          onChange={(e) => {
            setMail(e.target.value)
          }}
          type="email"
          placeholder={props.placeholder ? props.placeholder : "Your Email"}
          className="w-full rounded-md text-black rounded-r-none outline-none border-white border-2 place-items-stretch"
        />
        <button
          onClick={subscribe}
          className={`bg-stablesOrange text-white px-5 py-2 rounded-md -ml-1 border-white border-2 ${
            loading ? "btn-disabled loading" : "btn-primary"
          }`}
        >
          {"Subscribe*"}
        </button>
      </form>
      <div className="text-xs text-gray-500 font-light mt-2">
        {"*We care about your privacy. No spam, ever."}
      </div>
    </div>
  )
}

export default Newsletter
