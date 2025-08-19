import "./globals.css";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "@/public/favicon.ico";

// Import Readex Pro from Google Fonts
import { Readex_Pro } from "next/font/google";

const readexPro = Readex_Pro({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "600", "700"], // all available weights
});

export const metadata = {
  title: "موقع بوابة روضات",
  description:
    "توفر روضات حلولاً شاملة لإدارة رعاية الأطفال تسهّل العمليات وتُحسن التجربة للعائلات والمعلمين على حد سواء.",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={readexPro.className}>
      <body>
        <TopBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
