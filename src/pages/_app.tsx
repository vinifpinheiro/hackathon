import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";
import { ThemeProvider } from "../components/reusable/theme-provider";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Component {...pageProps} />;
    </ThemeProvider>
  );
};

export default MyApp;
