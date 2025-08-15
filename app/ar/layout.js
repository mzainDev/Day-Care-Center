import "./globals.css";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "موقع بوابة روضات",
  description:
    "توفر روضات حلولاً شاملة لإدارة رعاية الأطفال تسهّل العمليات وتُحسن التجربة للعائلات والمعلمين على حد سواء.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        <TopBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
