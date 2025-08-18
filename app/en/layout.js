import "./globals.css";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Rawdhat Portal Website",
  description:
    "Rawdhat offers comprehensive childcare management solutions that simplify operations and enhance the experience for families and teachers alike.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  
  return (
    <>
      <TopBar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
