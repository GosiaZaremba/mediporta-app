import React from "react";
import "./ErrorElement.css";
import img from "../../../assets/img/error.jpg";

export type Props = {
  errorMsg?: string;
};

export const ErrorElement: React.FC<Props> = ({ errorMsg }) => {
  return (
    <div className="error-img-container">
      <img src={img} alt="error" />
      <p>{errorMsg}</p>
    </div>
  );
};
