import Head from "next/head"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { H1, H2, H3, H4 } from "@/components/Typography"

import React, { Suspense, useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  ContactShadows,
  Environment,
  useGLTF,
  OrbitControls,
} from "@react-three/drei"
import { HexColorPicker } from "react-colorful"
import { proxy, useSnapshot } from "valtio"
import Image from "next/image"
import Link from "next/link"

const items = {
  laces: "#eff6ff",
  mesh: "#3a4759",
  caps: "#1e3a8a",
  inner: "#93c5fd",
  sole: "#60a5fa",
  stripes: "#3b82f6",
  band: "#2563eb",
  patch: "#1d4ed8",
}

const simpleIconLoader = ({ src, color = "white" }) => {
  return `https://cdn.simpleicons.org/${src}/${color}`
}

const state = proxy({
  current: null,
  items,
})

function Cone() {
  const ref = useRef()
  const snap = useSnapshot(state)
  // Drei's useGLTF hook sets up draco automatically, that's how it differs from useLoader(GLTFLoader, url)
  // { nodes, materials } are extras that come from useLoader, these do not exist in threejs/GLTFLoader
  // nodes is a named collection of meshes, materials a named collection of materials
  const { nodes, materials } = useGLTF("/models/shoe-draco.glb")

  // Animate model
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20
    ref.current.rotation.x = Math.cos(t / 4) / 8
    ref.current.rotation.y = Math.sin(t / 4) / 8
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })

  // Cursor showing current color
  const [hovered, set] = useState(null)
  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
    const auto = `default`
    document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
      hovered ? cursor : auto
    )}'), auto`
  }, [hovered, snap.items])

  // Using the GLTFJSX output here to wire in app-state and hook up events
  return (
    <group
      ref={ref}
      dispose={null}
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onPointerDown={(e) => (
        e.stopPropagation(), (state.current = e.object.material.name)
      )}
    >
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={snap.items.laces}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={snap.items.mesh}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={snap.items.caps}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={snap.items.inner}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={snap.items.sole}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={snap.items.stripes}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={snap.items.band}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={snap.items.patch}
      />
    </group>
  )
}

function Picker() {
  const snap = useSnapshot(state)
  return (
    <div
      // style={{ display: snap.current ? "block" : "none" }}
      className="absolute float-right m-20 z-10 top-0 right-0"
    >
      <h1>{snap.current}</h1>
      <HexColorPicker
        className="picker"
        color={snap.items[snap.current]}
        onChange={(color) => (state.items[snap.current] = color)}
      />
    </div>
  )
}

export default function Custom() {
  const snap = useSnapshot(state)
  const items = Object.keys(snap.items)
  return (
    <>
      <Head>
        <title>Stables - Cone-figurator</title>
        <meta name="description" content="Build a custom cone " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={`bg-stablesBlue ${snap.current} bgTexture`}>
        <Image
          src="/colorwheel.svg"
          alt="Hemp"
          width={80}
          height={80}
          className="w-[120px] h-[120px] object-contain object-center rounded-full bg-gray-400 border-4 border-stablesBlue/80 mx-auto translate-y-[4em] -z-100"
        />
        <H1 title="Conefigurator" />
        <H3 title="Build your perfect cone" />

        <div className="flex flex-row ">
          <div className="flex flex-col w-9/12 h-screen relative">
            <div className="relative w-full h-full">
              <Canvas
                shadows
                dpr={[1, 2]}
                camera={{ position: [0, 0, 4], fov: 50 }}
                className="-mt-80 overflow-visible z-0"
              >
                <ambientLight intensity={0.7} />

                <spotLight
                  intensity={0.5}
                  angle={0.2}
                  penumbra={1}
                  position={[10, 15, 10]}
                  castShadow
                />

                <Suspense fallback={null}>
                  <Cone />
                  <Environment preset="city" />
                  <ContactShadows
                    rotation-x={Math.PI / 2}
                    position={[0, -0.8, 0]}
                    opacity={0.6}
                    width={10}
                    height={3}
                    blur={1.5}
                    far={0.8}
                  />
                </Suspense>

                <OrbitControls
                  minPolarAngle={Math.PI / 2}
                  maxPolarAngle={Math.PI / 2}
                  enableZoom={false}
                  enablePan={false}
                />
              </Canvas>
              <Picker />
            </div>
          </div>
          <div className="flex flex-col w-3/12">
            <div className="flex flex-row">
              <div className="flex flex-col w-1/2 ">
                <ul className="text-black">
                  {items.map((item, index) => (
                    <li
                      className={`group my-3 rounded-full p-2`}
                      key={index}
                      onClick={() => (state.current = item)}
                      style={{
                        backgroundColor:
                          state.current == item
                            ? "hsla(193, 100%, 0%, 0.1)"
                            : "transparent",
                      }}
                    >
                      <h3 className="capitalize font-bold flex flex-row ">
                        <div
                          className={`w-8 h-8 flex rounded-full mr-2 border-4 border-red transition-border duration-300 ease-in-out border-outline
                          ${
                            state.current == item
                              ? "border-white"
                              : "border-white/50"
                          }`}
                          style={{ backgroundColor: `${snap.items[item]}` }}
                        ></div>
                        <div
                          className={`h-8 leading-7 font-light ${
                            state.current == item ? "font-medium" : ""
                          }`}
                        >
                          {item}
                        </div>
                      </h3>
                    </li>
                  ))}
                </ul>

                {/* Reset Button */}
                <div className="flex flex-row relative">
                  <div className="flex text-center w-full">
                    <div
                      onClick={() => {
                        state.items.laces = "#eff6ff"
                        state.items.mesh = "#3a4759"
                        state.items.caps = "#1e3a8a"
                        state.items.inner = "#93c5fd"
                        state.items.sole = "#60a5fa"
                        state.items.stripes = "#3b82f6"
                        state.items.band = "#2563eb"
                        state.items.patch = "#1d4ed8"
                      }}
                      className="flex flex-col w-full bg-stablesBrown/10 hover:bg-stablesBrown/20 text-stablesBrown rounded-full transition-all bg-opacity-20 pr-6 pl-12 py-3 
                      before:transition-all before:content-['↻'] before:translate-x-5 hover:before:rotate-180 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-2xl before:text-stablesBrown/40 hover:before:text-stablesBrown/80 before:font-bold before:rotate-45"
                    >
                      Reset
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="flex flex-col w-full mb-20 -mt-[50em] py-44">
          <H3 title="Share your cone creation!" />
          <div className="flex flex-row mx-auto">
            <div className="flex flex-row justify-center ">
              <Link
                href="/"
                className=" bg-stablesBrown/10 hover:bg-stablesBrown/20 text-stablesBrown rounded-full transition-all bg-opacity-20 p-5 mx-2"
              >
                <Image
                  loader={simpleIconLoader}
                  className="block w-10 h-10"
                  src="twitter"
                  color="white"
                  alt="Discord"
                  width={32}
                  height={32}
                />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="/"
                className=" bg-stablesBrown/10 hover:bg-stablesBrown/20 text-stablesBrown rounded-full transition-all bg-opacity-20 p-5 mx-2"
              >
                <Image
                  loader={simpleIconLoader}
                  className="block w-10 h-10"
                  src="facebook"
                  color="white"
                  alt="Discord"
                  width={32}
                  height={32}
                />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div></div>
        </section>
      </main>

      <Footer />
    </>
  )
}
