import React from "react";

interface Props {
  name: string;
}

const Title: React.FC<Props> = ({ name }) => {
  return <p className="font-normal text-2xl mb-8 tracking-tighter">{name}</p>;
};

export default Title;
