import Link from "next/link";
import { MouseEventHandler } from "react";

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title: string;
  style?: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={`${props.style} py-2 px-4 border rounded-md border-spacing-6 transition ease-in duration-200 transform hover:scale-110 active:translate-y-0`}
    >
      {props.title}
    </button>
  );
}
