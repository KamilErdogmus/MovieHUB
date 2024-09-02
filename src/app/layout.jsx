import Header from "@/components/Header";
import "./globals.css";
import Provider from "./Provider";
import Tabs from "@/components/Tabs";

export const metadata = {
  title: "MovieHUB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body>
        <Provider>
          <Header />
          <Tabs />
          {children}
        </Provider>
      </body>
    </html>
  );
}
