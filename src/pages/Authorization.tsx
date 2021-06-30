import React from "react";
import { Link } from "react-router-dom";
import { CenteredDiv } from "./../component/CenteredDiv";

export const Authorization = (): JSX.Element => {
  return (
    <>
      <header>
        <Link to="/234">Go to Goally Template Library</Link>
      </header>
      <CenteredDiv title="Sign In" />
    </>
  );
};
