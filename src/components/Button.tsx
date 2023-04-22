import React from "react";

interface Props {
  name: string;
  onclick: () => void;
}

const Button = ({ name, onclick }: Props) => {
  return (
    <div>
      <button onClick={onclick}>{name}</button>
    </div>
  );
};

export default Button;
