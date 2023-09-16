import React from "react";
import convertImage from "../../assets/images/icon-arrow.svg"
import "./DividerButton.css"

const DividerButton = () => {
  return (
    <div className="divider">
      <hr></hr>
      <img src={convertImage} alt="convert-button-image" />
    </div>
  )
}

export default DividerButton;