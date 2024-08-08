import { Roboto } from "next/font/google";
import MainCover from "./ui/components/Home/MainCover/MainCover";

const roboto = Roboto({ subsets: ["latin"], display: 'swap', weight: ['300', '400', '500', '700', '900'], });

export default function Home() {

  
  return (
    <main className={roboto.className}>
        <MainCover />
    </main>
  );
}
