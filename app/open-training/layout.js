import { Inter } from "next/font/google";
import Navbar2 from "../ui/components/OpenTraining/Navbar2/Navbar2";
import Footer2 from "../ui/components/OpenTraining/Footer2/Footer2";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sergio Braggio | Open Training",
  description: "Open Training",
};

export default function OpenTrainingLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar2 />
            {children}
          <Footer2 />
        </body>
    </html>
  );
}
