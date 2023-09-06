import ItemMenu, { ItemMenuProps } from "./ItemMenu";

interface NavBarProps {
  props?: Array<ItemMenuProps>;
}

export default function NavBar(props: NavBarProps) {
  return (
    <nav className="flex items-center justify-between bg-white h-16 shadow-2xl p-2">
      <div>
        <p className="text-black ml-4 cursor-pointer text-2xl">E-Commerce</p>
      </div>
      <ul className="flex gap-2">
        <ItemMenu title="Produtos" href="/" />
        <ItemMenu title="Meu Carrinho" href="/" />
      </ul>
    </nav>
  );
}
