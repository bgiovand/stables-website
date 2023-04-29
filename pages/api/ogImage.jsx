/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { ImageResponse } from "@vercel/og"

export const config = {
  runtime: "edge",
}

const colors = {
  stablesOrange: "#F05A28",
  stablesBlue: "#C3E4D9",
  stablesYellow: "#EAEEB5",
  stablesBrown: "#603813",
  stablesBlack: "#1e1a16",
}

const font = fetch(
  new URL("../../public/fonts/made-mellow-medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

export default async function handler(req) {
  const { searchParams } = req.nextUrl
  const type = searchParams.get("type") || "default"
  const title = searchParams.get("title") || ""
  const author = searchParams.get("author") || ""
  const image = searchParams.get("image") || ""

  const fontData = await font

  return new ImageResponse(
    (
      <div tw={`flex flex-row items-center justify-center w-full h-full p-10 bg-[${colors.stablesBlack}] text-[${colors.stablesYellow}]`}>
        {type === "default" && "hello"}
        <div tw="flex flex-col items-center justify-center w-8/12 h-full">
          <h1
            tw={`text-6xl font-mellow font-medium text-[${colors.stablesOrange}]`}
          >
            {title}
          </h1>
          {"by " + author}
        </div>
        {image && (
          <img
            src={image}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Mellow",
          data: fontData,
          style: "medium",
        },
      ],
    }
  )
}
