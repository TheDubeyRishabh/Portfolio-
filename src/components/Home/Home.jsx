import React, { useRef } from 'react'
import "./Home.css"
import man from "../../assets/man.png"
import { TypeAnimation } from 'react-type-animation'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'

// register plugin
gsap.registerPlugin(useGSAP)

function Home() {

  const container = useRef()

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.from(".line1", {
      y: 80,
      duration: 1,
      opacity: 0,
      ease: "power3.out"
    })
    .from(".line2", {
      y: 80,
      duration: 1,
      opacity: 0,
      ease: "power3.out"
    })
    .from(".line3", {
      y: 80,
      duration: 1,
      opacity: 0,
      ease: "power3.out"
    })

    gsap.from(".righthome img", {
      x: 200,
      duration: 1,
      opacity: 0,
      ease: "power3.out"
    })

  }, { scope: container })   // scoped animation (best practice)

  return (
    <div id="home" ref={container}>
      
      <div className="lefthome">
        <div className="homedetails">
          
          <div className="line1">I'M</div>

          <div className="line2">RISHABH DUBEY</div>

          <div className="line3">
            <TypeAnimation
              sequence={[
                "A WEB DEVELOPER", 2000,
                "SOFTWARE DEVELOPER", 2000,
                "PROBLEM SOLVER", 2000,
                "DSA ENTHUSIAST", 2000,
              ]}
              speed={50}
              deletionSpeed={70}
              repeat={Infinity}
            />
          </div>

          <button onClick={() => window.location.href = "#contact"}>
            HIRE ME
          </button>

        </div>
      </div>

      <div className="righthome">
        <img src={man} alt="Profile" />
      </div>

    </div>
  )
}

export default Home