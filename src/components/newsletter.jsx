import { useState } from "react"
import { H1, H2, H3 } from "./Typography"

const Newsletter = (props) => {
  const [mail, setMail] = useState(null)
  const [loading, setLoading] = useState(false)

  const subscribe = () => {
    setLoading(true)
    fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: mail }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        if (data.error) {
          alert(data.error)
        } else {
          alert("You're in! We'll keep you posted.")
        }
      })
      .catch((err) => {
        setLoading(false)
        alert(err)
      })
  }

  return (
    <div className={"mx-auto text-center w-full" + props.className}>
      <div className="mx-auto w-full">
        <form>
          <input
            onChange={(e) => {
              setMail(e.target.value)
            }}
            type="email"
            placeholder={props.placeholder ? props.placeholder : "Your Email"}
            className="input input-primary rounded-md text-black rounded-r-none outline-none border-none"
          />
          <button
            onClick={subscribe}
            className={`bg-stablesOrange text-white px-5 py-2 rounded-md rounded-l-none ml-0 pl-6 border-stablesOrange border-1
            ${loading ? "btn-disabled loading" : "btn-primary"}`}
          >
            {"Subscribe"}
          </button>
        </form>
        <div className="text-xs text-gray-500 font-light mt-2">
          {"*We care about your privacy. No spam, ever."}
        </div>
      </div>
    </div>
  )
}

export default Newsletter
