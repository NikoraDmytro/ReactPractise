import React from "react";
import "./styles.scss";

type CenteredDivProps = {
  children: React.ReactNode;
};

export const CenteredDiv = (props: CenteredDivProps): JSX.Element => {
  return (
    <div className="fixed-overlay">
      <div className="centered ">{props.children}</div>
    </div>
  );
};
