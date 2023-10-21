import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";
import { ThemeProvider } from "../components/reusable/theme-provider";
import Navbar from "../components/navbar";
import ClerkLayout from "../components/layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkLayout>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Navbar />
        <Component {...pageProps} />;
      </ThemeProvider>
    </ClerkLayout>
  );
};

export default MyApp;
