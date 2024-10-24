import React, { useState } from "react";
import * as S from "./Image/Image.styled.jsx";
import jpegImage from "./assets/jpegImage.jpeg";
import "./plainCssTest.css";

export const HtmlEditor = ({ logo, style, logoSize }) => {
  console.log("Inside HtmlEditor");
  const [state, setState] = useState({ user: "Me" });
  return (
    <div style={style ? { ...style } : {}}>
      <S.Flex>
        <p style={{ background: "lightblue" }}>Example of something</p>
        <p style={{ background: "lightcoral" }}>Example of nothing</p>
      </S.Flex>
      <S.Flex>
        <button
          onClick={() =>
            setState(state.user === "Me" ? { user: "You" } : { user: "Me" })
          }
        >
          Change {state.user}
        </button>
        {logo && <S.Image src={logo} alt="logo" size={logoSize} />}
        <S.Image
          src={jpegImage}
          alt="jpeg"
          size="1.5rem"
          style={{
            border: "1px solid lightcoral",
            borderRadius: "50%",
            padding: "0.5rem",
          }}
        />
      </S.Flex>
    </div>
  );
};
