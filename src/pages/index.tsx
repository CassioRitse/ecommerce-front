import CardProduto from "@/components/CardProduto";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <div className="p-4 m-4 space-y-2">
        <h2 className="font-semibold text-2xl">Produtos:</h2>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
          <CardProduto name="Carregador Iphone" price={300.0} />
          <CardProduto
            flag="FRETE GRATIS"
            name="Celular Xiaomi"
            price={2000.0}
          />
          <CardProduto
            flag="+ CARREGADOR"
            name="Celular Iphone"
            price={2000.0}
          />
        </div>
      </div>
    </main>
  );
}
