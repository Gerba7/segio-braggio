import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], display: 'swap', weight: ['300', '500', '700', '900'], });

export const metadata = {
  title: "Abya Group | Well Being",
  description: "Well Being",
};

export default function OpenTrainingLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
