import Button from "@/components/Button";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types/Interfaces";
import axios from "axios";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function FinalizePurchase() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const cart = useCart();

  //para que as informações do localstorage sejam recuperadas
  useEffect(() => {
    setCartItems(cart.items);
  }, [cart.items]);

  const formSubmit = async ({ email }: { email: string }) => {
    toast("Já recebemos seu pedido, obrigado!😁");

    const productsInCart = cartItems.map((item) => ({
      productId: item.id,
      qnt: item.qnt,
    }));

    const data = {
      email,
      products: productsInCart,
    };

    await axios.post("http://localhost:3333/purchase", data);
    location.href = "/";
    cart.removeAll();
  };

  return (
    <main className={`flex justify-center items-center ${inter.className}`}>
      {cartItems.length > 0 ? (
        <div className="w-full sm:w-1/2 p-4 my-12 text-justify bg-white border rounded-xl shadow-lg">
          <div>
            <h1 className="text-4xl font-medium my-4">Finalizar Compra!</h1>
            <p className="text-xl font-light">
              Você está a um passo de finalizar sua compra, digite agora mesmo
              seu email e confirme seu pedido.
            </p>
          </div>
          <div className="my-4">
            <h3 className="text-xl font-light mb-2">Minha Compra:</h3>
            {cartItems.map((item) => (
              <p
                className="text-sm font-normal p-2 border rounded-lg bg-stone-100"
                key={item.id}
              >{`${item.qnt} - ${item.name}, R$:${item.qnt * item.price}`}</p>
            ))}
          </div>
          <div>
            <form
              className="flex flex-col gap-2 justify-center"
              onSubmit={handleSubmit(formSubmit)}
            >
              <span>Email:</span>
              <input
                className="p-2 border-2 rounded-lg"
                placeholder="emailexaemple@example.com"
                alt="campo para email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: new RegExp(
                      /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm
                    ),
                    message: "Email invalido",
                  },
                })}
              ></input>
              {errors.email && (
                <p className="text-red-600">* Insira um email valido!</p>
              )}
              <Button title="Finalizar Compra" style=" bg-black text-white" />
            </form>
          </div>
        </div>
      ) : (
        <div className="h-[500px]">
          <h1 className="text-4xl font-medium my-4">Carrinho Vazio!</h1>
          <Link href={"/"} className="text-blue-600 underline">
            Voltar as compras
          </Link>
        </div>
      )}
    </main>
  );
}
