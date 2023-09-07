import Image from "next/image";
import imgExampleProduto1 from "../../../public/examplePacote2.png";
import Button from "@/components/Button";
import { Product } from "@/types/Interfaces";

export default function Produto(props: Product) {
  return (
    <main>
      <div className="grid sm:grid-cols1 md:grid-cols-2 m-10">
        <div className="flex justify-end">
          <Image src={imgExampleProduto1} alt="Imagem do Produto" />
        </div>
        <div className="flex flex-col ml-12 mt-6 items-center md:items-start">
          <h3 className="font-thin text-3xl mt-6">Nome do Produto</h3>
          <div className="mt-4">
            <p className="text-4xl font-thin text-start">R${3000}.00</p>
            <p className="text-md font-extralight">Em até 10x no Cartão</p>
          </div>
          <div className="mt-4">
            <span
              className={`block h-5 text-center text-sm font-semibold  rounded-t-lg ${
                props.flag ? "bg-green-500" : "bg-white"
              }`}
            >
              {props.flag}
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
          <div className="mt-8">
            <Button
              title="Comprar"
              style="w-[240px] bg-gray-800 text-white"
            ></Button>
          </div>
        </div>
      </div>
    </main>
  );
}
