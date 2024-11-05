
import Footer from "./components/footer";
import Navigation from "./components/navigation";
import "./globals.scss";

export const metadata = {
  title: "Audiophile",
  description: "audiophile ecommerce website",
};

export default function RootLayout({ children, header}) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {/* {header} */}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
