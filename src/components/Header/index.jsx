import React, {useEffect, useRef} from "react";
import { NavLink } from "react-router-dom";
// Image
import LogoHeart from '../../images/Header/heart.gif'
import {HiOutlineMenu} from 'react-icons/hi'
// Styles
import { Wrapper, Content, LogoImg, NavLinks, Link, ListItem, Button} from "./Header.styles.jsx";

const menu = [
  {
    title: "Image Recognition ",
    link: "/image-recognition",
    active: "active",
  },
  {
    title: "Video Recognition ",
    link: "/video-recognition",
  },
  {
    title: "Text Recognition ",
    link: "/text-recognition",
  },
];


function Header() {

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);


  useEffect(() => {
    // Store Page Accordion
    let acc = document.getElementsByClassName("product-demo-accordion");
    let i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }

  }, [])
  
   return (
     <header>
       <Wrapper>
         <Content>
           <LogoImg>
             <NavLink to="/">
               <img src={LogoHeart} alt="Logo" />
             </NavLink>
           </LogoImg>
            <Button className="product-demo-accordion">
              <HiOutlineMenu />
            </Button>
           <NavLinks ref={linksContainerRef}>
             <Link ref={linksRef}>
               {menu.map((item, id) => (
                 <ListItem key={id} className={item.active}>
                   <NavLink to={item.link} >
                     {item.title}
                   </NavLink>
                 </ListItem>
               ))}
             </Link>
           </NavLinks>
         </Content>
       </Wrapper>
     </header>
   );
}
// const Header = () => (
   
// );


export default Header;