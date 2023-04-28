import React from "react"
import Link from "next/link"

const Button = ({ icon, children }) => {
  return (
    <div className="mx-auto flex absolute text-center left-[50%] transform -translate-x-1/2">
      <Link
        href="/product"
        className="flex items-center bg-stablesBlue/10 hover:bg-stablesBlue/20 text-stablesBlue rounded-full px-6 py-3 transition-all bg-opacity-20"
      >
        <span>{children}</span>
        <span className="ml-4">{icon}</span>
      </Link>
    </div>
  )
}

export { Button }
