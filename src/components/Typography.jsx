import React from "react"
import clsx from "clsx"
import Balancer from "react-wrap-balancer"

const H1 = (props) => {
  return (
    <h1
      className={
        "text-stablesOrange text-7xl text-center font-semibold mb-2 pt-10 peer " +
        props.className
      }
    >
      <Balancer>{props.title}</Balancer>
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
      <Balancer>{props.title}</Balancer>
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
      <Balancer>{props.title}</Balancer>
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
      <Balancer>{props.title}</Balancer>
    </h4>
  )
}

export { H1, H2, H3, H4 }
