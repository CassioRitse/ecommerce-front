import useCart from "@/hooks/use-cart";
import ItemMenu, { ItemMenuProps } from "./ItemMenu";
import { useEffect, useState } from "react";

interface NavBarProps {
  props?: Array<ItemMenuProps>;
}

export default function NavBar(props: NavBarProps) {
  const [cartItems, setCartItems] = useState<number>(0);

  const cart = useCart();

  useEffect(() => {
    setCartItems(cart.items.length);
  }, [cart.items]);

  return (
    <nav className="flex items-center justify-between bg-white h-16 shadow-xl p-2">
      <div>
        <p className="text-black ml-4 cursor-pointer text-2xl">E-Commerce</p>
      </div>
      <ul className="flex gap-2">
        <ItemMenu title="Produtos" href="/" />
        <ItemMenu title={"Meu Carrinho (" + cartItems + ")"} href="/cart" />
      </ul>
    </nav>
  );
}
