import React from "react";
import { CopyrightContainer } from "./CopyrightStyled";
// import flag from '../../asset/flag.png'
// import {FaChevronDown} from 'react-icons/fa'

const Copyright = () => {
  return (
    <CopyrightContainer>
      {/* <button>
        <img src={flag} alt="gla" />
        <p>English</p>
        <FaChevronDown />
      </button> */}

      <p>
        <a href="/">Legal Information</a>
      </p>

      <p>
        Made by <a href="https://twitter.com/SamJarvis244">Samuel Jarvis</a>
      </p>
    </CopyrightContainer>
  );
};

export default Copyright;
