import Link from "next/link";

interface ButtonProps {
  style?: string;
  title: string;
  href: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`${props.style} py-2 px-4 border rounded-md border-spacing-6 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0`}
    >
      <Link href={props.href}>{props.title}</Link>
    </button>
  );
}
