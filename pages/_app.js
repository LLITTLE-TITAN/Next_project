
import "./global.css";
//import ThemeProvider from "../path/themeContext";
import { ThemeProvider } from 'next-themes'
function MyApp({ Component, pageProps } ) {
  return (
    <ThemeProvider>
      <Component {...pageProps} attribute="class" />
    </ThemeProvider>
  );
}

export default MyApp;
