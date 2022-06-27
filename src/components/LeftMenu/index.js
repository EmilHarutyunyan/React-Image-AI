import React from 'react';
import { NavLink } from "react-router-dom";
// import { useState } from 'react/cjs/react.development';
// Image
import LogoHeart from "../../images/Header/heart.gif";
import SpiralSymbol from "../../images/Logo/Spiral-Symbol-Png.png"
// Styles
import { Wrapper, Content, LogoImg, Nav } from "./LeftMenu.styles";

export const ImageLinks = [
  {
    title: "Image Colorization",
    link: "/image-recognition/colorizer",
    active: "active",
    subLink: "colorizer",
    inputBox: 1,
  },
  {
    title: "Remove Background",
    link: "/image-recognition/remove-background",
    active: "active",
    subLink: "remove-background",
    inputBox: 1,
  },
  {
    title: "Super Resolution",
    link: "/image-recognition/torch-srgan",
    subLink: "torch-srgan",
    inputBox: 1,
  },
  {
    title: "Deep Dream",
    link: "/image-recognition/deepdream",
    subLink: "deepdream",
    inputBox: 1,
  },
  {
    title: "Toonify",
    link: "/image-recognition/toonify",
    subLink: "toonify",
    inputBox: 1,
  },
  {
    title: "Waifu2x",
    link: "/image-recognition/waifu2x",
    subLink: "waifu2x",
    inputBox: 1,
  },
  {
    title: "Neural Style",
    link: "/image-recognition/neural-style",
    subLink: "neural-style",
    inputBox: 2,
  },
  {
    title: "High-Resolution Daytime Translation",
    link: "/image-recognition/hidt",
    subLink: "hidt",
    inputBox: 2,
  },
];

function LeftMenu({menu = ImageLinks}) {
  let menuClick = false
  const nameField = React.useRef(null);

  const transform =() => {
    const tassle = nameField.current;

    if(window.screen.availWidth <= 992) {
      if(!menuClick) {
        console.log(window.screen.availWidth);
        tassle.style.transform = "translateX(0px)"
        tassle.nextElementSibling.style.animation = "blur forwards 1s"
        menuClick = true
      }
      else {
        tassle.style.transform = ""
        tassle.nextElementSibling.style.animation = "blur-none forwards 1s"
        menuClick = false
        
      }
    }
    


  }
   return (
     <aside ref={nameField} >
       <Wrapper>
         <Content>
           <LogoImg>
             <NavLink to="/">
               <img src={LogoHeart} alt="Logo" />
             </NavLink>
           </LogoImg>
           <Nav>
             <ul>
               {menu.map((item, id) => (
                 <li key={id} className={item.active}>
                   <NavLink to={item.link} onClick={transform}>{item.title}</NavLink>
                 </li>
               ))}
             </ul>
           </Nav>
         </Content>
          <div className="tassel" onClick={transform}>
            <img src={SpiralSymbol} alt="Symbol"></img>
          </div>
       </Wrapper>
     </aside>
   );
}
export default LeftMenu;