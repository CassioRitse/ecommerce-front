import CardProduto from "@/components/CardProduto";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <div className="p-4 m-4 space-y-2">
        <h2 className="font-semibold text-2xl">Produtos:</h2>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
          <CardProduto
            qnt={1}
            id="dce75124-0d5d-44d3d-84f3-28ec1414c97d"
            name="Carregador Iphone"
            price={300.0}
          />
          <CardProduto
            qnt={1}
            id="dce75124-0d5d-44d3d-84f3-28edc1414c97d"
            flag="FRETE GRATIS"
            name="Celular Xiaomi"
            price={2000.0}
          />
          <CardProduto
            qnt={1}
            id="dce75124-0d5d-443sdd-84f3-28ec1414c97d"
            flag="+ CARREGADOR"
            name="Celular Iphone"
            price={2000.0}
          />
        </div>
      </div>
    </main>
  );
}
