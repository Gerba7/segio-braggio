import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], display: 'swap', weight: ['300', '400', '500', '700', '900'], });

export const metadata = {
  title: "Sergio Braggio | Abya",
  description: "Aprendizaje Transformacional",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
          {children}
        </body>
    </html>
  );
}
