import CardProduto from "@/components/CardProduto";
import imgExampleProduto1 from "../../public/examplePacote2.png";
import { Product } from "@/types/Interfaces";
import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

interface PropsHome {
  data: Product[];
}

export default function Home({ data }: PropsHome) {
  return (
    <main className={`${inter.className}`}>
      <div className="flex flex-row h-[300px] justify-center items-center border rounded-xl shadow-xl bg-white p-4 my-4 mx-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-normal">
            Aproveite agora mesmo!
          </h2>
          <p className="text-xl font-light">
            Smart phones com até{" "}
            <span className="text-4xl sm:text-5xl font-bold text-blue-800">
              10%off
            </span>{" "}
            no pix. <br />{" "}
            <span className="text-base">
              É para não perder o momento para trocar de celular!
            </span>
          </p>
        </div>
        <div>
          <Image src={imgExampleProduto1} alt="smart phones" width={250} />
        </div>
      </div>
      <div className="p-4 m-4 space-y-2">
        <h3 className="font-semibold text-2xl">Produtos:</h3>
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
