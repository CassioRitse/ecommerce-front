import Button from "@/components/Button";
import ItemTable from "@/components/ItemTable";
import TableProducts from "@/components/TableProducts";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types/Interfaces";
import { UUID } from "crypto";
import { useEffect, useState } from "react";

export default function Cart() {
  // UseState para armazenar os itens do carrinho
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const cart = useCart();

  //para que as informações do localstorage sejam recuperadas
  useEffect(() => {
    setCartItems(cart.items);
  }, [cart.items]);

  //limpa todo o carrinho
  const hanldeCleanCart = () => {
    cart.removeAll();
  };

  //Adiciona mais uma unidade de um produto existe no carrinho
  const hanldeOneMoreItem = (id: UUID) => {
    cart.OneMoreItem(id);
  };

  //Retira uma unidade de um produto existe no carrinho
  const hanldeOneLessItem = (id: UUID) => {
    cart.OneLessItem(id);
  };

  //remove um item do carrinho
  const hanldeRemoveItem = (id: UUID) => {
    cart.removeItem(id);
  };

  return (
    <main className="p-4 m-4 space-y-4 h-screen ">
      <div className="rounded-lg bg-white shadow-lg p-4">
        <h3 className="text-2xl font-semibold">Meu Carrinho de Compras</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="col-span-1 md:col-span-2">
          <TableProducts
            amount={cartItems.reduce(
              (amount, item) => amount + item.price * item.qnt,
              0
            )}
            qtn={cartItems.reduce((amount, item) => amount + item.qnt, 0)}
          >
            {cartItems.map((item) => (
              <ItemTable
                handlerRemoveItem={hanldeRemoveItem}
                handlerMoreItem={hanldeOneMoreItem}
                handlerOneLessItem={hanldeOneLessItem}
                key={item.id}
                product={item}
                qnt={item.qnt}
              ></ItemTable>
            ))}
          </TableProducts>
        </div>
        <div className="col-span-1 justify-end rounded-lg bg-white shadow-lg p-4">
          <p className="text-xl font-medium">Meu Pedido:</p>
          <p className="text-lg font-light">
            Produtos: {cartItems.reduce((amount, item) => amount + item.qnt, 0)}
          </p>
          <p className="text-lg font-light">Frete: 00.00</p>
          <p className="text-xl font-light">Desconto: 00.00</p>
          <p className="text-3xl font-normal my-4">
            Total:
            {cartItems.reduce(
              (amount, item) => amount + item.price * item.qnt,
              0
            )}
          </p>
          <div className="flex flex-row gap-4">
            <Button
              title="Finalizar Compra"
              style="bg-black text-white"
            ></Button>
            <Button
              onClick={hanldeCleanCart}
              title="Limpar Carrinho"
              style="bg-transparent text-black"
            ></Button>
          </div>
        </div>
      </div>
    </main>
  );
}
