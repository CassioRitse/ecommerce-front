import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className=" bg-slate-100">
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
