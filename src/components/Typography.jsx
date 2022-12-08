import React from "react"
import clsx from "clsx"

const H1 = (props) => {
  return (
    <h1
      className={
        "text-stablesOrange text-7xl text-center font-semibold mb-2 pt-10 peer " +
        props.className
      }
      clsx={[
        "mb-2 pt-10 peer",
        "text-stablesOrange text-7xl text-center font-semibold",
        props.className,
      ]}
    >
      {props.title}
    </h1>
  )
}

const H2 = (props) => {
  return (
    <h2
      className={
        "text-stablesOrange text-6xl text-center font-normal mb-5 peer-first:text-3xl " +
        props.className
      }
    >
      {props.title}
    </h2>
  )
}

const H3 = (props) => {
  return (
    <h3
      className={
        "text-stablesYellow text-5xl text-center font-normal mb-5 " +
        props.className
      }
    >
      {props.title}
    </h3>
  )
}

const H4 = (props) => {
  return (
    <h4
      className={
        "text-stablesOrange text-4xl  text-center font-normal mb-5 " +
        props.className
      }
    >
      {props.title}
    </h4>
  )
}

export { H1, H2, H3, H4 }
