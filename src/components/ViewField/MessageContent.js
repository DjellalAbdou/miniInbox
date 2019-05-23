import React from "react";

export default function MessageContent(props) {
  const myarr = props.text.split(".").map((parag, index) => {
    if (parag !== "") return <p key={index}>{`${parag}.`}</p>;
    return null;
  });
  return <div className="messagecontent">{myarr}</div>;
}
