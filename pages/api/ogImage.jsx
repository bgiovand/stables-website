import { ImageResponse } from "@vercel/og"
import { NextRequest } from "next/server"

export const config = {
  runtime: "experimental-edge",
}

const font = fetch(
  new URL("../../public/fonts/made-mellow-medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

export default async function handler(req) {
  const { searchParams } = req.nextUrl
  const title = searchParams.get("title") || "My Blog Post"
  const author = searchParams.get("author") || "Jane Doe"
  const image = searchParams.get("image") || ""

  const fontData = await font

  return new ImageResponse(
    (
      <div tw="flex flex-row items-center justify-center w-full h-full p-10">
        <div tw="flex flex-col items-center justify-center w-8/12 h-full">
          <h1 tw="text-6xl font-mellow font-medium">{title}</h1>
          {author}
        </div>
        <img
          src={image}
          tw="flex flex-col items-center justify-center w-4/12 h-full"
        />
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
