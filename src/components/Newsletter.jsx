import { useState } from "react"

const Newsletter = (props) => {
  const [mail, setMail] = useState(null)
  const [loading, setLoading] = useState(false)

  const subscribe = () => {
    setLoading(true)
    fetch("/api/subscribe", {
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
    <div className={"flex" + props.className}>
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
          className={`bg-stablesOrange text-white px-5 py-2 rounded-md -ml-1 border-white border-2
            ${loading ? "btn-disabled loading" : "btn-primary"}`}
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
