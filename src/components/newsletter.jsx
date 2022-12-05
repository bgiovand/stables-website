import { useState } from "react"
import { H1, H2, H3 } from "./Typography"

const Newsletter = () => {
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
    <section className="mx-auto text-center py-20">
      <H2 title="The Filter" />
      <H3 title="Email Newsletter" />
      <p className="text-gray-500 font-light">
        A industry newsletter for the next generation of coneissieurs
      </p>

      <div className="mt-5">
        <input
          onChange={(e) => {
            setMail(e.target.value)
          }}
          type="email"
          placeholder="Your email"
          className="input input-primary input-bordered rounded-md text-black"
        />
        <button
          onClick={subscribe}
          className={`bg-stablesOrange text-white px-5 py-2 rounded-md ml-2
            ${loading ? "btn-disabled loading" : "btn-primary"}`}
        >
          {"Subscribe"}
        </button>
        <div className="text-xs text-gray-500 font-light mt-2">
          {"*We care about your privacy. No spam, ever."}
        </div>
      </div>
    </section>
  )
}

export default Newsletter