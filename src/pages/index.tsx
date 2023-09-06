import CardProduto from "@/components/CardProduto";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <div className="flex p-4 m-4 gap-2">
        <CardProduto name="Carregador Iphone" price={300.0} />
        <CardProduto flag="FRETE GRATIS" name="Celular Xiaomi" price={2000.0} />
        <CardProduto flag="+ CARREGADOR" name="Celular Iphone" price={2000.0} />
      </div>
    </main>
  );
}
