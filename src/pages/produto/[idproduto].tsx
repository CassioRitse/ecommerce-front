import Image from "next/image";
import imgExampleProduto1 from "../../../public/examplePacote2.png";
import Button from "@/components/Button";
import { Product } from "@/types/Interfaces";
import useCart from "@/hooks/use-cart";
import { GetStaticPaths, GetStaticProps } from "next";
import axios from "axios";

interface PropsProduto {
  data: Product;
}

export default function Produto({ data }: PropsProduto) {
  const cart = useCart();

  const handlerAddToCart = (data: Product) => {
    cart.addNewItem(data);
  };

  const handlerBuyProduct = (data: Product) => {
    cart.addNewItem(data);
    location.href = "/cart";
  };

  return (
    <main>
      <div className="grid sm:grid-cols1 md:grid-cols-2 m-10">
        <div className="flex justify-center">
          <Image src={imgExampleProduto1} alt="Imagem do Produto" />
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-thin text-3xl mt-6">{data.name}</h3>
          <div className="mt-4">
            <p className="text-4xl font-thin text-start">
              R${data.price.toFixed(2)}
            </p>
            <p className="text-md font-extralight">Em até 10x no Cartão</p>
          </div>
          <div className="mt-4">
            <span
              className={`block h-5 text-center text-sm font-semibold  rounded-t-lg ${
                data.flag ? "bg-green-500" : "bg-white"
              }`}
            >
              {data.flag}
            </span>
            <p className="text-sm font-extralight">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s
            </p>
          </div>
          <div className="flex flex-col mt-8 gap-2">
            <Button
              onClick={() => handlerBuyProduct(data)}
              title="Comprar"
              style="w-[240px] bg-gray-800 text-white"
            ></Button>
            <Button
              onClick={() => handlerAddToCart(data)}
              title="Adicionar ao Carrinho"
              style="w-[240px] bg-gray-200 text-black"
            ></Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = (await axios.get(`http://localhost:3333/products`)).data;

  const paths = data.map((product: Product) => {
    return {
      params: { idproduto: product.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  data: Product;
}> = async (context) => {
  const idProduct = context.params?.idproduto;

  const data = (await axios.get(`http://localhost:3333/product/${idProduct}`))
    .data;
  return { props: { data } };
};
