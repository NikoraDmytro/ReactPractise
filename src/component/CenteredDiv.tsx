import React from "react";
import "./styles.scss";

type CenteredDivProps = {
  title: string;
};

export const CenteredDiv = ({ title }: CenteredDivProps): JSX.Element => {
  return (
    <div className="fixed-overlay">
      <div className="centered ">
        <h1>{title}</h1>
      </div>
    </div>
  );
};
