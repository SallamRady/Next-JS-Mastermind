import MainHeader from "@/components/layout/main-header/mainHeader";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainHeader />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
