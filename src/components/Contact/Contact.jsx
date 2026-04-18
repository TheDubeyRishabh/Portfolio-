import React from 'react'
import './Contact.css'
import con from '../../assets/contact.png'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger)

function Contact() {
  useGSAP(() => {
    gsap.from(".leftcontact img", {
      x: -100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".leftcontact img",
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
      }
    })
    gsap.from("form", {
      x: 100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "form",
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
      }
    })
  });

  return (
    <div id="contact">
      
      <div className="leftcontact">
        <img src={con} alt="contact" />
      </div>

      <div className="rightcontact">
        <form action="https://formspree.io/f/mreregnz" method="POST">
          
          <input name="Username" type="text" placeholder="Name" />
          
          <input name="Email" type="email" placeholder="Email" />
          
          <textarea name="message" id="textarea" placeholder="Message"></textarea>
          
          <input type="submit" id="btn" value="Submit" />

        </form>
      </div>

    </div>
  )
}

export default Contact