import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

   :root {
      --maxWidth: 1440px;
      --white: #fff;
      --monoGray: #1A1A1A;
      --monoGrayDark: #0A0A0A;
      --monoGrayLight: #22272C;
      --monoGray2: #242426;
      --fontSuperBig: 2.5rem;
      --fontBig: 1.5rem;
      --fontMed: 1.2rem;
      --fontSmall: 1rem;
   }
   /* Reset Style*/
   html, body, div, span, applet, object, iframe,
   h1, h2, h3, h4, h5, h6, p, blockquote, pre,
   a, abbr, acronym, address, big, cite, code,
   del, dfn, em, img, ins, kbd, q, s, samp,
   small, strike, strong, sub, sup, tt, var,
   b, u, i, center,
   dl, dt, dd, ol, ul, li,
   fieldset, form, label, legend,
   table, caption, tbody, tfoot, thead, tr, th, td,
   article, aside, canvas, details, embed, 
   figure, figcaption, footer, header, hgroup, 
   menu, nav, output, ruby, section, summary,
   time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline; 
   }
   /* HTML5 display-role reset for older browsers */
   article, aside, details, figcaption, figure, 
   footer, header, hgroup, menu, nav, section {
      display: block;
   }
   ol, ul {
      list-style: none;
   }
   blockquote, q {
      quotes: none;
   }
   blockquote:before, blockquote:after,
   q:before, q:after {
      content: '';
      content: none;
   }
   table {
      border-collapse: collapse;
      border-spacing: 0;
   }
   /* End Reset Style */
   * {
      box-sizing: border-box;
   }
   body {
      padding: 0;
      margin: 0;
      font-family: 'Minimal Mono Regular', sans-serif;
      font-size: 14px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: var(--monoGray);
      

      h1 {
         font-size: 2rem;
         font-weight: 600;
         color: var(---monoGray);
      }
      h3 {
         font-size: 1rem;
         font-weight: 600;
      }
      p {
         font-size: 1rem;
         color: var(---monoGray);
      }
      a {
         text-decoration:none;
      }
      ol, ul {
         list-style: none;
      }
   }
   section {
      position: relative;
      z-index: 1;
   }
   ::-webkit-scrollbar-track
   {
      border: 1px solid var(--monoGrayDark);
      background-color: #F5F5F5;
   }

   ::-webkit-scrollbar
   {
      width: 10px;
      background-color: #F5F5F5;
   }

   ::-webkit-scrollbar-thumb
   {
      background-color: var(--monoGray2);	
   }
   .spin-ton {
      width: 100%;
     
   }
   @keyframes animateOpacityImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
