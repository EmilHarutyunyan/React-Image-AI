import {useState, useEffect} from "react";
import * as THREE from "three";
import BIRDS from 'vanta/dist/vanta.birds.min'

function Bird() {
  const [vantaEffect, setVantaEffect] = useState(0)
  // const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: "#root",
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0xffffff,
        color1: 0x0,
        color2: 0x0
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  // return (<div style={{ height: "100vh", width: "100%" }} ref={myRef}>
    
  // </div>)
  return (null)
}
export default Bird;
