import Link from "next/link";

export interface ItemMenuProps {
  title: string;
  href: string;
}

export default function ItemMenu(props: ItemMenuProps) {
  return (
    <li className="text-black px-4 py-2 hover:text-sky-600 transition-all duration-200 rounded">
      <Link href={props.href}>{props.title}</Link>
    </li>
  );
}
