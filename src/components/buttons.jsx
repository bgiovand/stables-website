import React from "react"
import Link from "next/link"

const Button = (props) => {

  return (
    <div className="mx-auto flex absolute text-center left-[50%] transform -translate-x-1/2">
      <Link
        href="/product"
        className={
          "flex flex-col " +
          "bg-stablesBlue/10 hover:bg-stablesBlue/20 text-stablesBlue after:text-stablesBlue/40 hover:after:text-stablesBlue/80 " +
          "pr-6 pl-12 py-3 after:translate-x-5 hover:after:translate-x-3 after:-translate-y-1/2 " +
          "rounded-full transition-all after:transition-all bg-opacity-20 after:absolute after:right-0 after:top-1/2 after:text-2xl after:font-bold after:rotate-40" +
          ` after:content-['${props.icon}']`
        }
      >
        {props.children}
      </Link>
    </div>
  )
}

export { Button }
