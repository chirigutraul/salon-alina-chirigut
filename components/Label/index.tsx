import React, { FunctionComponent } from "react";

interface Props {
  text: string;
}

const Label: FunctionComponent<Props> = ({ text }) => {
  return (
    <label>
      <h6 className={`font-bold text-black`}>{text}</h6>
    </label>
  );
};

export default Label;
