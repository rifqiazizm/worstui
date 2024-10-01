import "@/styles/globals.css";

export default function App({ Component, pageProps }) {

  const getLayout = Component.layOut ?? ((page) => page)

  return getLayout(<Component {...pageProps} />);
}
