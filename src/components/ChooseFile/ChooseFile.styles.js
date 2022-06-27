import styled from "styled-components";

export const Wrapper = styled.div`

  display: flex;
  justify-content: space-between;
  width: 78%;
  margin: 0 auto;
  flex-wrap: wrap;
  max-width: 1150px;
  @keyframes blur {
  0%  {
     -webkit-filter: blur(0px);
     fill: blue(0px);
  }
  100% { 
    -webkit-filter: blur(10px); 
    filter: blur(10px);
  }
  }
  @keyframes blur-none {
  0%  {
     -webkit-filter: blur(10px);
     fill: blue(10px);
  }
  100% { 
    -webkit-filter: blur(0px); 
    filter: blur(0px);
  }
  }

  @media only screen and (max-width: 690px) {
    margin-top: 90px;
  }

  .form-content {
    width: 50%;
    max-width: 430px;
    position: relative;
    padding: 0 15px;
    animation: animateOpacityImage 1s;

    @media only screen and (max-width: 690px) {
      width: 100%;
      max-width: 350px;
      :first-child {
        margin-bottom: 60px;
      }
    }
    & .custom-btn {
      margin-top: 30px;
      display: block;
      width: 100%;
      height: 50px;
      border: none;
      outline: none;
      font-size: 18px;
      font-weight: 500;
      letter-spacing: 1px;
      text-transform: uppercase;
      cursor: pointer;
      background: transparent;
      border: 2px solid #444444;
    }
    &-box {
      position: relative;
      border: 1px solid;
      & .cancel-btn {
        width: 100%;
        height: 30px;
        position: absolute;
        font-size: 20px;
        right: 15px;
        top: 15px;
        color: var(--monoGrayLight);
        cursor: pointer;
        /* display: none; */
        z-index: 6;
        text-align: right;
      }
      & .cancel-btn img {
        display: none;
        z-index: 2;
        width: 30px;
        height: 30px;
        background-color: white;
        /* display: inline-block; */
      }
      &.active:hover .cancel-btn img {
        display: inline-block;
        fill: var(--monoGray2);
      }
      & .cancel-btn img:hover {
        fill: #000;
      }
      & .file-name {
        position: absolute;
        bottom: 0px;
        width: 100%;
        padding: 8px 0;
        font-size: 18px;
        color: #fff;
        display: none;
        text-align: center;
        background: var(--monoGray);
      }
      &.active:hover .file-name {
        display: block;
      }
      /* &.active {
        border: none;
      } */
      &.active .content {
        display: none;
      }
    }
    &-img {
      width: 100%;
      min-height: 300px;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      @media only screen and (max-width: 690px) {
        width: 100%;
        min-height: 210px;
      }

      & .image {
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      & img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
      & .icon {
        font-size: 100px;
        color: #9658fe;
      }
      &.text {
        font-size: 20px;
        font-weight: 500;
        color: #5b5b7b;
      }
      &.active .content {
        display: none;
      }
      & .content img {
        display: block;
        width: 150px;
        height: auto;
        margin: 0 auto;
        object-fit: cover;
      }
    }
  }
  .form-content__style {
    width: 100%;
    max-width: 430px;
    position: relative;
    animation: animateOpacityImage 1s;
    text-align: center;
    @media only screen and (max-width: 690px) {
      width: 100%;
      max-width: 350px;
      :first-child {
        margin-bottom: 60px;
      }
    }
    p {
      padding-top: 8px;
    }
    
    & .custom-btn {
      margin-top: 30px;
      display: block;
      width: 100%;
      height: 50px;
      border: none;
      outline: none;
      font-size: 18px;
      font-weight: 500;
      letter-spacing: 1px;
      text-transform: uppercase;
      cursor: pointer;
      background: transparent;
      border: 2px solid #444444;
    }
    &-box {
      position: relative;
      border: 1px solid;
      margin-top: 20px;
      &:first-child {
        margin-top: 0px;
      }
      & .cancel-btn {
        width: 100%;
        height: 30px;
        position: absolute;
        font-size: 20px;
        right: 15px;
        top: 15px;
        color: var(--monoGrayLight);
        cursor: pointer;
        /* display: none; */
        z-index: 6;
        text-align: right;
      }
      & .cancel-btn img {
        display: none;
        z-index: 2;
        width: 30px;
        height: 30px;
        background-color: white;
        /* display: inline-block; */
      }
      &.active:hover .cancel-btn img {
        display: inline-block;
        fill: var(--monoGray2);
      }
      & .cancel-btn img:hover {
        fill: #000;
      }
      & .file-name {
        position: absolute;
        bottom: 0px;
        width: 100%;
        padding: 8px 0;
        font-size: 18px;
        color: #fff;
        display: none;
        text-align: center;
        background: var(--monoGray);
      }
      &.active:hover .file-name {
        display: block;
      }
    }
    &-img {
      width: 100%;
      min-height: 260px;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;

      @media only screen and (max-width: 690px) {
        width: 100%;
        min-height: 210px;
      }

      & .image {
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      & img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
      & .icon {
        font-size: 100px;
        color: #9658fe;
      }
      &.text {
        font-size: 20px;
        font-weight: 500;
        color: #5b5b7b;
      }
      &.active .content {
        display: none;
      }
      & .content img {
        display: block;
        width: 150px;
        height: auto;
        margin: 0 auto;
        object-fit: cover;
      }
    }

      & .image {
        position: absolute;
        height: 80%;
        width: 66%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: 1px solid;
      }
      & img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
      & .icon {
        font-size: 100px;
        color: #9658fe;
      }
      &.text {
        font-size: 20px;
        font-weight: 500;
        color: #5b5b7b;
      }
      &.active .content {
        display: none;
      }
      & .content img {
        display: block;
        width: 150px;
        height: auto;
        margin: 0 auto;
        object-fit: cover;
        animation: animateOpacityImage 1s;
      }
    }
  
  .form-content .form-content__style-box {
    position: relative;
    border: 1px solid;
  }

  /* ------------------------- */

  .inputFile {
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden;
    z-index: 5;
    position: absolute;
    cursor: pointer;
  }
  /* Select */
  .select-custom {
    margin: 0 auto;
    position: relative;
    width: 100%;
    margin-top: 30px;
    display: block;
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    font-size: 18px;
    font-weight: 500;
    -webkit-letter-spacing: 1px;
    -moz-letter-spacing: 1px;
    -ms-letter-spacing: 1px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    background: transparent;
  }
  .select-custom.is-active .select-custom__body {
    display: block;
  }

  .select-custom__header {
    cursor: pointer;
    display: flex;
    border: 2px solid #444444;
  }
  .select-custom__current {
    font-size: 18px;
    line-height: 24px;
    padding: 8px;
  }
  .select-custom__icon {
    align-items: center;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    height: 40px;
    margin-left: auto;
    text-align: center;
    width: 40px;
  }

  .select-custom__body {
    overflow-x: overlay;
    max-height: 100px;
    border: 2px solid #444444;
    border-top: 0;
    display: none;
    left: 0;
    position: absolute;
    right: 0;
    top: 86%;
    background-color: #fff;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background-color: #e4e4e4;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--monoGray);
    }
  }
  .select-custom__item {
    cursor: pointer;
    font-size: 16px;
    line-height: 24px;
    padding: 8px;
  }

  .select-custom__item:hover {
    background-color: #f2f2f2;
  }
  @media only screen and (max-width: 1440px) {
    width: 66%;
  }
  @media only screen and (max-width: 992px) {
    width: 100%;
  }
  @media only screen and (max-width: 690px) {
    width: 100%;
    justify-content: center;
  }
`;
