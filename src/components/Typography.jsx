import React from "react"

const H1 = (props) => {
  return (
    <h1 className="text-7xl text-stablesOrange text-center font-semibold  mt-20 mb-2 pt-20">
      {props.title}
    </h1>
  )
}

const H2 = (props) => {
  return (
    <h2 className="text-stablesOrange text-6xl  text-center font-normal  mt-20 mb-10">
      {props.title}
    </h2>
  )
}

const H3 = (props) => {
  return (
    <h3 className="text-stablesYellow text-5xl  text-center font-normal mb-10">
      {props.title}
    </h3>
  )
}

export { H1, H2, H3 }
