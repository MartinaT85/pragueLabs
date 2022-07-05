import "../styles/globals.css";
import type { AppProps } from "next/app";
import LayoutComponents from "../src/components/LayoutComponents";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutComponents>
      <Component {...pageProps} />
    </LayoutComponents>
  );
}

export default MyApp;
