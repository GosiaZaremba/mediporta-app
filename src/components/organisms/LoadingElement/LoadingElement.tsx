import { CircularProgress } from "@mui/material";
import React from "react";
import "./LoadingElement.css";

export const LoadingElement: React.FC = () => {
  return (
    <div className="loading-container">
      <CircularProgress size={70} color="primary" />
    </div>
  );
};
