import "./Card.css";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Card = (props: Props) => {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};
