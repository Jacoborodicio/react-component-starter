import { HtmlEditor } from "../src";
import ReactDOM from "react-dom";
import React from "react";
import pngImage from "./assets/pngImage.png";
import jpegImage from "./assets/jpegImage.jpeg";
import svgImage from "./assets/svgImage.svg";

const DemoPage = () => {
  return (
    <div>
      <h1>React Hot Loader</h1>
      <HtmlEditor />
      <div
        style={{
          height: 2,
          width: "100%",
          background: "black",
          margin: ".5rem 0",
        }}
      />
      <HtmlEditor logo={pngImage} />
      <div
        style={{
          height: 2,
          width: "100%",
          background: "black",
          margin: ".5rem 0",
        }}
      />
      <HtmlEditor logo={jpegImage} logoSize="1rem" />
      <div
        style={{
          height: 2,
          width: "100%",
          background: "black",
          margin: ".5rem 0",
        }}
      />
      <HtmlEditor logo={svgImage} logoSize="3rem" />
    </div>
  );
};

ReactDOM.render(<DemoPage />, document.getElementById("root"));
