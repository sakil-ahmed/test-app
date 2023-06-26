import Intro from "@/components/IntroTextAnimation/Intro";
import "@/styles/Main.scss";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(false);
    }, 4500);

    // Cleanup the event listener
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <>{isLoading ? <Intro /> : <Component {...pageProps} />}</>;
}
