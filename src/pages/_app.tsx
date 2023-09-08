import NavBar from "@/components/NavBar";
import ToastProvider from "@/providers/toast-provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastProvider />
      <NavBar />
      <Component {...pageProps} />;
    </>
  );
}
