import Image from "next/image";
import Link from "next/link";
import imgExampleProduto1 from "../../public/examplePacote2.png";
import { Product } from "@/types/Interfaces";

export default function CardProduto(produto: Product) {
  return (
    <div className="w-[240px] border rounded-lg shadow-xl bg-white transition-all duration-200 hover:-translate-y-1">
      <Link href={`/produto/${produto.id}`}>
        <span
          className={`block h-5 text-center text-sm font-semibold  rounded-t-lg ${
            produto.flag ? "bg-green-500" : "bg-white"
          }`}
        >
          {produto.flag}
        </span>
        <div className="p-4">
          <div>
            <Image src={imgExampleProduto1} alt="Imagem do Produto"></Image>
          </div>
          <div className="border-solid border-t-2 border-gray-400 pt-4 mt-6">
            <p className="text-sm font-light">{produto.name}</p>
            <p className="text-3xl font-normal my-4 text-center">
              R${produto.price.toFixed(2)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
