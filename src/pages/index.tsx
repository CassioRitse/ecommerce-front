import CardProduto from "@/components/CardProduto";
import { Product } from "@/types/Interfaces";
import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface PropsHome {
  data: Product[];
}

export default function Home({ data }: PropsHome) {
  console.log(data);
  return (
    <main className={`${inter.className}`}>
      <div className="p-4 m-4 space-y-2">
        <h2 className="font-semibold text-2xl">Produtos:</h2>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
          {data.map((product) => (
            <CardProduto key={product.id} {...product} />
          ))}
        </div>
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<{
  data: PropsHome;
}> = async () => {
  const data = (await axios.get("http://localhost:3333/products")).data;

  return { props: { data } };
};
