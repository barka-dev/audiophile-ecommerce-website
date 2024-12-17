
import Footer from "./components/footer";
import Navigation from "./components/navigation";
import { ProductProvider } from "./contexts";
import "./globals.scss";

export const metadata = {
  title: "Audiophile",
  description: "audiophile ecommerce website",
};

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body>
        <ProductProvider>
          <Navigation/>
          {children}
          <Footer/>
        </ProductProvider>
      </body>
    </html>
  );
}
