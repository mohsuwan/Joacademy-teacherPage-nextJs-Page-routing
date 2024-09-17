import "@/styles/globals.css";
import type { AppProps } from "next/app";
import RootLayaot from "./layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayaot>
      <Component {...pageProps} />
    </RootLayaot>
  );
}
